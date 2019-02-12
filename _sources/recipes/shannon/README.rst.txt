:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shannon'
.. highlight: bash

shannon
=======

.. conda:recipe:: shannon
   :replaces_section_title:

   A program for assembling transcripts from RNA\-Seq data.

   :homepage: http://sreeramkannan.github.io/Shannon/
   :developer docs: https://github.com/sreeramkannan/Shannon
   :license: GPL3 / GPLv3
   :recipe: /`shannon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shannon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shannon/meta.yaml>`_

   


.. conda:package:: shannon

   |downloads_shannon| |docker_shannon|

   :versions: 0.0.2-0
   
   :depends cvxopt: 
   
   :depends jellyfish: 
   
   :depends metis: 
   
   :depends numpy: 
   
   :depends parallel: 
   
   :depends python: <3
   
   :depends quorum: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shannon

   and update with::

      conda update shannon

   or use the docker container::

      docker pull quay.io/repository/biocontainers/shannon:<tag>

   (see `shannon/tags`_ for valid values for ``<tag>``)


.. |downloads_shannon| image:: https://img.shields.io/conda/dn/bioconda/shannon.svg?style=flat
   :alt:   (downloads)
.. |docker_shannon| image:: https://quay.io/repository/biocontainers/shannon/status
   :target: https://quay.io/repository/biocontainers/shannon
.. _`shannon/tags`: https://quay.io/repository/biocontainers/shannon?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shannon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shannon/README.html