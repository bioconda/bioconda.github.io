:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prinseq'
.. highlight: bash

prinseq
=======

.. conda:recipe:: prinseq
   :replaces_section_title:
   :noindex:

   PRINSEQ can be used to filter\, reformat\, or trim your genomic and metagenomic sequence data

   :homepage: http://prinseq.sourceforge.net/
   :license: GPLv3
   :recipe: /`prinseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prinseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prinseq/meta.yaml>`_

   


.. conda:package:: prinseq

   |downloads_prinseq| |docker_prinseq|

   :versions:
      
      

      ``0.20.4-4``,  ``0.20.4-3``,  ``0.20.4-2``,  ``0.20.4-1``,  ``0.20.4-0``

      

   
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prinseq

   and update with::

      conda update prinseq

   or use the docker container::

      docker pull quay.io/biocontainers/prinseq:<tag>

   (see `prinseq/tags`_ for valid values for ``<tag>``)


.. |downloads_prinseq| image:: https://img.shields.io/conda/dn/bioconda/prinseq.svg?style=flat
   :target: https://anaconda.org/bioconda/prinseq
   :alt:   (downloads)
.. |docker_prinseq| image:: https://quay.io/repository/biocontainers/prinseq/status
   :target: https://quay.io/repository/biocontainers/prinseq
.. _`prinseq/tags`: https://quay.io/repository/biocontainers/prinseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prinseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prinseq/README.html