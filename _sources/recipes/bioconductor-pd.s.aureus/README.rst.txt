:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.s.aureus'
.. highlight: bash

bioconductor-pd.s.aureus
========================

.. conda:recipe:: bioconductor-pd.s.aureus
   :replaces_section_title:

   Platform Design Info for The Manufacturer\'s Name S\_aureus

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/pd.s.aureus.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.s.aureus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.s.aureus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.s.aureus/meta.yaml>`_

   


.. conda:package:: bioconductor-pd.s.aureus

   |downloads_bioconductor-pd.s.aureus| |docker_bioconductor-pd.s.aureus|

   :versions: 3.12.0-0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-oligo: >=1.46.0,<1.47.0
   
   :depends bioconductor-oligoclasses: >=1.44.0,<1.45.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-dbi: >=0.3.1
   
   :depends r-rsqlite: >=1.0.0
   
   :depends wget: 
   
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