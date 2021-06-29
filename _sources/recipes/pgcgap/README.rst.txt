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
   :developer docs: https://github.com/liaochenlanruo/pgcgap/tree/master
   :license: GPL / GPLv3
   :recipe: /`pgcgap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgcgap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgcgap/meta.yaml>`_
   :links: biotools: :biotools:`pgcgap`

   


.. conda:package:: pgcgap

   |downloads_pgcgap| |docker_pgcgap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.30-0</code>,  <code>1.0.29-0</code>,  <code>1.0.28-0</code>,  <code>1.0.27-0</code>,  <code>1.0.26-0</code>,  <code>1.0.25-0</code>,  <code>1.0.24-0</code>,  <code>1.0.23-0</code>,  <code>1.0.22-0</code>,  </span></summary>
      

      ``1.0.30-0``,  ``1.0.29-0``,  ``1.0.28-0``,  ``1.0.27-0``,  ``1.0.26-0``,  ``1.0.25-0``,  ``1.0.24-0``,  ``1.0.23-0``,  ``1.0.22-0``,  ``1.0.21-0``,  ``1.0.20-0``,  ``1.0.19-2``,  ``1.0.19-1``,  ``1.0.19-0``,  ``1.0.18-1``,  ``1.0.18-0``,  ``1.0.17-0``,  ``1.0.16-0``,  ``1.0.15-0``,  ``1.0.14-0``,  ``1.0.13-1``,  ``1.0.13-0``,  ``1.0.12-1``,  ``1.0.12-0``,  ``1.0.11-1``,  ``1.0.11-0``,  ``1.0.10-2``,  ``1.0.10-1``,  ``1.0.10-0``,  ``1.0.9-2``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends abricate: 
   :depends abyss: 
   :depends biopython: 
   :depends canu: ``>=1.8``
   :depends coreutils: 
   :depends fastani: ``>=1.1``
   :depends fastme: ``>=2.1.5``
   :depends fastp: 
   :depends gblocks: 
   :depends gubbins: 
   :depends htslib: ``>=1.9``
   :depends iqtree: 
   :depends mash: 
   :depends matplotlib-base: 
   :depends minced: 
   :depends modeltest-ng: 
   :depends numpy: 
   :depends openjdk: ``8.0.152.*``
   :depends orthofinder: ``>=2.3.8``
   :depends pal2nal: 
   :depends pandas: 
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-data-dumper: ``>=2.173``
   :depends perl-file-copy-recursive: 
   :depends perl-file-tee: 
   :depends perl-getopt-long: ``>=2.50``
   :depends perl-parallel-forkmanager: 
   :depends perl-pod-usage: ``>=1.69``
   :depends perl-posix: 
   :depends perl-sys-info: 
   :depends prokka: 
   :depends python: 
   :depends r-base: 
   :depends r-corrplot: 
   :depends r-ggplot2: ``>=3.1.1``
   :depends r-gplots: 
   :depends r-pheatmap: 
   :depends r-plotrix: 
   :depends raxml-ng: 
   :depends roary: ``>=3.12.0``
   :depends seaborn: 
   :depends sickle-trim: ``>=1.33``
   :depends snippy: ``>=4.3.6``
   :depends trimal: 
   :depends unicycler: ``0.4.7.*``
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







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgcgap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgcgap/README.html