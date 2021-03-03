:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ffindex'
.. highlight: bash

ffindex
=======

.. conda:recipe:: ffindex
   :replaces_section_title:
   :noindex:

   FFindex \- A database wrapped around mmap.

   :homepage: https://github.com/soedinglab/ffindex_soedinglab
   :license: CC-BY-SA-3.0
   :recipe: /`ffindex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ffindex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ffindex/meta.yaml>`_

   


.. conda:package:: ffindex

   |downloads_ffindex| |docker_ffindex|

   :versions:
      
      

      ``0.98-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ffindex

   and update with::

      conda update ffindex

   or use the docker container::

      docker pull quay.io/biocontainers/ffindex:<tag>

   (see `ffindex/tags`_ for valid values for ``<tag>``)


.. |downloads_ffindex| image:: https://img.shields.io/conda/dn/bioconda/ffindex.svg?style=flat
   :target: https://anaconda.org/bioconda/ffindex
   :alt:   (downloads)
.. |docker_ffindex| image:: https://quay.io/repository/biocontainers/ffindex/status
   :target: https://quay.io/repository/biocontainers/ffindex
.. _`ffindex/tags`: https://quay.io/repository/biocontainers/ffindex?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ffindex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ffindex/README.html