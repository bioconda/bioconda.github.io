:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illumina450probevariants.db'
.. highlight: bash

bioconductor-illumina450probevariants.db
========================================

.. conda:recipe:: bioconductor-illumina450probevariants.db
   :replaces_section_title:

   Annotation Package combining variant data from 1000 Genomes Project for Illumina HumanMethylation450 Bead Chip probes

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/Illumina450ProbeVariants.db.html
   :license: GPL-3
   :recipe: /`bioconductor-illumina450probevariants.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illumina450probevariants.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illumina450probevariants.db/meta.yaml>`_

   Includes details on variants for each probe on the 450k bead chip for each of the four populations \(Asian\, American\, African and European\)


.. conda:package:: bioconductor-illumina450probevariants.db

   |downloads_bioconductor-illumina450probevariants.db| |docker_bioconductor-illumina450probevariants.db|

   :versions: 1.24.0-0, 1.22.0-0, 1.20.0-1, 1.20.0-0, 1.18.0-0
   
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-illumina450probevariants.db

   and update with::

      conda update bioconductor-illumina450probevariants.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illumina450probevariants.db:<tag>

   (see `bioconductor-illumina450probevariants.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illumina450probevariants.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illumina450probevariants.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illumina450probevariants.db
   :alt:   (downloads)
.. |docker_bioconductor-illumina450probevariants.db| image:: https://quay.io/repository/biocontainers/bioconductor-illumina450probevariants.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illumina450probevariants.db
.. _`bioconductor-illumina450probevariants.db/tags`: https://quay.io/repository/biocontainers/bioconductor-illumina450probevariants.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illumina450probevariants.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illumina450probevariants.db/README.html