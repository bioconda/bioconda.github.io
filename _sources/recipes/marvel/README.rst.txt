:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'marvel'
.. highlight: bash

marvel
======

.. conda:recipe:: marvel
   :replaces_section_title:
   :noindex:

   MARVEL\: Metagenomic Analyses and Retrieval of Viral Elements 

   :homepage: http://github.com/quadram-institute-bioscience/marvel/
   :license: GPL3
   :recipe: /`marvel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marvel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marvel/meta.yaml>`_

   


.. conda:package:: marvel

   |downloads_marvel| |docker_marvel|

   :versions:
      
      

      ``0.2-4``,  ``0.2-3``,  ``0.2-2``,  ``0.2-1``,  ``0.2-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends prokka: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install marvel

   and update with::

      conda update marvel

   or use the docker container::

      docker pull quay.io/biocontainers/marvel:<tag>

   (see `marvel/tags`_ for valid values for ``<tag>``)


.. |downloads_marvel| image:: https://img.shields.io/conda/dn/bioconda/marvel.svg?style=flat
   :target: https://anaconda.org/bioconda/marvel
   :alt:   (downloads)
.. |docker_marvel| image:: https://quay.io/repository/biocontainers/marvel/status
   :target: https://quay.io/repository/biocontainers/marvel
.. _`marvel/tags`: https://quay.io/repository/biocontainers/marvel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/marvel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/marvel/README.html