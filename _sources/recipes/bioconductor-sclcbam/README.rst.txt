:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sclcbam'
.. highlight: bash

bioconductor-sclcbam
====================

.. conda:recipe:: bioconductor-sclcbam
   :replaces_section_title:

   Whole\-exome sequencing data from a murine small\-cell lung tumor\; only contains data of chromosome 4.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/SCLCBam.html
   :license: GPL-2
   :recipe: /`bioconductor-sclcbam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sclcbam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sclcbam/meta.yaml>`_

   


.. conda:package:: bioconductor-sclcbam

   |downloads_bioconductor-sclcbam| |docker_bioconductor-sclcbam|

   :versions: 1.14.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sclcbam

   and update with::

      conda update bioconductor-sclcbam

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sclcbam:<tag>

   (see `bioconductor-sclcbam/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sclcbam| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sclcbam.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sclcbam
   :alt:   (downloads)
.. |docker_bioconductor-sclcbam| image:: https://quay.io/repository/biocontainers/bioconductor-sclcbam/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sclcbam
.. _`bioconductor-sclcbam/tags`: https://quay.io/repository/biocontainers/bioconductor-sclcbam?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sclcbam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sclcbam/README.html