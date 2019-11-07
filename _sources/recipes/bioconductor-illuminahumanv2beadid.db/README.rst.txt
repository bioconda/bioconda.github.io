:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminahumanv2beadid.db'
.. highlight: bash

bioconductor-illuminahumanv2beadid.db
=====================================

.. conda:recipe:: bioconductor-illuminahumanv2beadid.db
   :replaces_section_title:

   Illumina HumanWGv2 annotation data \(chip illuminaHumanv2BeadID\)

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/illuminaHumanv2BeadID.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-illuminahumanv2beadid.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanv2beadid.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanv2beadid.db/meta.yaml>`_

   Illumina HumanWGv2 annotation data \(chip illuminaHumanv2BeadID\) assembled using data from public repositories to be used with data summarized from bead\-level data with numeric ArrayAddressIDs as keys. Illumina probes with a No match or Bad quality score were removed prior to annotation. See http\:\/\/www.compbio.group.cam.ac.uk\/Resources\/Annotation\/index.html and Barbosa\-Morais et al \(2010\) A re\-annotation pipeline for Illumina BeadArrays\: improving the interpretation of gene expression data. Nucleic Acids Research.


.. conda:package:: bioconductor-illuminahumanv2beadid.db

   |downloads_bioconductor-illuminahumanv2beadid.db| |docker_bioconductor-illuminahumanv2beadid.db|

   :versions: 1.8.0-3, 1.8.0-2, 1.8.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-org.hs.eg.db: >=3.10.0,<3.11.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-illuminahumanv2beadid.db

   and update with::

      conda update bioconductor-illuminahumanv2beadid.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illuminahumanv2beadid.db:<tag>

   (see `bioconductor-illuminahumanv2beadid.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminahumanv2beadid.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminahumanv2beadid.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminahumanv2beadid.db
   :alt:   (downloads)
.. |docker_bioconductor-illuminahumanv2beadid.db| image:: https://quay.io/repository/biocontainers/bioconductor-illuminahumanv2beadid.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminahumanv2beadid.db
.. _`bioconductor-illuminahumanv2beadid.db/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminahumanv2beadid.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminahumanv2beadid.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminahumanv2beadid.db/README.html