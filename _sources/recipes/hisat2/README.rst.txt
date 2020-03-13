:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hisat2'
.. highlight: bash

hisat2
======

.. conda:recipe:: hisat2
   :replaces_section_title:

   Graph\-based alignment of next generation sequencing reads to a population of genomes.

   :homepage: http://daehwankimlab.github.io/hisat2
   :documentation: https://daehwankimlab.github.io/hisat2/manual/
   
   :developer docs: https://github.com/DaehwanKimLab/hisat2
   :license: GPL / GPL-3.0
   :recipe: /`hisat2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hisat2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hisat2/meta.yaml>`_
   :links: biotools: :biotools:`HISAT2`, doi: :doi:`10.1038/nmeth.3317`, doi: :doi:`10.1038/s41587-019-0201-4`

   HISAT2 is a fast and sensitive alignment program for mapping next\-generation sequencing reads \(both DNA and RNA\) to a population of human genomes as well as to a single reference genome.


.. conda:package:: hisat2

   |downloads_hisat2| |docker_hisat2|

   :versions: 2.2.0-1, 2.2.0-0, 2.1.0-4, 2.1.0-3, 2.1.0-2, 2.1.0-1, 2.1.0-0, 2.0.5-2, 2.0.5-1, 2.0.4-1, 2.0.4-0, 2.0.3beta-0, 2.0.2beta-0, 2.0.1beta-0, 2.0.0beta-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends perl: 
   :depends python: >=2.7,<2.8.0a0
   :depends python_abi: 2.7.* *_cp27mu
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hisat2

   and update with::

      conda update hisat2

   or use the docker container::

      docker pull quay.io/biocontainers/hisat2:<tag>

   (see `hisat2/tags`_ for valid values for ``<tag>``)


.. |downloads_hisat2| image:: https://img.shields.io/conda/dn/bioconda/hisat2.svg?style=flat
   :target: https://anaconda.org/bioconda/hisat2
   :alt:   (downloads)
.. |docker_hisat2| image:: https://quay.io/repository/biocontainers/hisat2/status
   :target: https://quay.io/repository/biocontainers/hisat2
.. _`hisat2/tags`: https://quay.io/repository/biocontainers/hisat2?tab=tags






Notes
-----
Pre\-built indices for HISAT2 can be downloaded from https\:\/\/daehwankimlab.github.io\/hisat2\/download\/.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hisat2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hisat2/README.html