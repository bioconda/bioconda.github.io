:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haplogrep3'
.. highlight: bash

haplogrep3
==========

.. conda:recipe:: haplogrep3
   :replaces_section_title:
   :noindex:

   A tool for mtDNA haplogroup classification.

   :homepage: https://haplogrep.i-med.ac.at
   :documentation: https://haplogrep.readthedocs.io/en/latest
   
   :developer docs: https://github.com/genepi/haplogrep3
   :license: MIT / MIT
   :recipe: /`haplogrep3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplogrep3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplogrep3/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkad284`

   


.. conda:package:: haplogrep3

   |downloads_haplogrep3| |docker_haplogrep3|

   :versions:
      
      

      ``3.2.2-1``,  ``3.2.2-0``

      

   
   :depends on openjdk: ``>=11``

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

    pixi global install haplogrep3

to add into an existing workspace instead, run::

    pixi add haplogrep3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install haplogrep3

Alternatively, to install into a new environment, run::

    conda create -n envname haplogrep3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/haplogrep3:<tag>

(see `haplogrep3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_haplogrep3| image:: https://img.shields.io/conda/dn/bioconda/haplogrep3.svg?style=flat
   :target: https://anaconda.org/bioconda/haplogrep3
   :alt:   (downloads)
.. |docker_haplogrep3| image:: https://quay.io/repository/biocontainers/haplogrep3/status
   :target: https://quay.io/repository/biocontainers/haplogrep3
.. _`haplogrep3/tags`: https://quay.io/repository/biocontainers/haplogrep3?tab=tags


.. raw:: html

    <script>
        var package = "haplogrep3";
        var versions = ["3.2.2","3.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haplogrep3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haplogrep3/README.html