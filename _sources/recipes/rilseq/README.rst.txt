:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rilseq'
.. highlight: bash

rilseq
======

.. conda:recipe:: rilseq
   :replaces_section_title:
   :noindex:

   Processing RILSeq experiments results

   :homepage: http://github.com/asafpr/RILseq
   :license: MIT / MIT
   :recipe: /`rilseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rilseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rilseq/meta.yaml>`_

   


.. conda:package:: rilseq

   |downloads_rilseq| |docker_rilseq|

   :versions:
      
      

      ``0.78-1``,  ``0.78-0``,  ``0.77-0``,  ``0.75-0``,  ``0.74-0``,  ``0.73-0``,  ``0.72-0``,  ``0.71-0``,  ``0.70-0``

      

   
   :depends biopython: 
   :depends bwa: ``>=0.7.12``
   :depends numpy: 
   :depends pysam: ``>=0.14.1``
   :depends python: ``>=3``
   :depends samtools: ``>=1.9``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rilseq

   and update with::

      conda update rilseq

   or use the docker container::

      docker pull quay.io/biocontainers/rilseq:<tag>

   (see `rilseq/tags`_ for valid values for ``<tag>``)


.. |downloads_rilseq| image:: https://img.shields.io/conda/dn/bioconda/rilseq.svg?style=flat
   :target: https://anaconda.org/bioconda/rilseq
   :alt:   (downloads)
.. |docker_rilseq| image:: https://quay.io/repository/biocontainers/rilseq/status
   :target: https://quay.io/repository/biocontainers/rilseq
.. _`rilseq/tags`: https://quay.io/repository/biocontainers/rilseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rilseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rilseq/README.html