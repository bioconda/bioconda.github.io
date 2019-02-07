.. title:: Package Recipe 'bcl2fastq-nextseq'
.. highlight: bash


bcl2fastq-nextseq
=================

.. conda:recipe:: bcl2fastq-nextseq
   :replaces_section_title:

   NextSeq .bcl Conversion

   :homepage: https://github.com/brwnj/bcl2fastq
   :license: MIT / MIT
   :recipe: /`bcl2fastq-nextseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcl2fastq-nextseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcl2fastq-nextseq/meta.yaml>`_

   


.. conda:package:: bcl2fastq-nextseq

   |downloads_bcl2fastq-nextseq| |docker_bcl2fastq-nextseq|

   :versions: 1.2.4, 0.1.0

   :depends: :conda:package:`click`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` 2.7* :conda:package:`seaborn`  

   :required~by: |required_by_bcl2fastq-nextseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcl2fastq-nextseq

   and update with::

      conda update bcl2fastq-nextseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bcl2fastq-nextseq


.. |required_by_bcl2fastq-nextseq| conda:required_by:: bcl2fastq-nextseq
.. |downloads_bcl2fastq-nextseq| image:: https://img.shields.io/conda/dn/bioconda/bcl2fastq-nextseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bcl2fastq-nextseq| image:: https://quay.io/repository/biocontainers/bcl2fastq-nextseq/status
   :target: https://quay.io/repository/biocontainers/bcl2fastq-nextseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcl2fastq-nextseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcl2fastq-nextseq/README.html

