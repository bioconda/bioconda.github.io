.. title:: Package Recipe 'ucsc-pslmappostchain'
.. highlight: bash


ucsc-pslmappostchain
====================

.. conda:recipe:: ucsc-pslmappostchain
   :replaces_section_title:

    Post genomic pslMap \(TransMap\) chaining.  This takes transcripts that have been mapped via genomic chains adds back in blocks that didn\'t get include in genomic chains due to complex rearrangements or other issues. 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslmappostchain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslmappostchain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslmappostchain/meta.yaml>`_

   


.. conda:package:: ucsc-pslmappostchain

   |downloads_ucsc-pslmappostchain| |docker_ucsc-pslmappostchain|

   :versions: 366, 357

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-pslmappostchain|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslmappostchain

   and update with::

      conda update ucsc-pslmappostchain

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-pslmappostchain


.. |required_by_ucsc-pslmappostchain| conda:required_by:: ucsc-pslmappostchain
.. |downloads_ucsc-pslmappostchain| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslmappostchain.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-pslmappostchain| image:: https://quay.io/repository/biocontainers/ucsc-pslmappostchain/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslmappostchain







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslmappostchain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslmappostchain/README.html

