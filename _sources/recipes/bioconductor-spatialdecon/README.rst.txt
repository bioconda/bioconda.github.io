:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialdecon'
.. highlight: bash

bioconductor-spatialdecon
=========================

.. conda:recipe:: bioconductor-spatialdecon
   :replaces_section_title:
   :noindex:

   Deconvolution of mixed cells from spatial and\/or bulk gene expression data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/SpatialDecon.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-spatialdecon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialdecon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialdecon/meta.yaml>`_

   Using spatial or bulk gene expression data\, estimates abundance of mixed cell types within each observation. Based on \"Advances in mixed cell deconvolution enable quantification of cell types in spatially\-resolved gene expression data\"\, Danaher \(2020\). Designed for use with the NanoString GeoMx platform\, but applicable to any gene expression data.


.. conda:package:: bioconductor-spatialdecon

   |downloads_bioconductor-spatialdecon| |docker_bioconductor-spatialdecon|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-lognormreg: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spatialdecon

   and update with::

      conda update bioconductor-spatialdecon

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spatialdecon:<tag>

   (see `bioconductor-spatialdecon/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spatialdecon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatialdecon.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatialdecon
   :alt:   (downloads)
.. |docker_bioconductor-spatialdecon| image:: https://quay.io/repository/biocontainers/bioconductor-spatialdecon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatialdecon
.. _`bioconductor-spatialdecon/tags`: https://quay.io/repository/biocontainers/bioconductor-spatialdecon?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatialdecon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatialdecon/README.html