:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dupradar'
.. highlight: bash

bioconductor-dupradar
=====================

.. conda:recipe:: bioconductor-dupradar
   :replaces_section_title:

   Duplication rate quality control for RNA\-Seq datasets.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/dupRadar.html
   :license: GPL-3
   :recipe: /`bioconductor-dupradar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dupradar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dupradar/meta.yaml>`_
   :links: biotools: :biotools:`dupradar`

   


.. conda:package:: bioconductor-dupradar

   |downloads_bioconductor-dupradar| |docker_bioconductor-dupradar|

   :versions: 1.12.1-1, 1.12.1-0, 1.10.0-0, 1.8.0-1, 1.8.0-0, 1.6.0-0, 1.2.2-0
   
   :depends bioconductor-rsubread: >=1.32.0,<1.33.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dupradar

   and update with::

      conda update bioconductor-dupradar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dupradar:<tag>

   (see `bioconductor-dupradar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dupradar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dupradar.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dupradar| image:: https://quay.io/repository/biocontainers/bioconductor-dupradar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dupradar
.. _`bioconductor-dupradar/tags`: https://quay.io/repository/biocontainers/bioconductor-dupradar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dupradar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dupradar/README.html