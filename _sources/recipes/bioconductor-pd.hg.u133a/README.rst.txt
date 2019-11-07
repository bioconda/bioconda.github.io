:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.hg.u133a'
.. highlight: bash

bioconductor-pd.hg.u133a
========================

.. conda:recipe:: bioconductor-pd.hg.u133a
   :replaces_section_title:

   Platform Design Info for The Manufacturer\'s Name HG\-U133A

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/pd.hg.u133a.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.hg.u133a <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.hg.u133a>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.hg.u133a/meta.yaml>`_

   Platform Design Info for The Manufacturer\'s Name HG\-U133A


.. conda:package:: bioconductor-pd.hg.u133a

   |downloads_bioconductor-pd.hg.u133a| |docker_bioconductor-pd.hg.u133a|

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

      conda install bioconductor-pd.hg.u133a

   and update with::

      conda update bioconductor-pd.hg.u133a

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.hg.u133a:<tag>

   (see `bioconductor-pd.hg.u133a/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.hg.u133a| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.hg.u133a.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.hg.u133a
   :alt:   (downloads)
.. |docker_bioconductor-pd.hg.u133a| image:: https://quay.io/repository/biocontainers/bioconductor-pd.hg.u133a/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.hg.u133a
.. _`bioconductor-pd.hg.u133a/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.hg.u133a?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.hg.u133a/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.hg.u133a/README.html