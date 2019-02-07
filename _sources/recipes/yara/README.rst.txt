.. title:: Package Recipe 'yara'
.. highlight: bash


yara
====

.. conda:recipe:: yara
   :replaces_section_title:

   Yara is an exact tool for aligning DNA sequencing reads to reference genomes.

   :homepage: https://github.com/seqan/seqan/blob/develop/apps/yara/README.rst
   :license: BSD / https://raw.githubusercontent.com/seqan/seqan/develop/apps/yara/LICENSE
   :recipe: /`yara <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yara>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yara/meta.yaml>`_
   :links: biotools: :biotools:`yara`, doi: :doi:`10.1093/nar/gkt005`

   


.. conda:package:: yara

   |downloads_yara| |docker_yara|

   :versions: 1.0.2, 0.9.10, 0.9.9, 0.9.6

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_yara|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install yara

   and update with::

      conda update yara

   or use the docker container::

      docker pull quay.io/repository/biocontainers/yara


.. |required_by_yara| conda:required_by:: yara
.. |downloads_yara| image:: https://img.shields.io/conda/dn/bioconda/yara.svg?style=flat
   :alt:   (downloads)
.. |docker_yara| image:: https://quay.io/repository/biocontainers/yara/status
   :target: https://quay.io/repository/biocontainers/yara







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yara/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yara/README.html

