:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metawrap-mg'
.. highlight: bash

metawrap-mg
===========

.. conda:recipe:: metawrap-mg
   :replaces_section_title:
   :noindex:

   MetaWRAP is a pipeline for genome\-resolved metagenomic data analysis

   :homepage: https://github.com/bxlab/metaWRAP
   :license: MIT
   :recipe: /`metawrap-mg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metawrap-mg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metawrap-mg/meta.yaml>`_

   


.. conda:package:: metawrap-mg

   |downloads_metawrap-mg| |docker_metawrap-mg|

   :versions:
      
      

      ``1.3.0-1``,  ``1.3.0-0``

      

   
   :depends biopython: ``1.68.*``
   :depends blas: ``2.5 mkl``
   :depends blast: ``2.6.0.*``
   :depends bmtagger: ``3.101.*``
   :depends bowtie2: ``2.3.5.*``
   :depends bwa: ``0.7.17.*``
   :depends checkm-genome: ``1.0.12.*``
   :depends concoct: ``1.0.0.*``
   :depends fastqc: ``0.11.8.*``
   :depends kraken: ``1.1.*``
   :depends kraken2: ``2.0.*``
   :depends krona: ``2.7.*``
   :depends matplotlib-base: ``2.2.3.*``
   :depends maxbin2: ``2.2.6.*``
   :depends megahit: ``1.1.3.*``
   :depends metabat2: ``2.12.1.*``
   :depends openssl: ``1.0.*``
   :depends pandas: ``0.24.2.*``
   :depends perl-bioperl: 
   :depends pplacer: ``1.1.alpha19.*``
   :depends prokka: ``1.*``
   :depends python: ``2.7.15.*``
   :depends quast: ``5.0.2.*``
   :depends r-ggplot2: ``3.1.0.*``
   :depends r-recommended: ``3.5.1.*``
   :depends r-reshape2: 
   :depends salmon: ``0.13.1.*``
   :depends samtools: ``1.9.*``
   :depends seaborn: ``0.9.0.*``
   :depends spades: ``3.13.0.*``
   :depends taxator-tk: ``1.3.3e.*``
   :depends trim-galore: ``0.5.0.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metawrap-mg

   and update with::

      conda update metawrap-mg

   or use the docker container::

      docker pull quay.io/biocontainers/metawrap-mg:<tag>

   (see `metawrap-mg/tags`_ for valid values for ``<tag>``)


.. |downloads_metawrap-mg| image:: https://img.shields.io/conda/dn/bioconda/metawrap-mg.svg?style=flat
   :target: https://anaconda.org/bioconda/metawrap-mg
   :alt:   (downloads)
.. |docker_metawrap-mg| image:: https://quay.io/repository/biocontainers/metawrap-mg/status
   :target: https://quay.io/repository/biocontainers/metawrap-mg
.. _`metawrap-mg/tags`: https://quay.io/repository/biocontainers/metawrap-mg?tab=tags


.. raw:: html

    <script>
        var package = "metawrap-mg";
        var versions = ["1.3.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metawrap-mg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metawrap-mg/README.html