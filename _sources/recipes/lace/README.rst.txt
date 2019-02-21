:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lace'
.. highlight: bash

lace
====

.. conda:recipe:: lace
   :replaces_section_title:

   Building SuperTranscripts\: A linear representation of transcriptome data

   :homepage: https://github.com/Oshlack/Lace
   :license: Unknown
   :recipe: /`lace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lace/meta.yaml>`_

   


.. conda:package:: lace

   |downloads_lace| |docker_lace|

   :versions: 1.00-1, 1.00-0, 0.99-0, 0.80-0
   
   :depends blat: 
   
   :depends libgcc-ng: >=4.9
   
   :depends matplotlib: 
   
   :depends networkx: 
   
   :depends numpy: 
   
   :depends pandas: 
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lace

   and update with::

      conda update lace

   or use the docker container::

      docker pull quay.io/biocontainers/lace:<tag>

   (see `lace/tags`_ for valid values for ``<tag>``)


.. |downloads_lace| image:: https://img.shields.io/conda/dn/bioconda/lace.svg?style=flat
   :alt:   (downloads)
.. |docker_lace| image:: https://quay.io/repository/biocontainers/lace/status
   :target: https://quay.io/repository/biocontainers/lace
.. _`lace/tags`: https://quay.io/repository/biocontainers/lace?tab=tags






Notes
-----
Prefix with \'Lace\_\' for the script name that is rather generic\: \'Checker.py\'.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lace/README.html