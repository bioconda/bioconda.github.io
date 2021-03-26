:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'migmap'
.. highlight: bash

migmap
======

.. conda:recipe:: migmap
   :replaces_section_title:
   :noindex:

   A wrapper for IgBlast V\-\(D\)\-J mapping tool designed to facilitate analysis immune receptor libraries profiled using high\-throughput sequencing.

   :homepage: https://github.com/mikessh/migmap
   :license: Apache / Apache-2.0
   :recipe: /`migmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/migmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/migmap/meta.yaml>`_

   


.. conda:package:: migmap

   |downloads_migmap| |docker_migmap|

   :versions:
      
      

      ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-0``,  ``1.0.2-0``,  ``0.9.7-0``

      

   
   :depends igblast: 
   :depends openjdk: ``<9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install migmap

   and update with::

      conda update migmap

   or use the docker container::

      docker pull quay.io/biocontainers/migmap:<tag>

   (see `migmap/tags`_ for valid values for ``<tag>``)


.. |downloads_migmap| image:: https://img.shields.io/conda/dn/bioconda/migmap.svg?style=flat
   :target: https://anaconda.org/bioconda/migmap
   :alt:   (downloads)
.. |docker_migmap| image:: https://quay.io/repository/biocontainers/migmap/status
   :target: https://quay.io/repository/biocontainers/migmap
.. _`migmap/tags`: https://quay.io/repository/biocontainers/migmap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/migmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/migmap/README.html