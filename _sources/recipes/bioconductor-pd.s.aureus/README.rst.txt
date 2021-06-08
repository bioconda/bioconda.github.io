:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.s.aureus'
.. highlight: bash

bioconductor-pd.s.aureus
========================

.. conda:recipe:: bioconductor-pd.s.aureus
   :replaces_section_title:
   :noindex:

   Platform Design Info for The Manufacturer\'s Name S\_aureus

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/pd.s.aureus.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.s.aureus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.s.aureus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.s.aureus/meta.yaml>`_

   Platform Design Info for The Manufacturer\'s Name S\_aureus


.. conda:package:: bioconductor-pd.s.aureus

   |downloads_bioconductor-pd.s.aureus| |docker_bioconductor-pd.s.aureus|

   :versions:
      
      

      ``3.12.0-8``,  ``3.12.0-7``,  ``3.12.0-6``,  ``3.12.0-5``,  ``3.12.0-4``,  ``3.12.0-3``,  ``3.12.0-1``,  ``3.12.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-oligo: ``>=1.56.0,<1.57.0``
   :depends bioconductor-oligoclasses: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbi: ``>=0.3.1``
   :depends r-rsqlite: ``>=1.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pd.s.aureus

   and update with::

      conda update bioconductor-pd.s.aureus

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.s.aureus:<tag>

   (see `bioconductor-pd.s.aureus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.s.aureus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.s.aureus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.s.aureus
   :alt:   (downloads)
.. |docker_bioconductor-pd.s.aureus| image:: https://quay.io/repository/biocontainers/bioconductor-pd.s.aureus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.s.aureus
.. _`bioconductor-pd.s.aureus/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.s.aureus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.s.aureus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.s.aureus/README.html