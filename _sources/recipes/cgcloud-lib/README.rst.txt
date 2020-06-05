:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgcloud-lib'
.. highlight: bash

cgcloud-lib
===========

.. conda:recipe:: cgcloud-lib
   :replaces_section_title:
   :noindex:

   Components shared between cgcloud\-core and cgcloud\-agent

   :homepage: https://github.com/BD2KGenomics/cgcloud
   :license: Apache 2.0
   :recipe: /`cgcloud-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgcloud-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgcloud-lib/meta.yaml>`_

   


.. conda:package:: cgcloud-lib

   |downloads_cgcloud-lib| |docker_cgcloud-lib|

   :versions:
      
      

      ``1.6.0-4``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4a1.dev195-0``

      

   
   :depends bd2k-python-lib: 
   :depends boto: ``>=2.38.0``
   :depends future: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cgcloud-lib

   and update with::

      conda update cgcloud-lib

   or use the docker container::

      docker pull quay.io/biocontainers/cgcloud-lib:<tag>

   (see `cgcloud-lib/tags`_ for valid values for ``<tag>``)


.. |downloads_cgcloud-lib| image:: https://img.shields.io/conda/dn/bioconda/cgcloud-lib.svg?style=flat
   :target: https://anaconda.org/bioconda/cgcloud-lib
   :alt:   (downloads)
.. |docker_cgcloud-lib| image:: https://quay.io/repository/biocontainers/cgcloud-lib/status
   :target: https://quay.io/repository/biocontainers/cgcloud-lib
.. _`cgcloud-lib/tags`: https://quay.io/repository/biocontainers/cgcloud-lib?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgcloud-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgcloud-lib/README.html