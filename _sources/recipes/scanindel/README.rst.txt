.. title:: Package Recipe 'scanindel'
.. highlight: bash


scanindel
=========

.. conda:recipe:: scanindel
   :replaces_section_title:

   ScanIndel is a python program to detect indels \(insertions and deletions\) from NGS data by re\-align and de novo assemble soft clipped reads.

   :homepage: https://github.com/cauyrd/ScanIndel
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`scanindel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanindel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanindel/meta.yaml>`_

   


.. conda:package:: scanindel

   |downloads_scanindel| |docker_scanindel|

   :versions: 1.3

   :depends: :conda:package:`bedtools` ==2.17.0 :conda:package:`biopython` ==1.64 :conda:package:`blat`  :conda:package:`bwa` ==0.7.12 :conda:package:`freebayes` ==0.9.21.7 :conda:package:`numpy`  :conda:package:`pysam` ==0.7.7 :conda:package:`python` 2.7* :conda:package:`pyvcf` ==0.6.7 :conda:package:`samtools` <=1.0 :conda:package:`scipy`  

   :required~by: |required_by_scanindel|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scanindel

   and update with::

      conda update scanindel

   or use the docker container::

      docker pull quay.io/repository/biocontainers/scanindel


.. |required_by_scanindel| conda:required_by:: scanindel
.. |downloads_scanindel| image:: https://img.shields.io/conda/dn/bioconda/scanindel.svg?style=flat
   :alt:   (downloads)
.. |docker_scanindel| image:: https://quay.io/repository/biocontainers/scanindel/status
   :target: https://quay.io/repository/biocontainers/scanindel







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scanindel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scanindel/README.html

