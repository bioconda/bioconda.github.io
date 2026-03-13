:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haplocheck'
.. highlight: bash

haplocheck
==========

.. conda:recipe:: haplocheck
   :replaces_section_title:
   :noindex:

   Detects in\-sample contamination in mtDNA or WGS sequencing studies by analyzing the mitchondrial content.

   :homepage: https://github.com/genepi/haplocheck
   :license: MIT
   :recipe: /`haplocheck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplocheck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplocheck/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.256545.119`

   


.. conda:package:: haplocheck

   |downloads_haplocheck| |docker_haplocheck|

   :versions:
      
      

      ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``

      

   
   :depends on openjdk: ``>=8``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install haplocheck

to add into an existing workspace instead, run::

    pixi add haplocheck

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install haplocheck

Alternatively, to install into a new environment, run::

    conda create -n envname haplocheck

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/haplocheck:<tag>

(see `haplocheck/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_haplocheck| image:: https://img.shields.io/conda/dn/bioconda/haplocheck.svg?style=flat
   :target: https://anaconda.org/bioconda/haplocheck
   :alt:   (downloads)
.. |docker_haplocheck| image:: https://quay.io/repository/biocontainers/haplocheck/status
   :target: https://quay.io/repository/biocontainers/haplocheck
.. _`haplocheck/tags`: https://quay.io/repository/biocontainers/haplocheck?tab=tags


.. raw:: html

    <script>
        var package = "haplocheck";
        var versions = ["1.3.3","1.3.3","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haplocheck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haplocheck/README.html