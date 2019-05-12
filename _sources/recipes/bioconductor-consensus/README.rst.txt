:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-consensus'
.. highlight: bash

bioconductor-consensus
======================

.. conda:recipe:: bioconductor-consensus
   :replaces_section_title:

   An implementation of the American Society for Testing and Materials \(ASTM\) Standard E691 for interlaboratory testing procedures\, designed for cross\-platform genomic measurements. Given three \(3\) or more genomic platforms or laboratory protocols\, this package provides interlaboratory testing procedures giving per\-locus comparisons for sensitivity and precision between platforms.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/consensus.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-consensus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consensus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consensus/meta.yaml>`_

   


.. conda:package:: bioconductor-consensus

   |downloads_bioconductor-consensus| |docker_bioconductor-consensus|

   :versions: 1.2.0-0, 1.0.2-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-gplots: 
   :depends r-matrixstats: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-consensus

   and update with::

      conda update bioconductor-consensus

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-consensus:<tag>

   (see `bioconductor-consensus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-consensus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-consensus.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-consensus| image:: https://quay.io/repository/biocontainers/bioconductor-consensus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-consensus
.. _`bioconductor-consensus/tags`: https://quay.io/repository/biocontainers/bioconductor-consensus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-consensus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-consensus/README.html