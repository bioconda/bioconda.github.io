:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.sugar.cane'
.. highlight: bash

bioconductor-pd.sugar.cane
==========================

.. conda:recipe:: bioconductor-pd.sugar.cane
   :replaces_section_title:

   Platform Design Info for The Manufacturer\'s Name Sugar\_Cane

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/pd.sugar.cane.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.sugar.cane <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.sugar.cane>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.sugar.cane/meta.yaml>`_

   


.. conda:package:: bioconductor-pd.sugar.cane

   |downloads_bioconductor-pd.sugar.cane| |docker_bioconductor-pd.sugar.cane|

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

      conda install bioconductor-pd.sugar.cane

   and update with::

      conda update bioconductor-pd.sugar.cane

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.sugar.cane:<tag>

   (see `bioconductor-pd.sugar.cane/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.sugar.cane| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.sugar.cane.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pd.sugar.cane| image:: https://quay.io/repository/biocontainers/bioconductor-pd.sugar.cane/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.sugar.cane
.. _`bioconductor-pd.sugar.cane/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.sugar.cane?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.sugar.cane/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.sugar.cane/README.html