:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ruffus'
.. highlight: bash

ruffus
======

.. conda:recipe:: ruffus
   :replaces_section_title:

   Light\-weight Python Computational Pipeline Management

   :homepage: http://www.ruffus.org.uk/
   :license: MIT
   :recipe: /`ruffus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ruffus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ruffus/meta.yaml>`_

   


.. conda:package:: ruffus

   |downloads_ruffus| |docker_ruffus|

   :versions: 2.8.1-1, 2.8.1-0, 2.8-0, 2.7-0, 2.6.3-1, 2.6.3-0
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ruffus

   and update with::

      conda update ruffus

   or use the docker container::

      docker pull quay.io/biocontainers/ruffus:<tag>

   (see `ruffus/tags`_ for valid values for ``<tag>``)


.. |downloads_ruffus| image:: https://img.shields.io/conda/dn/bioconda/ruffus.svg?style=flat
   :alt:   (downloads)
.. |docker_ruffus| image:: https://quay.io/repository/biocontainers/ruffus/status
   :target: https://quay.io/repository/biocontainers/ruffus
.. _`ruffus/tags`: https://quay.io/repository/biocontainers/ruffus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ruffus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ruffus/README.html