:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'run-dbcan'
.. highlight: bash

run-dbcan
=========

.. conda:recipe:: run-dbcan
   :replaces_section_title:
   :noindex:

   Standalone version of dbCAN annotation tool for automated CAZyme annotation

   :homepage: https://github.com/linnabrown/run_dbcan
   :license: GPL3 / GPL-3.0-only
   :recipe: /`run-dbcan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/run-dbcan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/run-dbcan/meta.yaml>`_

   


.. conda:package:: run-dbcan

   |downloads_run-dbcan| |docker_run-dbcan|

   :versions:
      
      

      ``2.0.11-0``

      

   
   :depends diamond: 
   :depends fraggenescan: 
   :depends hmmer: 
   :depends natsort: 
   :depends prodigal: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install run-dbcan

   and update with::

      conda update run-dbcan

   or use the docker container::

      docker pull quay.io/biocontainers/run-dbcan:<tag>

   (see `run-dbcan/tags`_ for valid values for ``<tag>``)


.. |downloads_run-dbcan| image:: https://img.shields.io/conda/dn/bioconda/run-dbcan.svg?style=flat
   :target: https://anaconda.org/bioconda/run-dbcan
   :alt:   (downloads)
.. |docker_run-dbcan| image:: https://quay.io/repository/biocontainers/run-dbcan/status
   :target: https://quay.io/repository/biocontainers/run-dbcan
.. _`run-dbcan/tags`: https://quay.io/repository/biocontainers/run-dbcan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/run-dbcan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/run-dbcan/README.html