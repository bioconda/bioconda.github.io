:orphan:  .. only available via index, not via toctree

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

   :versions: 0.7.1-1, 0.7.0-0, 0.6.3.post1-0, 0.6.1-0, 0.6.0-0, 0.5.2-0, 0.5.1-0, 0.5.0-0, 0.4.1-0, 0.4.0-0, 0.3.0-0, 0.2.1-0, 0.2.0-0
   
   :depends atropos: 1.1.16
   
   :depends bcftools: 
   
   :depends bedtools: 
   
   :depends biokit: >=0.4.3
   
   :depends bioservices: >=1.5.1
   
   :depends bleach: 
   
   :depends bowtie: 
   
   :depends bowtie2: 
   
   :depends bwa: 
   
   :depends colorlog: 
   
   :depends cutadapt: 
   
   :depends easydev: >=0.9.36
   
   :depends fastq-screen: 
   
   :depends fastqc: 0.11.5
   
   :depends freebayes: 
   
   :depends graphviz: 
   
   :depends khmer: 
   
   :depends kraken: 
   
   :depends krona: 
   
   :depends mock: 
   
   :depends multiqc: 1.0
   
   :depends numexpr: 
   
   :depends pandas: 
   
   :depends pigz: 
   
   :depends psutil: 
   
   :depends pysam: 
   
   :depends python: >=3.5,<3.6.0a0
   
   :depends pyvcf: 
   
   :depends pyyaml: 
   
   :depends qtconsole: 
   
   :depends ruamel.yaml: 
   
   :depends sambamba: 
   
   :depends samtools: 
   
   :depends shustring: 
   
   :depends snakemake: 4.0.0
   
   :depends snpeff: 
   
   :depends spades: 
   
   :depends subread: 
   
   :depends xlrd: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sequana

   and update with::

      conda update sequana

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sequana:<tag>

   (see `sequana/tags`_ for valid values for ``<tag>``)


.. |downloads_sequana| image:: https://img.shields.io/conda/dn/bioconda/sequana.svg?style=flat
   :alt:   (downloads)
.. |docker_sequana| image:: https://quay.io/repository/biocontainers/sequana/status
   :target: https://quay.io/repository/biocontainers/sequana
.. _`sequana/tags`: https://quay.io/repository/biocontainers/sequana?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequana/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequana/README.html