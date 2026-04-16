:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-eds'
.. highlight: bash

bioconductor-eds
================

.. conda:recipe:: bioconductor-eds
   :replaces_section_title:
   :noindex:

   eds\: Low\-level reader for Alevin EDS format

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/eds.html
   :license: GPL-2
   :recipe: /`bioconductor-eds <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eds>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eds/meta.yaml>`_

   This packages provides a single function\, readEDS. This is a low\-level utility for reading in Alevin EDS format into R. This function is not designed for end\-users but instead the package is predominantly for simplifying package dependency graph for other Bioconductor packages.


.. conda:package:: bioconductor-eds

   |downloads_bioconductor-eds| |docker_bioconductor-eds|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 
   :depends on r-rcpp: 

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

    pixi global install bioconductor-eds

to add into an existing workspace instead, run::

    pixi add bioconductor-eds

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-eds

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-eds

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-eds:<tag>

(see `bioconductor-eds/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-eds| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eds.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-eds
   :alt:   (downloads)
.. |docker_bioconductor-eds| image:: https://quay.io/repository/biocontainers/bioconductor-eds/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eds
.. _`bioconductor-eds/tags`: https://quay.io/repository/biocontainers/bioconductor-eds?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-eds";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eds/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eds/README.html