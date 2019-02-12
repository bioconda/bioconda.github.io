:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'solvebio'
.. highlight: bash

solvebio
========

.. conda:recipe:: solvebio
   :replaces_section_title:

   The SolveBio Python client

   :homepage: https://github.com/solvebio/solvebio-python
   :license: MIT / MIT
   :recipe: /`solvebio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/solvebio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/solvebio/meta.yaml>`_

   


.. conda:package:: solvebio

   |downloads_solvebio| |docker_solvebio|

   :versions: 2.8.0-0, 2.7.0-0, 2.6.1-0, 2.5.1-2, 2.5.1-0, 2.4.6-0
   
   :depends pycurl: >=7.0.0
   
   :depends pyprind: 
   
   :depends python: 
   
   :depends requests: >=2.0.0
   
   :depends six: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install solvebio

   and update with::

      conda update solvebio

   or use the docker container::

      docker pull quay.io/repository/biocontainers/solvebio:<tag>

   (see `solvebio/tags`_ for valid values for ``<tag>``)


.. |downloads_solvebio| image:: https://img.shields.io/conda/dn/bioconda/solvebio.svg?style=flat
   :alt:   (downloads)
.. |docker_solvebio| image:: https://quay.io/repository/biocontainers/solvebio/status
   :target: https://quay.io/repository/biocontainers/solvebio
.. _`solvebio/tags`: https://quay.io/repository/biocontainers/solvebio?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/solvebio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/solvebio/README.html