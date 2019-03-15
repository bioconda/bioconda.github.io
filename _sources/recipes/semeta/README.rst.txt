:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'semeta'
.. highlight: bash

semeta
======

.. conda:recipe:: semeta
   :replaces_section_title:

   SeMeta is a new software for taxonomic assignment of metagenomic reads. It
   supports both single\-end and paired\-end reads. The software is implemented
   in C\+\+


   :homepage: http://it.hcmute.edu.vn/bioinfo/metapro/SeMeta.html
   :license: GPL-3
   :recipe: /`semeta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/semeta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/semeta/meta.yaml>`_

   


.. conda:package:: semeta

   |downloads_semeta| |docker_semeta|

   :versions: 1.0-0
   
   :depends blast: 
   
   :depends libgcc: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install semeta

   and update with::

      conda update semeta

   or use the docker container::

      docker pull quay.io/biocontainers/semeta:<tag>

   (see `semeta/tags`_ for valid values for ``<tag>``)


.. |downloads_semeta| image:: https://img.shields.io/conda/dn/bioconda/semeta.svg?style=flat
   :alt:   (downloads)
.. |docker_semeta| image:: https://quay.io/repository/biocontainers/semeta/status
   :target: https://quay.io/repository/biocontainers/semeta
.. _`semeta/tags`: https://quay.io/repository/biocontainers/semeta?tab=tags






Notes
-----
Databases are required. Please see the project homepage.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/semeta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/semeta/README.html