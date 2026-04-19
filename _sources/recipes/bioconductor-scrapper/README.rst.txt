:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scrapper'
.. highlight: bash

bioconductor-scrapper
=====================

.. conda:recipe:: bioconductor-scrapper
   :replaces_section_title:
   :noindex:

   Bindings to C\+\+ Libraries for Single\-Cell Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scrapper.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scrapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scrapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scrapper/meta.yaml>`_

   Implements R bindings to C\+\+ code for analyzing single\-cell \(expression\) data\, mostly from various libscran libraries. Each function performs an individual step in the single\-cell analysis workflow\, ranging from quality control to clustering and marker detection. It is mostly intended for other Bioconductor package developers to build more user\-friendly end\-to\-end workflows.


.. conda:package:: bioconductor-scrapper

   |downloads_bioconductor-scrapper| |docker_bioconductor-scrapper|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-assorthead: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-assorthead: ``>=1.4.0,<1.5.0a0``
   :depends on bioconductor-beachmat: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-beachmat: ``>=2.26.0,<2.27.0a0``
   :depends on bioconductor-biocneighbors: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-biocneighbors: ``>=2.4.0,<2.5.0a0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0a0``
   :depends on bioconductor-rigraphlib: ``>=1.2.0,<1.3.0``
   :depends on bioconductor-rigraphlib: ``>=1.2.0,<1.3.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
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

    pixi global install bioconductor-scrapper

to add into an existing workspace instead, run::

    pixi add bioconductor-scrapper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scrapper

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scrapper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scrapper:<tag>

(see `bioconductor-scrapper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scrapper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scrapper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scrapper
   :alt:   (downloads)
.. |docker_bioconductor-scrapper| image:: https://quay.io/repository/biocontainers/bioconductor-scrapper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scrapper
.. _`bioconductor-scrapper/tags`: https://quay.io/repository/biocontainers/bioconductor-scrapper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scrapper";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scrapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scrapper/README.html