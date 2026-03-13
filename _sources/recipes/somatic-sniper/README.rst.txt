:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'somatic-sniper'
.. highlight: bash

somatic-sniper
==============

.. conda:recipe:: somatic-sniper
   :replaces_section_title:
   :noindex:

   A tool to call somatic single nucleotide variants.

   :homepage: https://github.com/genome/somatic-sniper/
   :license: MIT
   :recipe: /`somatic-sniper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somatic-sniper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somatic-sniper/meta.yaml>`_

   


.. conda:package:: somatic-sniper

   |downloads_somatic-sniper| |docker_somatic-sniper|

   :versions:
      
      

      ``1.0.5.0-1``,  ``1.0.5.0-0``

      

   
   :depends on zlib: ``1.2.11*``

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

    pixi global install somatic-sniper

to add into an existing workspace instead, run::

    pixi add somatic-sniper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install somatic-sniper

Alternatively, to install into a new environment, run::

    conda create -n envname somatic-sniper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/somatic-sniper:<tag>

(see `somatic-sniper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_somatic-sniper| image:: https://img.shields.io/conda/dn/bioconda/somatic-sniper.svg?style=flat
   :target: https://anaconda.org/bioconda/somatic-sniper
   :alt:   (downloads)
.. |docker_somatic-sniper| image:: https://quay.io/repository/biocontainers/somatic-sniper/status
   :target: https://quay.io/repository/biocontainers/somatic-sniper
.. _`somatic-sniper/tags`: https://quay.io/repository/biocontainers/somatic-sniper?tab=tags


.. raw:: html

    <script>
        var package = "somatic-sniper";
        var versions = ["1.0.5.0","1.0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/somatic-sniper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/somatic-sniper/README.html