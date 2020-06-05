:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pipelign'
.. highlight: bash

pipelign
========

.. conda:recipe:: pipelign
   :replaces_section_title:
   :noindex:

   A pipeline for automated multiple sequence alignment\, particularly of viral sequences.

   :homepage: https://github.com/asmmhossain/pipelign/
   :license: MIT
   :recipe: /`pipelign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pipelign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pipelign/meta.yaml>`_

   


.. conda:package:: pipelign

   |downloads_pipelign| |docker_pipelign|

   :versions:
      
      

      ``0.2-2``,  ``0.2-1``,  ``0.2-0``

      

   
   :depends biopython: 
   :depends cd-hit: 
   :depends ete3: 
   :depends hmmer: 
   :depends iqtree: 
   :depends joblib: 
   :depends mafft: 
   :depends parallel: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pipelign

   and update with::

      conda update pipelign

   or use the docker container::

      docker pull quay.io/biocontainers/pipelign:<tag>

   (see `pipelign/tags`_ for valid values for ``<tag>``)


.. |downloads_pipelign| image:: https://img.shields.io/conda/dn/bioconda/pipelign.svg?style=flat
   :target: https://anaconda.org/bioconda/pipelign
   :alt:   (downloads)
.. |docker_pipelign| image:: https://quay.io/repository/biocontainers/pipelign/status
   :target: https://quay.io/repository/biocontainers/pipelign
.. _`pipelign/tags`: https://quay.io/repository/biocontainers/pipelign?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pipelign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pipelign/README.html