.. title:: Package Recipe 'ucsc-bedextendranges'
.. highlight: bash


ucsc-bedextendranges
====================

.. conda:recipe:: ucsc-bedextendranges
   :replaces_section_title:

   extend length of entries in bed 6\+ data to be at least the given length\,

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedextendranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedextendranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedextendranges/meta.yaml>`_

   


.. conda:package:: ucsc-bedextendranges

   |downloads_ucsc-bedextendranges| |docker_ucsc-bedextendranges|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bedextendranges|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bedextendranges

   and update with::

      conda update ucsc-bedextendranges

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bedextendranges


.. |required_by_ucsc-bedextendranges| conda:required_by:: ucsc-bedextendranges
.. |downloads_ucsc-bedextendranges| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedextendranges.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bedextendranges| image:: https://quay.io/repository/biocontainers/ucsc-bedextendranges/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedextendranges







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedextendranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedextendranges/README.html

