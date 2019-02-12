:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crcl18'
.. highlight: bash

bioconductor-crcl18
===================

.. conda:recipe:: bioconductor-crcl18
   :replaces_section_title:

   colorectal cancer mRNA and miRNA on 18 cell lines

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/CRCL18.html
   :license: GPL-2
   :recipe: /`bioconductor-crcl18 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crcl18>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crcl18/meta.yaml>`_

   


.. conda:package:: bioconductor-crcl18

   |downloads_bioconductor-crcl18| |docker_bioconductor-crcl18|

   :versions: 1.2.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-crcl18

   and update with::

      conda update bioconductor-crcl18

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-crcl18:<tag>

   (see `bioconductor-crcl18/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crcl18| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crcl18.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-crcl18| image:: https://quay.io/repository/biocontainers/bioconductor-crcl18/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crcl18
.. _`bioconductor-crcl18/tags`: https://quay.io/repository/biocontainers/bioconductor-crcl18?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crcl18/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crcl18/README.html