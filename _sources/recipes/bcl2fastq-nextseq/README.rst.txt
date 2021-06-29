:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcl2fastq-nextseq'
.. highlight: bash

bcl2fastq-nextseq
=================

.. conda:recipe:: bcl2fastq-nextseq
   :replaces_section_title:
   :noindex:

   NextSeq .bcl Conversion

   :homepage: https://github.com/brwnj/bcl2fastq
   :license: MIT / MIT
   :recipe: /`bcl2fastq-nextseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcl2fastq-nextseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcl2fastq-nextseq/meta.yaml>`_

   


.. conda:package:: bcl2fastq-nextseq

   |downloads_bcl2fastq-nextseq| |docker_bcl2fastq-nextseq|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.6-0``,  ``1.2.4-3``,  ``1.2.4-2``,  ``1.2.4-0``,  ``0.1.0-0``

      

   
   :depends click: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcl2fastq-nextseq

   and update with::

      conda update bcl2fastq-nextseq

   or use the docker container::

      docker pull quay.io/biocontainers/bcl2fastq-nextseq:<tag>

   (see `bcl2fastq-nextseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bcl2fastq-nextseq| image:: https://img.shields.io/conda/dn/bioconda/bcl2fastq-nextseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bcl2fastq-nextseq
   :alt:   (downloads)
.. |docker_bcl2fastq-nextseq| image:: https://quay.io/repository/biocontainers/bcl2fastq-nextseq/status
   :target: https://quay.io/repository/biocontainers/bcl2fastq-nextseq
.. _`bcl2fastq-nextseq/tags`: https://quay.io/repository/biocontainers/bcl2fastq-nextseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcl2fastq-nextseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcl2fastq-nextseq/README.html