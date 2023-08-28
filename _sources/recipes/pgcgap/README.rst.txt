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

         <details><summary><span class="truncated-version-list"><code>1.0.35-1</code>,  <code>1.0.35-0</code>,  <code>1.0.34-0</code>,  <code>1.0.33-0</code>,  <code>1.0.32-0</code>,  <code>1.0.31-0</code>,  <code>1.0.30-0</code>,  <code>1.0.29-0</code>,  <code>1.0.28-0</code>,  </span></summary>
      

      ``1.0.35-1``,  ``1.0.35-0``,  ``1.0.34-0``,  ``1.0.33-0``,  ``1.0.32-0``,  ``1.0.31-0``,  ``1.0.30-0``,  ``1.0.29-0``,  ``1.0.28-0``,  ``1.0.27-0``,  ``1.0.26-0``,  ``1.0.25-0``,  ``1.0.24-0``,  ``1.0.23-0``,  ``1.0.22-0``,  ``1.0.21-0``,  ``1.0.20-0``,  ``1.0.19-2``,  ``1.0.19-1``,  ``1.0.19-0``,  ``1.0.18-1``,  ``1.0.18-0``,  ``1.0.17-0``,  ``1.0.16-0``,  ``1.0.15-0``,  ``1.0.14-0``,  ``1.0.13-1``,  ``1.0.13-0``,  ``1.0.12-1``,  ``1.0.12-0``,  ``1.0.11-1``,  ``1.0.11-0``,  ``1.0.10-2``,  ``1.0.10-1``,  ``1.0.10-0``,  ``1.0.9-2``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends abricate: ``1.0.1.*``
   :depends abyss: ``2.3.5.*``
   :depends canu: ``2.1.1.*``
   :depends coreutils: ``9.1.*``
   :depends fastani: ``1.33.*``
   :depends fastp: ``0.23.2.*``
   :depends htslib: ``1.16.*``
   :depends mamba: ``0.22.1.*``
   :depends mash: ``2.3.*``
   :depends matplotlib-base: ``3.5.3.*``
   :depends muscle: ``5.1.*``
   :depends numpy: ``1.21.6.*``
   :depends openjdk: ``17.0.3.*``
   :depends orthofinder: ``2.5.4.*``
   :depends pal2nal: ``14.1.*``
   :depends panaroo: ``1.1.2.*``
   :depends pandas: ``1.3.5.*``
   :depends perl: ``5.32.1.*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-data-dumper: ``2.183.*``
   :depends perl-file-copy-recursive: ``0.45.*``
   :depends perl-file-tee: ``0.07.*``
   :depends perl-parallel-forkmanager: ``2.02.*``
   :depends perl-pod-usage: ``2.03.*``
   :depends perl-posix: ``1.38_03.*``
   :depends prokka: ``1.14.6.*``
   :depends r-base: ``4.2.1.*``
   :depends r-corrplot: ``0.92.*``
   :depends r-ggplot2: ``3.3.6.*``
   :depends r-gplots: ``3.1.3.*``
   :depends r-pheatmap: ``1.0.12.*``
   :depends r-plotrix: ``3.8_2.*``
   :depends seaborn: ``0.12.0.*``
   :depends sickle-trim: ``1.33.*``
   :depends snippy: ``4.6.0.*``
   :depends snpeff: ``5.0.*``
   :depends trimal: ``1.4.1.*``
   :depends unicycler: ``0.4.8.*``
   :depends wget: ``1.20.3.*``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pgcgap

   and update with::

      mamba update pgcgap

  To create a new environment, run::

      mamba create --name myenvname pgcgap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.0.35","1.0.35","1.0.34","1.0.33","1.0.32"];
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