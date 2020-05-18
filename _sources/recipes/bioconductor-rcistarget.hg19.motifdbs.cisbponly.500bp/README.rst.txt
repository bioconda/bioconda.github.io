:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp'
.. highlight: bash

bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp
=====================================================

.. conda:recipe:: bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp
   :replaces_section_title:

   RcisTarget motif databases for human \(hg19\) \- Subset of 4.6k motifs

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/RcisTarget.hg19.motifDBs.cisbpOnly.500bp.html
   :license: GPL-3
   :recipe: /`bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp/meta.yaml>`_

   RcisTarget databases\: Gene\-based motif rankings and annotation to transcription factors. This package contains a subset of 4.6k motifs \(cisbp motifs\)\, scored only within 500bp upstream and the TSS. See RcisTarget tutorial to download the full databases\, containing 20k motifs and search space up to 10kbp around the TSS.


.. conda:package:: bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp

   |downloads_bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp| |docker_bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.0-1, 1.4.0-0, 1.2.0-0
   
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-data.table: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp

   and update with::

      conda update bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp:<tag>

   (see `bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp
   :alt:   (downloads)
.. |docker_bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp| image:: https://quay.io/repository/biocontainers/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp
.. _`bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp/tags`: https://quay.io/repository/biocontainers/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp/README.html