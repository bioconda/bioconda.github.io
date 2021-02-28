:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastafunk'
.. highlight: bash

fastafunk
=========

.. conda:recipe:: fastafunk
   :replaces_section_title:
   :noindex:

   Miscellaneous fasta manipulation tools

   :homepage: https://github.com/cov-ert/fastafunk
   :license: MIT / MIT
   :recipe: /`fastafunk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastafunk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastafunk/meta.yaml>`_

   


.. conda:package:: fastafunk

   |downloads_fastafunk| |docker_fastafunk|

   :versions:
      
      

      ``0.0.9-0``,  ``0.0.4-0``

      

   
   :depends biopython: ``>=1.70,<1.78``
   :depends dendropy: 
   :depends numpy: 
   :depends pandas: ``>=0.24.2``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastafunk

   and update with::

      conda update fastafunk

   or use the docker container::

      docker pull quay.io/biocontainers/fastafunk:<tag>

   (see `fastafunk/tags`_ for valid values for ``<tag>``)


.. |downloads_fastafunk| image:: https://img.shields.io/conda/dn/bioconda/fastafunk.svg?style=flat
   :target: https://anaconda.org/bioconda/fastafunk
   :alt:   (downloads)
.. |docker_fastafunk| image:: https://quay.io/repository/biocontainers/fastafunk/status
   :target: https://quay.io/repository/biocontainers/fastafunk
.. _`fastafunk/tags`: https://quay.io/repository/biocontainers/fastafunk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastafunk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastafunk/README.html