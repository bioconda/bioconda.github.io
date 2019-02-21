:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tinysink'
.. highlight: bash

tinysink
========

.. conda:recipe:: tinysink
   :replaces_section_title:

   Synchronise Nanopore reads with a server.

   :homepage: https://github.com/mbhall88/tinysink
   :license: MIT
   :recipe: /`tinysink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinysink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinysink/meta.yaml>`_

   


.. conda:package:: tinysink

   |downloads_tinysink| |docker_tinysink|

   :versions: 1.0-1, 1.0-0
   
   :depends rsync: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tinysink

   and update with::

      conda update tinysink

   or use the docker container::

      docker pull quay.io/biocontainers/tinysink:<tag>

   (see `tinysink/tags`_ for valid values for ``<tag>``)


.. |downloads_tinysink| image:: https://img.shields.io/conda/dn/bioconda/tinysink.svg?style=flat
   :alt:   (downloads)
.. |docker_tinysink| image:: https://quay.io/repository/biocontainers/tinysink/status
   :target: https://quay.io/repository/biocontainers/tinysink
.. _`tinysink/tags`: https://quay.io/repository/biocontainers/tinysink?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tinysink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tinysink/README.html