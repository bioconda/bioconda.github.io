:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ope'
.. highlight: bash

ope
===

.. conda:recipe:: ope
   :replaces_section_title:
   :noindex:

   Tools for gnu\-parallel with FASTA input and parsers for some common formats.

   :homepage: https://github.com/camillescott/ope
   :license: MIT / MIT
   :recipe: /`ope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ope/meta.yaml>`_

   


.. conda:package:: ope

   |downloads_ope| |docker_ope|

   :versions:
      
      

      ``0.6-0``

      

   
   :depends click: ``>=7.0``
   :depends numpy: 
   :depends pandas: 
   :depends parallel: 
   :depends python: 
   :depends screed: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ope

   and update with::

      conda update ope

   or use the docker container::

      docker pull quay.io/biocontainers/ope:<tag>

   (see `ope/tags`_ for valid values for ``<tag>``)


.. |downloads_ope| image:: https://img.shields.io/conda/dn/bioconda/ope.svg?style=flat
   :target: https://anaconda.org/bioconda/ope
   :alt:   (downloads)
.. |docker_ope| image:: https://quay.io/repository/biocontainers/ope/status
   :target: https://quay.io/repository/biocontainers/ope
.. _`ope/tags`: https://quay.io/repository/biocontainers/ope?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ope/README.html