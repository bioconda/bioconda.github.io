:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'milonga'
.. highlight: bash

milonga
=======

.. conda:recipe:: milonga
   :replaces_section_title:
   :noindex:

   MiLongA \- A snakemake workflow for Microbial Long\-read Assembly

   :homepage: https://gitlab.com/bfr_bioinformatics/milonga
   :license: BSD-3-Clause
   :recipe: /`milonga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/milonga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/milonga/meta.yaml>`_

   


.. conda:package:: milonga

   |downloads_milonga| |docker_milonga|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends abricate: ``>=1.0.1``
   :depends bcftools: ``>=1.10.2``
   :depends bedtools: ``>=2.29.2``
   :depends bioawk: ``>=1.0``
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-biostrings: 
   :depends bioconductor-iranges: 
   :depends biopython: ``>=1.78``
   :depends blast: ``>=2.10.1``
   :depends bowtie2: ``>=2.4.1``
   :depends checkm-genome: ``>=1.1.3``
   :depends diamond: ``>=2.0.4``
   :depends flye: ``>=2.8.1``
   :depends kraken2: ``>=2.0.8``
   :depends miniasm: ``>=0.3_r179``
   :depends minimap2: ``>=2.17``
   :depends mummer4: ``>=4.0.0beta2``
   :depends nanofilt: ``>=2.7.1``
   :depends nanostat: ``>=1.4.0``
   :depends pandas: ``>=1.1.2``
   :depends pilon: ``>=1.23``
   :depends pip: ``>=20.2.3``
   :depends platon: ``>=1.4.0``
   :depends porechop: ``>=0.2.4``
   :depends prodigal: ``>=2.6.3``
   :depends qcat: ``>=1.1.0``
   :depends r-base: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-knitr: 
   :depends r-optparse: 
   :depends r-plotly: 
   :depends r-rmarkdown: 
   :depends r-tidyr: 
   :depends racon: ``>=1.4.13``
   :depends samtools: ``>=1.10``
   :depends snakemake-minimal: ``>=7.12.0``
   :depends spades: ``>=3.14.1``
   :depends taxonkit: ``>=0.6.2``
   :depends unicycler: ``>=0.4.8``
   :depends yaml: ``>=0.2.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install milonga

   and update with::

      conda update milonga

   or use the docker container::

      docker pull quay.io/biocontainers/milonga:<tag>

   (see `milonga/tags`_ for valid values for ``<tag>``)


.. |downloads_milonga| image:: https://img.shields.io/conda/dn/bioconda/milonga.svg?style=flat
   :target: https://anaconda.org/bioconda/milonga
   :alt:   (downloads)
.. |docker_milonga| image:: https://quay.io/repository/biocontainers/milonga/status
   :target: https://quay.io/repository/biocontainers/milonga
.. _`milonga/tags`: https://quay.io/repository/biocontainers/milonga?tab=tags


.. raw:: html

    <script>
        var package = "milonga";
        var versions = ["1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/milonga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/milonga/README.html