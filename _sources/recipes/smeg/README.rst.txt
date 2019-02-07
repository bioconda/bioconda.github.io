.. title:: Package Recipe 'smeg'
.. highlight: bash


smeg
====

.. conda:recipe:: smeg
   :replaces_section_title:

   Strain\-level MEtagenomic Growth estimation \(SMEG\) measures growth rates of microbial strains from complex metagenomic dataset at low coverage \(1X\)

   :homepage: https://github.com/ohlab/SMEG
   :license: MIT
   :recipe: /`smeg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smeg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smeg/meta.yaml>`_

   


.. conda:package:: smeg

   |downloads_smeg| |docker_smeg|

   :versions: 1.0.1

   :depends: :conda:package:`bamtools`  :conda:package:`bowtie2`  :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`mauve`  :conda:package:`parallel`  :conda:package:`prokka`  :conda:package:`r-ape`  :conda:package:`r-data.table`  :conda:package:`r-dplyr`  :conda:package:`r-dynamictreecut`  :conda:package:`r-getopt`  :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-gsubfn`  :conda:package:`r-wgcna`  :conda:package:`readline` >=6.2 :conda:package:`roary` 3.12.0.* :conda:package:`samtools` >=1.5 :conda:package:`subread`  

   :required~by: |required_by_smeg|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smeg

   and update with::

      conda update smeg

   or use the docker container::

      docker pull quay.io/repository/biocontainers/smeg


.. |required_by_smeg| conda:required_by:: smeg
.. |downloads_smeg| image:: https://img.shields.io/conda/dn/bioconda/smeg.svg?style=flat
   :alt:   (downloads)
.. |docker_smeg| image:: https://quay.io/repository/biocontainers/smeg/status
   :target: https://quay.io/repository/biocontainers/smeg







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smeg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smeg/README.html

