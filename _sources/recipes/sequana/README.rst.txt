.. title:: Package Recipe 'sequana'
.. highlight: bash


sequana
=======

.. conda:recipe:: sequana
   :replaces_section_title:

   A set of standalone application and snakemake pipelines dedicated to NGS \(new generation sequencing\) analysis

   :homepage: http://sequana.readthedocs.io/
   :license: BSD / BSD 3-clause
   :recipe: /`sequana <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequana>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequana/meta.yaml>`_

   


.. conda:package:: sequana

   |downloads_sequana| |docker_sequana|

   :versions: 0.7.1, 0.7.0, 0.6.3.post1, 0.6.1, 0.6.0, 0.5.2, 0.5.1, 0.5.0, 0.4.1, 0.4.0, 0.3.0, 0.2.1, 0.2.0

   :depends: :conda:package:`atropos` 1.1.16 :conda:package:`bcftools`  :conda:package:`bedtools`  :conda:package:`biokit` >=0.4.3 :conda:package:`bioservices` >=1.5.1 :conda:package:`bleach`  :conda:package:`bowtie`  :conda:package:`bowtie2`  :conda:package:`bwa`  :conda:package:`colorlog`  :conda:package:`cutadapt`  :conda:package:`easydev` >=0.9.36 :conda:package:`fastq-screen`  :conda:package:`fastqc` 0.11.5 :conda:package:`freebayes`  :conda:package:`graphviz`  :conda:package:`khmer`  :conda:package:`krona`  :conda:package:`mock`  :conda:package:`multiqc` 1.0 :conda:package:`numexpr`  :conda:package:`pandas`  :conda:package:`pigz`  :conda:package:`psutil`  :conda:package:`pysam`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`pyvcf`  :conda:package:`pyyaml`  :conda:package:`qtconsole`  :conda:package:`ruamel.yaml`  :conda:package:`sambamba`  :conda:package:`samtools`  :conda:package:`shustring`  :conda:package:`snakemake` 4.0.0 :conda:package:`snpeff`  :conda:package:`spades`  :conda:package:`subread`  :conda:package:`xlrd`  

   :required~by: |required_by_sequana|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sequana

   and update with::

      conda update sequana

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sequana


.. |required_by_sequana| conda:required_by:: sequana
.. |downloads_sequana| image:: https://img.shields.io/conda/dn/bioconda/sequana.svg?style=flat
   :alt:   (downloads)
.. |docker_sequana| image:: https://quay.io/repository/biocontainers/sequana/status
   :target: https://quay.io/repository/biocontainers/sequana







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequana/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequana/README.html

