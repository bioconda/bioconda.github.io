:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jaffa'
.. highlight: bash

jaffa
=====

.. conda:recipe:: jaffa
   :replaces_section_title:
   :noindex:

   JAFFA is a multi\-step pipeline that takes either raw RNA\-Seq reads\, or pre\-assembled transcripts then searches
   for gene fusions.  This package contains the wrappers jaffa\-direct\, jaffa\-assembly\, and jaffa\-hybrid.
   You can pass the \"refSeq\" parameter in the environment variables JAFFA\_REF\_BASE. Otherwise\, pass any paramters
   to the wrappers as you would to the bpipe JAFFA\_\{method\} call in the manual.


   :homepage: https://github.com/Oshlack/JAFFA
   :license: GPLv3
   :recipe: /`jaffa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jaffa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jaffa/meta.yaml>`_

   


.. conda:package:: jaffa

   |downloads_jaffa| |docker_jaffa|

   :versions:
      
      

      ``2.00-1``,  ``2.00-0``,  ``1.09-2``,  ``1.09-1``,  ``1.09-0``,  ``1.08-0``

      

   
   :depends bbmap: 
   :depends bioconductor-iranges: 
   :depends blat: 
   :depends bowtie2: 
   :depends bpipe: 
   :depends fastx_toolkit: 
   :depends oases: 
   :depends samtools: ``1.1``
   :depends trimmomatic: 
   :depends velvet: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jaffa

   and update with::

      conda update jaffa

   or use the docker container::

      docker pull quay.io/biocontainers/jaffa:<tag>

   (see `jaffa/tags`_ for valid values for ``<tag>``)


.. |downloads_jaffa| image:: https://img.shields.io/conda/dn/bioconda/jaffa.svg?style=flat
   :target: https://anaconda.org/bioconda/jaffa
   :alt:   (downloads)
.. |docker_jaffa| image:: https://quay.io/repository/biocontainers/jaffa/status
   :target: https://quay.io/repository/biocontainers/jaffa
.. _`jaffa/tags`: https://quay.io/repository/biocontainers/jaffa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jaffa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jaffa/README.html