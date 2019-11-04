:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.maize'
.. highlight: bash

bioconductor-pd.maize
=====================

.. conda:recipe:: bioconductor-pd.maize
   :replaces_section_title:

   Platform Design Info for The Manufacturer\'s Name Maize

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/pd.maize.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.maize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.maize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.maize/meta.yaml>`_

   


.. conda:package:: bioconductor-pd.maize

   |downloads_bioconductor-pd.maize| |docker_bioconductor-pd.maize|

   :versions: 3.12.0-3, 3.12.0-2, 3.12.0-0
   
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-oligo: >=1.50.0,<1.51.0
   :depends bioconductor-oligoclasses: >=1.48.0,<1.49.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dbi: >=0.3.1
   :depends r-rsqlite: >=1.0.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pd.maize

   and update with::

      conda update bioconductor-pd.maize

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.maize:<tag>

   (see `bioconductor-pd.maize/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.maize| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.maize.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.maize
   :alt:   (downloads)
.. |docker_bioconductor-pd.maize| image:: https://quay.io/repository/biocontainers/bioconductor-pd.maize/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.maize
.. _`bioconductor-pd.maize/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.maize?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.maize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.maize/README.html