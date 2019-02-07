.. title:: Package Recipe 'masurca'
.. highlight: bash


masurca
=======

.. conda:recipe:: masurca
   :replaces_section_title:

   MaSuRCA \(Maryland Super\-Read Celera Assembler\) genome assembly software.
   MaSuRCA requires Illumina data\, and supports third\-generation PacBio\/Nanopore
   MinION reads for hybrid assembly.

   :homepage: http://masurca.blogspot.co.uk/
   :license: GPL-3.0-only
   :recipe: /`masurca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/masurca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/masurca/meta.yaml>`_

   


.. conda:package:: masurca

   |downloads_masurca| |docker_masurca|

   :versions: 3.3.0, 3.2.9, 3.2.8, 3.2.7

   :depends: :conda:package:`boost` >=1.67.0,<1.67.1.0a0 :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_masurca|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install masurca

   and update with::

      conda update masurca

   or use the docker container::

      docker pull quay.io/repository/biocontainers/masurca


.. |required_by_masurca| conda:required_by:: masurca
.. |downloads_masurca| image:: https://img.shields.io/conda/dn/bioconda/masurca.svg?style=flat
   :alt:   (downloads)
.. |docker_masurca| image:: https://quay.io/repository/biocontainers/masurca/status
   :target: https://quay.io/repository/biocontainers/masurca







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/masurca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/masurca/README.html

