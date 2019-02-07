.. title:: Package Recipe 'extract-sv-reads'
.. highlight: bash


extract-sv-reads
================

.. conda:recipe:: extract-sv-reads
   :replaces_section_title:

   Tool for extracting splitter or discordant reads from a BAM or CRAM file.

   :homepage: https://github.com/hall-lab/extract_sv_reads
   :license: MIT
   :recipe: /`extract-sv-reads <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract-sv-reads>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract-sv-reads/meta.yaml>`_

   


.. conda:package:: extract-sv-reads

   |downloads_extract-sv-reads| |docker_extract-sv-reads|

   :versions: 1.3.0, 1.2.1, 1.1.2, 1.1.0

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`curl` >=7.59.0,<8.0a0 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`xz` >=5.2.4,<5.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_extract-sv-reads|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install extract-sv-reads

   and update with::

      conda update extract-sv-reads

   or use the docker container::

      docker pull quay.io/repository/biocontainers/extract-sv-reads


.. |required_by_extract-sv-reads| conda:required_by:: extract-sv-reads
.. |downloads_extract-sv-reads| image:: https://img.shields.io/conda/dn/bioconda/extract-sv-reads.svg?style=flat
   :alt:   (downloads)
.. |docker_extract-sv-reads| image:: https://quay.io/repository/biocontainers/extract-sv-reads/status
   :target: https://quay.io/repository/biocontainers/extract-sv-reads







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/extract-sv-reads/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/extract-sv-reads/README.html

