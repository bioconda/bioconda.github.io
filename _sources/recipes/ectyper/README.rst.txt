:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ectyper'
.. highlight: bash

ectyper
=======

.. conda:recipe:: ectyper
   :replaces_section_title:

   ECtyper is a python program for serotyping E. coli genomes

   :homepage: https://github.com/phac-nml/ecoli_serotyping
   :license: Apache 2
   :recipe: /`ectyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ectyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ectyper/meta.yaml>`_

   


.. conda:package:: ectyper

   |downloads_ectyper| |docker_ectyper|

   :versions: 0.9.0-0, 0.8.1-0, 0.5.4-2, 0.1-2, 0.1-0
   
   :depends bcftools: >=1.8.*
   :depends biopython: >=1.70.*
   :depends blast: >=2.7.1.*
   :depends bowtie2: >=2.3.*
   :depends mash: >=2.0.*
   :depends pandas: >=0.23.1.*
   :depends portalocker: >=1.5.*
   :depends pytest: >=3.5
   :depends python: >=3.5
   :depends requests: >=2.*.*
   :depends samtools: >=1.8.*
   :depends seqtk: >=1.2.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ectyper

   and update with::

      conda update ectyper

   or use the docker container::

      docker pull quay.io/biocontainers/ectyper:<tag>

   (see `ectyper/tags`_ for valid values for ``<tag>``)


.. |downloads_ectyper| image:: https://img.shields.io/conda/dn/bioconda/ectyper.svg?style=flat
   :target: https://anaconda.org/bioconda/ectyper
   :alt:   (downloads)
.. |docker_ectyper| image:: https://quay.io/repository/biocontainers/ectyper/status
   :target: https://quay.io/repository/biocontainers/ectyper
.. _`ectyper/tags`: https://quay.io/repository/biocontainers/ectyper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ectyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ectyper/README.html