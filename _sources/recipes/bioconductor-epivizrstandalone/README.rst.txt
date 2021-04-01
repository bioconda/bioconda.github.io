:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epivizrstandalone'
.. highlight: bash

bioconductor-epivizrstandalone
==============================

.. conda:recipe:: bioconductor-epivizrstandalone
   :replaces_section_title:
   :noindex:

   Run Epiviz Interactive Genomic Data Visualization App within R

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/epivizrStandalone.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-epivizrstandalone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizrstandalone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizrstandalone/meta.yaml>`_
   :links: biotools: :biotools:`epivizrstandalone`, doi: :doi:`10.1038/nmeth.3252`

   This package imports the epiviz visualization JavaScript app for genomic data interactive visualization. The \'epivizrServer\' package is used to provide a web server running completely within R. This standalone version allows to browse arbitrary genomes through genome annotations provided by Bioconductor packages.


.. conda:package:: bioconductor-epivizrstandalone

   |downloads_bioconductor-epivizrstandalone| |docker_bioconductor-epivizrstandalone|

   :versions:
      
      

      ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-epivizr: ``>=2.20.0,<2.21.0``
   :depends bioconductor-epivizrserver: ``>=1.18.0,<1.19.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicfeatures: ``>=1.42.0,<1.43.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-git2r: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-epivizrstandalone

   and update with::

      conda update bioconductor-epivizrstandalone

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epivizrstandalone:<tag>

   (see `bioconductor-epivizrstandalone/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epivizrstandalone| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epivizrstandalone.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epivizrstandalone
   :alt:   (downloads)
.. |docker_bioconductor-epivizrstandalone| image:: https://quay.io/repository/biocontainers/bioconductor-epivizrstandalone/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epivizrstandalone
.. _`bioconductor-epivizrstandalone/tags`: https://quay.io/repository/biocontainers/bioconductor-epivizrstandalone?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epivizrstandalone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epivizrstandalone/README.html