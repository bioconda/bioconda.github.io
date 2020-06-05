:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastalite'
.. highlight: bash

fastalite
=========

.. conda:recipe:: fastalite
   :replaces_section_title:
   :noindex:

   Simplest possible fasta parser

   :homepage: https://github.com/nhoffman/fastalite
   :license: MIT / MIT
   :recipe: /`fastalite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastalite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastalite/meta.yaml>`_

   


.. conda:package:: fastalite

   |downloads_fastalite| |docker_fastalite|

   :versions:
      
      

      ``0.3-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastalite

   and update with::

      conda update fastalite

   or use the docker container::

      docker pull quay.io/biocontainers/fastalite:<tag>

   (see `fastalite/tags`_ for valid values for ``<tag>``)


.. |downloads_fastalite| image:: https://img.shields.io/conda/dn/bioconda/fastalite.svg?style=flat
   :target: https://anaconda.org/bioconda/fastalite
   :alt:   (downloads)
.. |docker_fastalite| image:: https://quay.io/repository/biocontainers/fastalite/status
   :target: https://quay.io/repository/biocontainers/fastalite
.. _`fastalite/tags`: https://quay.io/repository/biocontainers/fastalite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastalite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastalite/README.html