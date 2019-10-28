:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minvar'
.. highlight: bash

minvar
======

.. conda:recipe:: minvar
   :replaces_section_title:

   A tool to detect minority variants in HIV\-1 and HCV populations

   :homepage: https://git.io/minvar
   :license: Custom
   :recipe: /`minvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minvar/meta.yaml>`_

   


.. conda:package:: minvar

   |downloads_minvar| |docker_minvar|

   :versions: 2.2.2-1, 2.2.2-0, 2.2.1-0, 2.2-0, 2.1.3-0, 2.1.2-1, 2.1.2-0, 2.1.1-2, 2.1.1-1, 2.1.1-0, 2.1-1, 2.1-0, 2.0-1, 2.0-0, 1.2b-1, 1.2b-0, 1.2a3-1, 1.2a3-0
   
   :depends bedtools: 
   :depends biopython: 
   :depends blast: >=2.3
   :depends bwa: 
   :depends emboss: 
   :depends htslib: 
   :depends lofreq: >=2.1.3.1
   :depends pandas: 
   :depends pandoc: 
   :depends python: >=3
   :depends samtools: >=1.3
   :depends seqtk: 
   :depends setuptools_scm_git_archive: 
   :depends sierrapy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minvar

   and update with::

      conda update minvar

   or use the docker container::

      docker pull quay.io/biocontainers/minvar:<tag>

   (see `minvar/tags`_ for valid values for ``<tag>``)


.. |downloads_minvar| image:: https://img.shields.io/conda/dn/bioconda/minvar.svg?style=flat
   :target: https://anaconda.org/bioconda/minvar
   :alt:   (downloads)
.. |docker_minvar| image:: https://quay.io/repository/biocontainers/minvar/status
   :target: https://quay.io/repository/biocontainers/minvar
.. _`minvar/tags`: https://quay.io/repository/biocontainers/minvar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minvar/README.html