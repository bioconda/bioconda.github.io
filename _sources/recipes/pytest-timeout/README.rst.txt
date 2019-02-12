:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytest-timeout'
.. highlight: bash

pytest-timeout
==============

.. conda:recipe:: pytest-timeout
   :replaces_section_title:

   py.test plugin to abort hanging tests

   :homepage: http://bitbucket.org/pytest-dev/pytest-timeout/
   :license: MIT License
   :recipe: /`pytest-timeout <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytest-timeout>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytest-timeout/meta.yaml>`_

   


.. conda:package:: pytest-timeout

   |downloads_pytest-timeout| |docker_pytest-timeout|

   :versions: 1.0.0-0
   
   :depends pytest: >=2.8.0
   
   :depends python: 2.7*
   
   :depends setuptools: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pytest-timeout

   and update with::

      conda update pytest-timeout

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pytest-timeout:<tag>

   (see `pytest-timeout/tags`_ for valid values for ``<tag>``)


.. |downloads_pytest-timeout| image:: https://img.shields.io/conda/dn/bioconda/pytest-timeout.svg?style=flat
   :alt:   (downloads)
.. |docker_pytest-timeout| image:: https://quay.io/repository/biocontainers/pytest-timeout/status
   :target: https://quay.io/repository/biocontainers/pytest-timeout
.. _`pytest-timeout/tags`: https://quay.io/repository/biocontainers/pytest-timeout?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytest-timeout/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytest-timeout/README.html