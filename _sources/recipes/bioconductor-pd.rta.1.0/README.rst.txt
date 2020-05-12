:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.rta.1.0'
.. highlight: bash

bioconductor-pd.rta.1.0
=======================

.. conda:recipe:: bioconductor-pd.rta.1.0
   :replaces_section_title:

   Platform Design Info for Affymetrix RTA\-1\_0

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/pd.rta.1.0.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.rta.1.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.rta.1.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.rta.1.0/meta.yaml>`_

   Platform Design Info for Affymetrix RTA\-1\_0


.. conda:package:: bioconductor-pd.rta.1.0

   |downloads_bioconductor-pd.rta.1.0| |docker_bioconductor-pd.rta.1.0|

   :versions: 3.12.2-4, 3.12.2-3, 3.12.2-2, 3.12.2-0
   
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-oligo: >=1.52.0,<1.53.0
   :depends bioconductor-oligoclasses: >=1.50.0,<1.51.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-dbi: >=0.3.1
   :depends r-rsqlite: >=1.0.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pd.rta.1.0

   and update with::

      conda update bioconductor-pd.rta.1.0

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.rta.1.0:<tag>

   (see `bioconductor-pd.rta.1.0/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.rta.1.0| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.rta.1.0.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.rta.1.0
   :alt:   (downloads)
.. |docker_bioconductor-pd.rta.1.0| image:: https://quay.io/repository/biocontainers/bioconductor-pd.rta.1.0/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.rta.1.0
.. _`bioconductor-pd.rta.1.0/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.rta.1.0?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.rta.1.0/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.rta.1.0/README.html