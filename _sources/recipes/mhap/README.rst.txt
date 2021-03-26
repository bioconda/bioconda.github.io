:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mhap'
.. highlight: bash

mhap
====

.. conda:recipe:: mhap
   :replaces_section_title:
   :noindex:

   MHAP\: MinHash Alignment Protocol. A tool for finding overlaps of long\-read sequences \(such as PacBio or Nanopore\) in bioinformatics.

   :homepage: https://github.com/marbl/MHAP
   :license: Apache / Apache-2.0
   :recipe: /`mhap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhap/meta.yaml>`_

   


.. conda:package:: mhap

   |downloads_mhap| |docker_mhap|

   :versions:
      
      

      ``2.1.3-1``,  ``2.1.3-0``,  ``2.1.1-0``,  ``2.0-0``

      

   
   :depends openjdk: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mhap

   and update with::

      conda update mhap

   or use the docker container::

      docker pull quay.io/biocontainers/mhap:<tag>

   (see `mhap/tags`_ for valid values for ``<tag>``)


.. |downloads_mhap| image:: https://img.shields.io/conda/dn/bioconda/mhap.svg?style=flat
   :target: https://anaconda.org/bioconda/mhap
   :alt:   (downloads)
.. |docker_mhap| image:: https://quay.io/repository/biocontainers/mhap/status
   :target: https://quay.io/repository/biocontainers/mhap
.. _`mhap/tags`: https://quay.io/repository/biocontainers/mhap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mhap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mhap/README.html