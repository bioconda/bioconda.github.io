:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggdata'
.. highlight: bash

bioconductor-ggdata
===================

.. conda:recipe:: bioconductor-ggdata
   :replaces_section_title:
   :noindex:

   all 90 hapmap CEU samples\, 47K expression\, 4mm SNP

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/GGdata.html
   :license: LGPL
   :recipe: /`bioconductor-ggdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggdata/meta.yaml>`_

   data exemplars dealing with hapmap SNP reports\, GWAS\, etc.


.. conda:package:: bioconductor-ggdata

   |downloads_bioconductor-ggdata| |docker_bioconductor-ggdata|

   :versions:
      
      

      ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-ggbase: ``>=3.52.0,<3.53.0``
   :depends bioconductor-illuminahumanv1.db: ``>=1.26.0,<1.27.0``
   :depends bioconductor-snpstats: ``>=1.40.0,<1.41.0``
   :depends curl: ``>=7.76.0,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ggdata

   and update with::

      conda update bioconductor-ggdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggdata:<tag>

   (see `bioconductor-ggdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggdata
   :alt:   (downloads)
.. |docker_bioconductor-ggdata| image:: https://quay.io/repository/biocontainers/bioconductor-ggdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggdata
.. _`bioconductor-ggdata/tags`: https://quay.io/repository/biocontainers/bioconductor-ggdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggdata/README.html