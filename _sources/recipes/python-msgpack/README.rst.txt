:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-msgpack'
.. highlight: bash

python-msgpack
==============

.. conda:recipe:: python-msgpack
   :replaces_section_title:

   It\'s like JSON. But fast and small.

   :homepage: https://pypi.org/project/msgpack/#description
   :license: Apache 2.0
   :recipe: /`python-msgpack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-msgpack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-msgpack/meta.yaml>`_

   


.. conda:package:: python-msgpack

   |downloads_python-msgpack| |docker_python-msgpack|

   :versions: 0.5.6-0
   
   :depends libgcc-ng: >=4.9
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-msgpack

   and update with::

      conda update python-msgpack

   or use the docker container::

      docker pull quay.io/repository/biocontainers/python-msgpack:<tag>

   (see `python-msgpack/tags`_ for valid values for ``<tag>``)


.. |downloads_python-msgpack| image:: https://img.shields.io/conda/dn/bioconda/python-msgpack.svg?style=flat
   :alt:   (downloads)
.. |docker_python-msgpack| image:: https://quay.io/repository/biocontainers/python-msgpack/status
   :target: https://quay.io/repository/biocontainers/python-msgpack
.. _`python-msgpack/tags`: https://quay.io/repository/biocontainers/python-msgpack?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-msgpack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-msgpack/README.html