:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-blacksheepr'
.. highlight: bash

bioconductor-blacksheepr
========================

.. conda:recipe:: bioconductor-blacksheepr
   :replaces_section_title:
   :noindex:

   Outlier Analysis for pairwise differential comparison

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/blacksheepr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-blacksheepr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-blacksheepr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-blacksheepr/meta.yaml>`_

   Blacksheep is a tool designed for outlier analysis in the context of pairwise comparisons in an effort to find distinguishing characteristics from two groups. This tool was designed to be applied for biological applications such as phosphoproteomics or transcriptomics\, but it can be used for any data that can be represented by a 2D table\, and has two sub populations within the table to compare.


.. conda:package:: bioconductor-blacksheepr

   |downloads_bioconductor-blacksheepr| |docker_bioconductor-blacksheepr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-complexheatmap: ``>=2.8.0,<2.9.0``
   :depends bioconductor-pasilla: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-circlize: 
   :depends r-rcolorbrewer: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-blacksheepr

   and update with::

      conda update bioconductor-blacksheepr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-blacksheepr:<tag>

   (see `bioconductor-blacksheepr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-blacksheepr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-blacksheepr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-blacksheepr
   :alt:   (downloads)
.. |docker_bioconductor-blacksheepr| image:: https://quay.io/repository/biocontainers/bioconductor-blacksheepr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-blacksheepr
.. _`bioconductor-blacksheepr/tags`: https://quay.io/repository/biocontainers/bioconductor-blacksheepr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-blacksheepr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-blacksheepr/README.html