:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seedme'
.. highlight: bash

seedme
======

.. conda:recipe:: seedme
   :replaces_section_title:

   Python REST like client for SeedMe.org

   :homepage: https://www.seedme.org/downloads
   :license: GPL
   :recipe: /`seedme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seedme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seedme/meta.yaml>`_

   


.. conda:package:: seedme

   |downloads_seedme| |docker_seedme|

   :versions: 1.2.4-2, 1.2.4-1, 1.2.4-0, 1.2.0-1, 1.2.0-0
   
   :depends curl: 
   :depends python: <3
   :depends requests: 2.7.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seedme

   and update with::

      conda update seedme

   or use the docker container::

      docker pull quay.io/biocontainers/seedme:<tag>

   (see `seedme/tags`_ for valid values for ``<tag>``)


.. |downloads_seedme| image:: https://img.shields.io/conda/dn/bioconda/seedme.svg?style=flat
   :target: https://anaconda.org/bioconda/seedme
   :alt:   (downloads)
.. |docker_seedme| image:: https://quay.io/repository/biocontainers/seedme/status
   :target: https://quay.io/repository/biocontainers/seedme
.. _`seedme/tags`: https://quay.io/repository/biocontainers/seedme?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seedme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seedme/README.html