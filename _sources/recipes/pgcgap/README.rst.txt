:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgcgap'
.. highlight: bash

pgcgap
======

.. conda:recipe:: pgcgap
   :replaces_section_title:
   :noindex:

   A prokaryotic genomics and comparative genomics analysis pipeline

   :homepage: https://github.com/liaochenlanruo/pgcgap/blob/master/README.md
   :documentation: https://liaochenlanruo.fun/pgcgap/
   
   :developer docs: https://github.com/liaochenlanruo/pgcgap/tree/master
   :license: GPL / GPLv3
   :recipe: /`pgcgap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgcgap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgcgap/meta.yaml>`_
   :links: biotools: :biotools:`pgcgap`

   PGCGAP is a pipeline for prokaryotic comparative genomics analysis. It can take the pair\-end reads\, ONT reads or PacBio reads as input. In addition to genome assembly\, gene prediction and annotation\, it can also get common comparative genomics analysis results such as phylogenetic trees of single\-core proteins and core SNPs\, pan\-genome\, whole\-genome Average Nucleotide Identity \(ANI\)\, orthogroups and orthologs\, COG annotations\, substitutions \(SNPs\) and insertions\/deletions \(indels\)\, and antimicrobial and virulence genes mining with only one line of commands.


.. conda:package:: pgcgap

   |downloads_pgcgap| |docker_pgcgap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.34-0</code>,  <code>1.0.33-0</code>,  <code>1.0.32-0</code>,  <code>1.0.31-0</code>,  <code>1.0.30-0</code>,  <code>1.0.29-0</code>,  <code>1.0.28-0</code>,  <code>1.0.27-0</code>,  <code>1.0.26-0</code>,  </span></summary>
      

      ``1.0.34-0``,  ``1.0.33-0``,  ``1.0.32-0``,  ``1.0.31-0``,  ``1.0.30-0``,  ``1.0.29-0``,  ``1.0.28-0``,  ``1.0.27-0``,  ``1.0.26-0``,  ``1.0.25-0``,  ``1.0.24-0``,  ``1.0.23-0``,  ``1.0.22-0``,  ``1.0.21-0``,  ``1.0.20-0``,  ``1.0.19-2``,  ``1.0.19-1``,  ``1.0.19-0``,  ``1.0.18-1``,  ``1.0.18-0``,  ``1.0.17-0``,  ``1.0.16-0``,  ``1.0.15-0``,  ``1.0.14-0``,  ``1.0.13-1``,  ``1.0.13-0``,  ``1.0.12-1``,  ``1.0.12-0``,  ``1.0.11-1``,  ``1.0.11-0``,  ``1.0.10-2``,  ``1.0.10-1``,  ``1.0.10-0``,  ``1.0.9-2``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends abyss: 
   :depends biopython: 
   :depends coreutils: 
   :depends htslib: 
   :depends mamba: 
   :depends mash: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends openjdk: 
   :depends pal2nal: 
   :depends pandas: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl: ``>=1.6.924``
   :depends perl-data-dumper: 
   :depends perl-file-copy-recursive: 
   :depends perl-file-tee: 
   :depends perl-parallel-forkmanager: 
   :depends perl-pod-usage: 
   :depends perl-posix: 
   :depends prokka: 
   :depends python: 
   :depends r-base: 
   :depends r-corrplot: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-pheatmap: 
   :depends r-plotrix: 
   :depends seaborn: 
   :depends trimal: 
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pgcgap

   and update with::

      conda update pgcgap

   or use the docker container::

      docker pull quay.io/biocontainers/pgcgap:<tag>

   (see `pgcgap/tags`_ for valid values for ``<tag>``)


.. |downloads_pgcgap| image:: https://img.shields.io/conda/dn/bioconda/pgcgap.svg?style=flat
   :target: https://anaconda.org/bioconda/pgcgap
   :alt:   (downloads)
.. |docker_pgcgap| image:: https://quay.io/repository/biocontainers/pgcgap/status
   :target: https://quay.io/repository/biocontainers/pgcgap
.. _`pgcgap/tags`: https://quay.io/repository/biocontainers/pgcgap?tab=tags


.. raw:: html

    <script>
        var package = "pgcgap";
        var versions = ["1.0.34","1.0.33","1.0.32","1.0.31","1.0.30"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgcgap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgcgap/README.html