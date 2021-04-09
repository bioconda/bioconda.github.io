:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'springsuite'
.. highlight: bash

springsuite
===========

.. conda:recipe:: springsuite
   :replaces_section_title:
   :noindex:

   The Spring Suite contains tools to predict and model protein\-protein interactions from FASTA sequences and HHsearch threading results.

   :homepage: https://github.com/guerler/springsuite
   :license: GPL / GPL-2.0-only
   :recipe: /`springsuite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/springsuite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/springsuite/meta.yaml>`_

   


.. conda:package:: springsuite

   |downloads_springsuite| |docker_springsuite|

   :versions:
      
      

      ``0.2-1``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends matplotlib-base: 
   :depends pandas: 
   :depends pulchra: 
   :depends python: 
   :depends tmalign: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install springsuite

   and update with::

      conda update springsuite

   or use the docker container::

      docker pull quay.io/biocontainers/springsuite:<tag>

   (see `springsuite/tags`_ for valid values for ``<tag>``)


.. |downloads_springsuite| image:: https://img.shields.io/conda/dn/bioconda/springsuite.svg?style=flat
   :target: https://anaconda.org/bioconda/springsuite
   :alt:   (downloads)
.. |docker_springsuite| image:: https://quay.io/repository/biocontainers/springsuite/status
   :target: https://quay.io/repository/biocontainers/springsuite
.. _`springsuite/tags`: https://quay.io/repository/biocontainers/springsuite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/springsuite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/springsuite/README.html