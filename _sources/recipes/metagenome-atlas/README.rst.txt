:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metagenome-atlas'
.. highlight: bash

metagenome-atlas
================

.. conda:recipe:: metagenome-atlas
   :replaces_section_title:

   ATLAS \- Three commands to start analysing your metagenome data


   :homepage: https://github.com/metagenome-atlas
   :documentation: https://metagenome-atlas.rtfd.io
   
   :developer docs: https://github.com/metagenome-atlas/atlas
   :license: BSD / BSD-3-Clause
   :recipe: /`metagenome-atlas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagenome-atlas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagenome-atlas/meta.yaml>`_

   Atlas is a easy to use metagenomic pipeline
   \!\[scheme of workflow\]\(https\:\/\/github.com\/metagenome\-atlas\/atlas\/blob\/f8627545bcfb8f2b55733a35ecd0426ae4bbd5d1\/resources\/images\/ATLAS\_scheme.png\)

   \# Quick Start

   Three commands to start analysing your metagenome data\:
   \`\`\`
       conda install \-c bioconda \-c conda\-forge metagenome\-atlas
       atlas init \-\-db\-dir databases path\/to\/fastq\/files
       atlas run
   \`\`\`
   All databases and dependencies are installed on the fly in the directory \`db\-dir\`.
   You want to run these three commands on the example\_data on the GitHub repo.
   If you have more time\, then we recommend you configure atlas according to your needs.
     \- check the \`samples.tsv\`
     \- edit the \`config.yaml\`
     \- run atlas on any cluster system
   For more details see documentation.



.. conda:package:: metagenome-atlas

   |downloads_metagenome-atlas| |docker_metagenome-atlas|

   :versions: 2.0.1-1, 2.0.1-0
   
   :depends bbmap: 37.78.*
   
   :depends biopython: >=1.70
   
   :depends click: 7.*
   
   :depends git: 
   
   :depends pandas: 0.23.*
   
   :depends python: 3.6.*
   
   :depends ruamel.yaml: 0.15.*
   
   :depends snakemake: 5.4.*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metagenome-atlas

   and update with::

      conda update metagenome-atlas

   or use the docker container::

      docker pull quay.io/biocontainers/metagenome-atlas:<tag>

   (see `metagenome-atlas/tags`_ for valid values for ``<tag>``)


.. |downloads_metagenome-atlas| image:: https://img.shields.io/conda/dn/bioconda/metagenome-atlas.svg?style=flat
   :alt:   (downloads)
.. |docker_metagenome-atlas| image:: https://quay.io/repository/biocontainers/metagenome-atlas/status
   :target: https://quay.io/repository/biocontainers/metagenome-atlas
.. _`metagenome-atlas/tags`: https://quay.io/repository/biocontainers/metagenome-atlas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metagenome-atlas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metagenome-atlas/README.html