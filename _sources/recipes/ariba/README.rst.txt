.. title:: Package Recipe 'ariba'
.. highlight: bash


ariba
=====

.. conda:recipe:: ariba
   :replaces_section_title:

   ARIBA\: Antibiotic Resistance Identification By Assembly

   :homepage: https://github.com/sanger-pathogens/ariba
   :license: GPL / GNU General Public License v3 (GPL-3.0)
   :recipe: /`ariba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ariba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ariba/meta.yaml>`_

   


.. conda:package:: ariba

   |downloads_ariba| |docker_ariba|

   :versions: 2.13.3, 2.13.2, 2.12.1, 2.12.0, 2.11.1, 2.11.0, 2.10.1, 2.10.0, 2.5.1, 0.6.0

   :depends: :conda:package:`bcftools` >=1.2 :conda:package:`beautifulsoup4` >=4.1.0 :conda:package:`biopython`  :conda:package:`bowtie2` >=2.3.1 :conda:package:`cd-hit` >=4.6.5 :conda:package:`dendropy` >=4.2.0 :conda:package:`matplotlib`  :conda:package:`mummer` >=3.23 :conda:package:`pyfastaq` >=3.12.0 :conda:package:`pymummer` >=0.10.2 :conda:package:`pysam` >=0.9.1 :conda:package:`python` >=3.6,<3.7.0a0 :conda:package:`samtools` >=1.2 :conda:package:`spades` >=3.5.0 :conda:package:`wget`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ariba|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ariba

   and update with::

      conda update ariba

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ariba


.. |required_by_ariba| conda:required_by:: ariba
.. |downloads_ariba| image:: https://img.shields.io/conda/dn/bioconda/ariba.svg?style=flat
   :alt:   (downloads)
.. |docker_ariba| image:: https://quay.io/repository/biocontainers/ariba/status
   :target: https://quay.io/repository/biocontainers/ariba







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ariba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ariba/README.html

