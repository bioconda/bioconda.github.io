:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rapidnj'
.. highlight: bash

rapidnj
=======

.. conda:recipe:: rapidnj
   :replaces_section_title:

   RapidNJ is an algorithmic engineered implementation of canonical neighbour\-joining. It uses an efficient search heuristic to speed\-up the core computations of the neighbour\-joining method that enables RapidNJ to outperform other state\-of\-the\-art neighbour\-joining implementations.

   :homepage: http://birc.au.dk/software/rapidnj/
   :license: GPL / GPL-2
   :recipe: /`rapidnj <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapidnj>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapidnj/meta.yaml>`_
   :links: doi: :doi:`10.1007/978-3-540-87361-7_10`

   


.. conda:package:: rapidnj

   |downloads_rapidnj| |docker_rapidnj|

   :versions: v2.3.2-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rapidnj

   and update with::

      conda update rapidnj

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rapidnj:<tag>

   (see `rapidnj/tags`_ for valid values for ``<tag>``)


.. |downloads_rapidnj| image:: https://img.shields.io/conda/dn/bioconda/rapidnj.svg?style=flat
   :alt:   (downloads)
.. |docker_rapidnj| image:: https://quay.io/repository/biocontainers/rapidnj/status
   :target: https://quay.io/repository/biocontainers/rapidnj
.. _`rapidnj/tags`: https://quay.io/repository/biocontainers/rapidnj?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rapidnj/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rapidnj/README.html