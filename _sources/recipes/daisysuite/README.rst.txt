.. title:: Package Recipe 'daisysuite'
.. highlight: bash


daisysuite
==========

.. conda:recipe:: daisysuite
   :replaces_section_title:

   DaisySuite \- mapping\-based pipeline for horizontal gene transfer \(HGT\) detection using sequencing data

   :homepage: https://gitlab.com/eseiler/DaisySuite
   :license: GNU GPLv3
   :recipe: /`daisysuite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/daisysuite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/daisysuite/meta.yaml>`_

   


.. conda:package:: daisysuite

   |downloads_daisysuite| |docker_daisysuite|

   :versions: 1.2.1, 1.2.0, 1.1.0, 1.0.0

   :depends: :conda:package:`bedtools` >=0.2.22 :conda:package:`biopython`  :conda:package:`bwa` >=0.7.8 :conda:package:`clever-toolkit` >=2.0rc3 :conda:package:`gustaf` >=1.0.8 :conda:package:`mason` >=2.0.7 :conda:package:`pandas` >=0.18.1 :conda:package:`pysam` >=0.9.1.4 :conda:package:`sak` >=0.4.6 :conda:package:`samtools` >=0.1.19 :conda:package:`scipy`  :conda:package:`snakemake` >=3.9.0 :conda:package:`stellar` >=1.4.9 :conda:package:`yara` >=0.9.6 

   :required~by: |required_by_daisysuite|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install daisysuite

   and update with::

      conda update daisysuite

   or use the docker container::

      docker pull quay.io/repository/biocontainers/daisysuite


.. |required_by_daisysuite| conda:required_by:: daisysuite
.. |downloads_daisysuite| image:: https://img.shields.io/conda/dn/bioconda/daisysuite.svg?style=flat
   :alt:   (downloads)
.. |docker_daisysuite| image:: https://quay.io/repository/biocontainers/daisysuite/status
   :target: https://quay.io/repository/biocontainers/daisysuite







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/daisysuite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/daisysuite/README.html

