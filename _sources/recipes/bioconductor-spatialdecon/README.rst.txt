:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialdecon'
.. highlight: bash

bioconductor-spatialdecon
=========================

.. conda:recipe:: bioconductor-spatialdecon
   :replaces_section_title:
   :noindex:

   Deconvolution of mixed cells from spatial and\/or bulk gene expression data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SpatialDecon.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-spatialdecon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialdecon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialdecon/meta.yaml>`_

   Using spatial or bulk gene expression data\, estimates abundance of mixed cell types within each observation. Based on \"Advances in mixed cell deconvolution enable quantification of cell types in spatial transcriptomic data\"\, Danaher \(2022\). Designed for use with the NanoString GeoMx platform\, but applicable to any gene expression data.


.. conda:package:: bioconductor-spatialdecon

   |downloads_bioconductor-spatialdecon| |docker_bioconductor-spatialdecon|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-geomxtools: ``>=3.5.0,<3.6.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-lognormreg: ``>=0.4``
   :depends r-matrix: 
   :depends r-repmis: 
   :depends r-seuratobject: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-spatialdecon

   and update with::

      mamba update bioconductor-spatialdecon

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spatialdecon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spatialdecon:<tag>

   (see `bioconductor-spatialdecon/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spatialdecon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatialdecon.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatialdecon
   :alt:   (downloads)
.. |docker_bioconductor-spatialdecon| image:: https://quay.io/repository/biocontainers/bioconductor-spatialdecon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatialdecon
.. _`bioconductor-spatialdecon/tags`: https://quay.io/repository/biocontainers/bioconductor-spatialdecon?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatialdecon";
        var versions = ["1.12.0","1.10.0","1.8.0","1.3.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatialdecon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatialdecon/README.html