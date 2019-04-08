:orphan:  .. only available via index, not via toctree

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

   :versions: 1.1-0, 1.0-0
   
   :depends bcftools: 1.6.*
   :depends biopython: 1.69.*
   :depends blast: 2.7.*
   :depends bmfilter: 3.101.*
   :depends bmtagger: 3.101.*
   :depends bmtool: 3.101.*
   :depends boost: 1.64.0.*
   :depends bowtie2: 2.3.*
   :depends brewer2mpl: 1.4.1.*
   :depends bwa: 0.7.15.*
   :depends cairo: 1.14.8.*
   :depends checkm-genome: 1.*
   :depends concoct: 0.4.0.*
   :depends fastqc: 0.11.5.*
   :depends gnutls: 3.5.15.*
   :depends icu: 58.2.*
   :depends kraken: 
   :depends krona: 2.7.*
   :depends libgfortran-ng: 7.2.0.*
   :depends libopenblas: 0.2.20.*
   :depends matplotlib: 1.5.1.*
   :depends maxbin2: 2.2.*
   :depends megahit: 1.1.2.*
   :depends metabat2: 2.12.1.*
   :depends numpy: 1.10.4.*
   :depends openjdk: 
   :depends pandas: 0.23.4.*
   :depends perl: 5.26.2.*
   :depends perl-bioperl: 1.6.924.*
   :depends pplacer: 1.1.alpha17.*
   :depends prokka: 1.*
   :depends qt: 4.8.5.*
   :depends quast: 4.*
   :depends r-ggplot2: 2.2.1.*
   :depends r-recommended: 3.3.2.*
   :depends readline: 6.2.*
   :depends salmon: 0.9.*
   :depends samtools: 1.6.*
   :depends scikit-learn: 0.16.1.*
   :depends scipy: 0.17.1.*
   :depends seaborn: 0.8.1.*
   :depends spades: 3.*
   :depends srprism: 2.4.24.*
   :depends subprocess32: 3.2.7.*
   :depends taxator-tk: 1.3.3e.*
   :depends tk: 8.5.19.*
   :depends trim-galore: 0.4.*
   :depends xorg-libxrender: 0.9.10.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metawrap

   and update with::

      conda update metawrap

   or use the docker container::

      docker pull quay.io/biocontainers/metawrap:<tag>

   (see `metawrap/tags`_ for valid values for ``<tag>``)


.. |downloads_metawrap| image:: https://img.shields.io/conda/dn/bioconda/metawrap.svg?style=flat
   :alt:   (downloads)
.. |docker_metawrap| image:: https://quay.io/repository/biocontainers/metawrap/status
   :target: https://quay.io/repository/biocontainers/metawrap
.. _`metawrap/tags`: https://quay.io/repository/biocontainers/metawrap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metawrap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metawrap/README.html