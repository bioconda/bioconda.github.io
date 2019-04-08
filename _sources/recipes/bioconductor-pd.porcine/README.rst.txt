:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.porcine'
.. highlight: bash

bioconductor-pd.porcine
=======================

.. conda:recipe:: bioconductor-pd.porcine
   :replaces_section_title:

   Platform Design Info for The Manufacturer\'s Name Porcine

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/pd.porcine.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.porcine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.porcine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.porcine/meta.yaml>`_

   


.. conda:package:: bioconductor-pd.porcine

   |downloads_bioconductor-pd.porcine| |docker_bioconductor-pd.porcine|

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

      conda install bioconductor-pd.porcine

   and update with::

      conda update bioconductor-pd.porcine

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.porcine:<tag>

   (see `bioconductor-pd.porcine/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.porcine| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.porcine.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pd.porcine| image:: https://quay.io/repository/biocontainers/bioconductor-pd.porcine/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.porcine
.. _`bioconductor-pd.porcine/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.porcine?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.porcine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.porcine/README.html