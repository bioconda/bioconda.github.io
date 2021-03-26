:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'medusa'
.. highlight: bash

medusa
======

.. conda:recipe:: medusa
   :replaces_section_title:
   :noindex:

   A draft genome scaffolder that uses multiple reference genomes in a graph\-based approach.

   :homepage: https://github.com/combogenomics/medusa
   :license: GPL >=3
   :recipe: /`medusa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medusa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medusa/meta.yaml>`_

   


.. conda:package:: medusa

   |downloads_medusa| |docker_medusa|

   :versions:
      
      

      ``1.6-2``,  ``1.6-1``,  ``1.6-0``

      

   
   :depends biopython: 
   :depends networkx: 
   :depends numpy: 
   :depends openjdk: ``>=8``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install medusa

   and update with::

      conda update medusa

   or use the docker container::

      docker pull quay.io/biocontainers/medusa:<tag>

   (see `medusa/tags`_ for valid values for ``<tag>``)


.. |downloads_medusa| image:: https://img.shields.io/conda/dn/bioconda/medusa.svg?style=flat
   :target: https://anaconda.org/bioconda/medusa
   :alt:   (downloads)
.. |docker_medusa| image:: https://quay.io/repository/biocontainers/medusa/status
   :target: https://quay.io/repository/biocontainers/medusa
.. _`medusa/tags`: https://quay.io/repository/biocontainers/medusa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/medusa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/medusa/README.html