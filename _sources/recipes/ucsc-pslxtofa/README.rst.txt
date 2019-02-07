.. title:: Package Recipe 'ucsc-pslxtofa'
.. highlight: bash


ucsc-pslxtofa
=============

.. conda:recipe:: ucsc-pslxtofa
   :replaces_section_title:

   convert pslx \(with sequence\) to fasta file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslxtofa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslxtofa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslxtofa/meta.yaml>`_

   


.. conda:package:: ucsc-pslxtofa

   |downloads_ucsc-pslxtofa| |docker_ucsc-pslxtofa|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-pslxtofa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslxtofa

   and update with::

      conda update ucsc-pslxtofa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-pslxtofa


.. |required_by_ucsc-pslxtofa| conda:required_by:: ucsc-pslxtofa
.. |downloads_ucsc-pslxtofa| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslxtofa.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-pslxtofa| image:: https://quay.io/repository/biocontainers/ucsc-pslxtofa/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslxtofa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslxtofa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslxtofa/README.html

