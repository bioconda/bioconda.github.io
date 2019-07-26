:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ariba'
.. highlight: bash

ariba
=====

.. conda:recipe:: ariba
   :replaces_section_title:

   ARIBA\: Antibiotic Resistance Identification By Assembly

   :homepage: https://github.com/sanger-pathogens/ariba
   :license: GPL / GNU General Public License v3 (GPL-3.0)
   :recipe: /`ariba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ariba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ariba/meta.yaml>`_

   


.. conda:package:: ariba

   |downloads_ariba| |docker_ariba|

   :versions: 2.14.1-0, 2.13.5-0, 2.13.3-0, 2.13.2-0, 2.12.1-0, 2.12.0-2, 2.12.0-0, 2.11.1-0, 2.11.0-0, 2.10.1-0, 2.10.0-0, 2.5.1-0, 0.6.0-0
   
   :depends bcftools: >=1.2
   :depends beautifulsoup4: >=4.1.0
   :depends biopython: 
   :depends bowtie2: >=2.3.1
   :depends cd-hit: >=4.6.5
   :depends dendropy: >=4.2.0
   :depends libcxx: >=4.0.1
   :depends matplotlib: >=3.1.0
   :depends mummer: >=3.23
   :depends pyfastaq: >=3.12.0
   :depends pymummer: <=0.10.3
   :depends pysam: >=0.9.1
   :depends python: >=3.6,<3.7.0a0
   :depends samtools: >=1.2
   :depends spades: >=3.5.0
   :depends wget: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ariba

   and update with::

      conda update ariba

   or use the docker container::

      docker pull quay.io/biocontainers/ariba:<tag>

   (see `ariba/tags`_ for valid values for ``<tag>``)


.. |downloads_ariba| image:: https://img.shields.io/conda/dn/bioconda/ariba.svg?style=flat
   :target: https://anaconda.org/bioconda/ariba
   :alt:   (downloads)
.. |docker_ariba| image:: https://quay.io/repository/biocontainers/ariba/status
   :target: https://quay.io/repository/biocontainers/ariba
.. _`ariba/tags`: https://quay.io/repository/biocontainers/ariba?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ariba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ariba/README.html