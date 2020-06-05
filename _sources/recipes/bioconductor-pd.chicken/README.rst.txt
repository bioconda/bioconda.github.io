:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.chicken'
.. highlight: bash

bioconductor-pd.chicken
=======================

.. conda:recipe:: bioconductor-pd.chicken
   :replaces_section_title:
   :noindex:

   Platform Design Info for The Manufacturer\'s Name Chicken

   :homepage: https://bioconductor.org/packages/3.11/data/annotation/html/pd.chicken.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.chicken <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.chicken>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.chicken/meta.yaml>`_

   Platform Design Info for The Manufacturer\'s Name Chicken


.. conda:package:: bioconductor-pd.chicken

   |downloads_bioconductor-pd.chicken| |docker_bioconductor-pd.chicken|

   :versions:
      
      

      ``3.12.0-4``,  ``3.12.0-3``,  ``3.12.0-2``,  ``3.12.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.56.0,<2.57.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-oligo: ``>=1.52.0,<1.53.0``
   :depends bioconductor-oligoclasses: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends curl: ``>=7.69.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dbi: ``>=0.3.1``
   :depends r-rsqlite: ``>=1.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pd.chicken

   and update with::

      conda update bioconductor-pd.chicken

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.chicken:<tag>

   (see `bioconductor-pd.chicken/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.chicken| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.chicken.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.chicken
   :alt:   (downloads)
.. |docker_bioconductor-pd.chicken| image:: https://quay.io/repository/biocontainers/bioconductor-pd.chicken/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.chicken
.. _`bioconductor-pd.chicken/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.chicken?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.chicken/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.chicken/README.html