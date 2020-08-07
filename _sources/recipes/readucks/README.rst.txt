:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'readucks'
.. highlight: bash

readucks
========

.. conda:recipe:: readucks
   :replaces_section_title:
   :noindex:

   Readucks\: a simple demultiplexer for nanopore reads

   :homepage: https://github.com/artic-network/readucks
   :license: GPL-3.0
   :recipe: /`readucks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/readucks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/readucks/meta.yaml>`_

   


.. conda:package:: readucks

   |downloads_readucks| |docker_readucks|

   :versions:
      
      

      ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends biopython: 
   :depends parasail-python: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install readucks

   and update with::

      conda update readucks

   or use the docker container::

      docker pull quay.io/biocontainers/readucks:<tag>

   (see `readucks/tags`_ for valid values for ``<tag>``)


.. |downloads_readucks| image:: https://img.shields.io/conda/dn/bioconda/readucks.svg?style=flat
   :target: https://anaconda.org/bioconda/readucks
   :alt:   (downloads)
.. |docker_readucks| image:: https://quay.io/repository/biocontainers/readucks/status
   :target: https://quay.io/repository/biocontainers/readucks
.. _`readucks/tags`: https://quay.io/repository/biocontainers/readucks?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/readucks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/readucks/README.html