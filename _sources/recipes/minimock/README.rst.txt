:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minimock'
.. highlight: bash

minimock
========

.. conda:recipe:: minimock
   :replaces_section_title:

   The simplest possible mock library

   :homepage: http://pypi.python.org/pypi/MiniMock
   :license: MIT / MIT License
   :recipe: /`minimock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimock/meta.yaml>`_

   


.. conda:package:: minimock

   |downloads_minimock| |docker_minimock|

   :versions: 1.2.8-1, 1.2.8-0
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minimock

   and update with::

      conda update minimock

   or use the docker container::

      docker pull quay.io/repository/biocontainers/minimock:<tag>

   (see `minimock/tags`_ for valid values for ``<tag>``)


.. |downloads_minimock| image:: https://img.shields.io/conda/dn/bioconda/minimock.svg?style=flat
   :alt:   (downloads)
.. |docker_minimock| image:: https://quay.io/repository/biocontainers/minimock/status
   :target: https://quay.io/repository/biocontainers/minimock
.. _`minimock/tags`: https://quay.io/repository/biocontainers/minimock?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minimock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minimock/README.html