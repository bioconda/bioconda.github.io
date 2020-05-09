:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirbaseconverter'
.. highlight: bash

bioconductor-mirbaseconverter
=============================

.. conda:recipe:: bioconductor-mirbaseconverter
   :replaces_section_title:

   A comprehensive and high\-efficiency tool for converting and retrieving the information of miRNAs in different miRBase versions

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/miRBaseConverter.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mirbaseconverter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirbaseconverter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirbaseconverter/meta.yaml>`_

   A comprehensive tool for converting and retrieving the miRNA Name\, Accession\, Sequence\, Version\, History and Family information in different miRBase versions. It can process a huge number of miRNAs in a short time without other depends.


.. conda:package:: bioconductor-mirbaseconverter

   |downloads_bioconductor-mirbaseconverter| |docker_bioconductor-mirbaseconverter|

   :versions: 1.12.0-0, 1.10.0-0, 1.8.0-1, 1.8.0-0, 1.6.0-0
   
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirbaseconverter

   and update with::

      conda update bioconductor-mirbaseconverter

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirbaseconverter:<tag>

   (see `bioconductor-mirbaseconverter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirbaseconverter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirbaseconverter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirbaseconverter
   :alt:   (downloads)
.. |docker_bioconductor-mirbaseconverter| image:: https://quay.io/repository/biocontainers/bioconductor-mirbaseconverter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirbaseconverter
.. _`bioconductor-mirbaseconverter/tags`: https://quay.io/repository/biocontainers/bioconductor-mirbaseconverter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirbaseconverter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirbaseconverter/README.html