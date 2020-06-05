:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxtastic'
.. highlight: bash

taxtastic
=========

.. conda:recipe:: taxtastic
   :replaces_section_title:
   :noindex:

   Tools for taxonomic naming and annotation

   :homepage: https://github.com/fhcrc/taxtastic
   :license: GPL / GPL-3.0
   :recipe: /`taxtastic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxtastic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxtastic/meta.yaml>`_

   


.. conda:package:: taxtastic

   |downloads_taxtastic| |docker_taxtastic|

   :versions:
      
      

      ``0.8.11-0``,  ``0.8.9-0``,  ``0.8.5-2``,  ``0.8.5-0``,  ``0.5.4-0``

      

   
   :depends biopython: 
   :depends decorator: 
   :depends python: ``>3``
   :depends sqlalchemy: ``>=0.7``
   :depends xlrd: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install taxtastic

   and update with::

      conda update taxtastic

   or use the docker container::

      docker pull quay.io/biocontainers/taxtastic:<tag>

   (see `taxtastic/tags`_ for valid values for ``<tag>``)


.. |downloads_taxtastic| image:: https://img.shields.io/conda/dn/bioconda/taxtastic.svg?style=flat
   :target: https://anaconda.org/bioconda/taxtastic
   :alt:   (downloads)
.. |docker_taxtastic| image:: https://quay.io/repository/biocontainers/taxtastic/status
   :target: https://quay.io/repository/biocontainers/taxtastic
.. _`taxtastic/tags`: https://quay.io/repository/biocontainers/taxtastic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxtastic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxtastic/README.html