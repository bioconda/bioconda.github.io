:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mimodd'
.. highlight: bash

mimodd
======

.. conda:recipe:: mimodd
   :replaces_section_title:
   :noindex:

   Tools for Mutation Identification in Model Organism Genomes

   :homepage: http://sourceforge.net/projects/mimodd
   :license: GPL3
   :recipe: /`mimodd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimodd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimodd/meta.yaml>`_

   


.. conda:package:: mimodd

   |downloads_mimodd| |docker_mimodd|

   :versions:
      
      

      ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7.3-0``

      

   
   :depends libgcc: 
   :depends python: ``3.5*``
   :depends rpy2: 
   :depends zlib: ``1.2.11*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mimodd

   and update with::

      conda update mimodd

   or use the docker container::

      docker pull quay.io/biocontainers/mimodd:<tag>

   (see `mimodd/tags`_ for valid values for ``<tag>``)


.. |downloads_mimodd| image:: https://img.shields.io/conda/dn/bioconda/mimodd.svg?style=flat
   :target: https://anaconda.org/bioconda/mimodd
   :alt:   (downloads)
.. |docker_mimodd| image:: https://quay.io/repository/biocontainers/mimodd/status
   :target: https://quay.io/repository/biocontainers/mimodd
.. _`mimodd/tags`: https://quay.io/repository/biocontainers/mimodd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mimodd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mimodd/README.html