.. title:: Package Recipe 'crispresso'
.. highlight: bash


crispresso
==========

.. conda:recipe:: crispresso
   :replaces_section_title:

   A software pipeline for the analysis of targeted CRISPR\-Cas9 sequencing data

   :homepage: https://github.com/lucapinello/CRISPResso
   :license: GPLv3
   :recipe: /`crispresso <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispresso>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispresso/meta.yaml>`_

   


.. conda:package:: crispresso

   |downloads_crispresso| |docker_crispresso|

   :versions: 1.0.13, 1.0.8, 1.0.7, 1.0.6, 1.0

   :depends: :conda:package:`argparse`  :conda:package:`biopython` >=1.6.5 :conda:package:`bowtie2`  :conda:package:`emboss`  :conda:package:`flash`  :conda:package:`libgcc-ng` >=4.9 :conda:package:`matplotlib` >=1.3.1 :conda:package:`mock`  :conda:package:`nose`  :conda:package:`numpy` >=1.10.4 :conda:package:`openjdk` >=8 :conda:package:`pandas` >=0.16 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`samtools`  :conda:package:`seaborn`  :conda:package:`trimmomatic`  

   :required~by: |required_by_crispresso|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crispresso

   and update with::

      conda update crispresso

   or use the docker container::

      docker pull quay.io/repository/biocontainers/crispresso


.. |required_by_crispresso| conda:required_by:: crispresso
.. |downloads_crispresso| image:: https://img.shields.io/conda/dn/bioconda/crispresso.svg?style=flat
   :alt:   (downloads)
.. |docker_crispresso| image:: https://quay.io/repository/biocontainers/crispresso/status
   :target: https://quay.io/repository/biocontainers/crispresso







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crispresso/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crispresso/README.html

