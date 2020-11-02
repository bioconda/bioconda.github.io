:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsvadata'
.. highlight: bash

bioconductor-gsvadata
=====================

.. conda:recipe:: bioconductor-gsvadata
   :replaces_section_title:
   :noindex:

   Data employed in the vignette of the GSVA package

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/GSVAdata.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gsvadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsvadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsvadata/meta.yaml>`_

   This package stores the data employed in the vignette of the GSVA package. These data belong to the following publications\: Armstrong et al. Nat Genet 30\:41\-47\, 2002\; Cahoy et al. J Neurosci 28\:264\-278\, 2008\; Carrel and Willard\, Nature\, 434\:400\-404\, 2005\; Huang et al. PNAS\, 104\:9758\-9763\, 2007\; Pickrell et al. Nature\, 464\:768\-722\, 2010\; Skaletsky et al. Nature\, 423\:825\-837\; Verhaak et al. Cancer Cell 17\:98\-110\, 2010


.. conda:package:: bioconductor-gsvadata

   |downloads_bioconductor-gsvadata| |docker_bioconductor-gsvadata|

   :versions:
      
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-gseabase: ``>=1.52.0,<1.53.0``
   :depends bioconductor-hgu95a.db: ``>=3.2.0,<3.3.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gsvadata

   and update with::

      conda update bioconductor-gsvadata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gsvadata:<tag>

   (see `bioconductor-gsvadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gsvadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsvadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gsvadata
   :alt:   (downloads)
.. |docker_bioconductor-gsvadata| image:: https://quay.io/repository/biocontainers/bioconductor-gsvadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsvadata
.. _`bioconductor-gsvadata/tags`: https://quay.io/repository/biocontainers/bioconductor-gsvadata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsvadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsvadata/README.html