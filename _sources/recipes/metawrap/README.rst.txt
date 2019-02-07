.. title:: Package Recipe 'metawrap'
.. highlight: bash


metawrap
========

.. conda:recipe:: metawrap
   :replaces_section_title:

   MetaWRAP is a pipeline for genome\-resolved metagenomic data analysis

   :homepage: https://github.com/bxlab/metaWRAP
   :license: MIT
   :recipe: /`metawrap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metawrap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metawrap/meta.yaml>`_

   


.. conda:package:: metawrap

   |downloads_metawrap| |docker_metawrap|

   :versions: 1.1, 1.0

   :depends: :conda:package:`bcftools` 1.6.* :conda:package:`biopython` 1.69.* :conda:package:`blast` 2.7.* :conda:package:`bmfilter` 3.101.* :conda:package:`bmtagger` 3.101.* :conda:package:`bmtool` 3.101.* :conda:package:`boost` 1.64.0.* :conda:package:`bowtie2` 2.3.* :conda:package:`brewer2mpl` 1.4.1.* :conda:package:`bwa` 0.7.15.* :conda:package:`cairo` 1.14.8.* :conda:package:`checkm-genome` 1.* :conda:package:`concoct` 0.4.0.* :conda:package:`fastqc` 0.11.5.* :conda:package:`gnutls` 3.5.15.* :conda:package:`icu` 58.2.* :conda:package:`kraken`  :conda:package:`krona` 2.7.* :conda:package:`libgfortran-ng` 7.2.0.* :conda:package:`libopenblas` 0.2.20.* :conda:package:`matplotlib` 1.5.1.* :conda:package:`maxbin2` 2.2.* :conda:package:`megahit` 1.1.2.* :conda:package:`metabat2` 2.12.1.* :conda:package:`numpy` 1.10.4.* :conda:package:`openjdk`  :conda:package:`pandas` 0.23.4.* :conda:package:`perl` 5.26.2.* :conda:package:`perl-bioperl` 1.6.924.* :conda:package:`pplacer` 1.1.alpha17.* :conda:package:`prokka` 1.* :conda:package:`qt` 4.8.5.* :conda:package:`quast` 4.* :conda:package:`r-ggplot2` 2.2.1.* :conda:package:`r-recommended` 3.3.2.* :conda:package:`readline` 6.2.* :conda:package:`salmon` 0.9.* :conda:package:`samtools` 1.6.* :conda:package:`scikit-learn` 0.16.1.* :conda:package:`scipy` 0.17.1.* :conda:package:`seaborn` 0.8.1.* :conda:package:`spades` 3.* :conda:package:`srprism` 2.4.24.* :conda:package:`subprocess32` 3.2.7.* :conda:package:`taxator-tk` 1.3.3e.* :conda:package:`tk` 8.5.19.* :conda:package:`trim-galore` 0.4.* :conda:package:`xorg-libxrender` 0.9.10.* 

   :required~by: |required_by_metawrap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metawrap

   and update with::

      conda update metawrap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/metawrap


.. |required_by_metawrap| conda:required_by:: metawrap
.. |downloads_metawrap| image:: https://img.shields.io/conda/dn/bioconda/metawrap.svg?style=flat
   :alt:   (downloads)
.. |docker_metawrap| image:: https://quay.io/repository/biocontainers/metawrap/status
   :target: https://quay.io/repository/biocontainers/metawrap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metawrap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metawrap/README.html

