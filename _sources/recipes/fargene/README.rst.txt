:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fargene'
.. highlight: bash

fargene
=======

.. conda:recipe:: fargene
   :replaces_section_title:
   :noindex:

   Fragmented Antibiotic Resistance Gene iENntifiEr takes either fragmented metagenomic data or longer sequences as input and predicts and delivers full\-length antiobiotic resistance genes as output

   :homepage: https://github.com/fannyhb/fargene
   :license: MIT
   :recipe: /`fargene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fargene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fargene/meta.yaml>`_

   


.. conda:package:: fargene

   |downloads_fargene| |docker_fargene|

   :versions:
      
      

      ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-0``

      

   
   :depends biopython: ``>=1.68``
   :depends clustalo: 
   :depends emboss: 
   :depends hmmer: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pip: 
   :depends prodigal: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends pyyaml: 
   :depends seqtk: 
   :depends spades: 
   :depends trim-galore: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fargene

   and update with::

      conda update fargene

   or use the docker container::

      docker pull quay.io/biocontainers/fargene:<tag>

   (see `fargene/tags`_ for valid values for ``<tag>``)


.. |downloads_fargene| image:: https://img.shields.io/conda/dn/bioconda/fargene.svg?style=flat
   :target: https://anaconda.org/bioconda/fargene
   :alt:   (downloads)
.. |docker_fargene| image:: https://quay.io/repository/biocontainers/fargene/status
   :target: https://quay.io/repository/biocontainers/fargene
.. _`fargene/tags`: https://quay.io/repository/biocontainers/fargene?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fargene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fargene/README.html