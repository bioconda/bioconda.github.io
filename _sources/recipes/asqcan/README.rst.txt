:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'asqcan'
.. highlight: bash

asqcan
======

.. conda:recipe:: asqcan
   :replaces_section_title:

   A combined pipeline for bacterial genome assembly\, quality control and annotation

   :homepage: https://github.com/bogemad/asqcan
   :license: GPL / GPLv3
   :recipe: /`asqcan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asqcan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asqcan/meta.yaml>`_

   


.. conda:package:: asqcan

   |downloads_asqcan| |docker_asqcan|

   :versions: 0.2-1, 0.2-0, 0.1-0
   
   :depends blast: 
   :depends blobtools: 
   :depends fastqc: 
   :depends parallel: 
   :depends prokka: 
   :depends python: >=2.7,<2.8.0a0
   :depends quast: 
   :depends spades: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install asqcan

   and update with::

      conda update asqcan

   or use the docker container::

      docker pull quay.io/biocontainers/asqcan:<tag>

   (see `asqcan/tags`_ for valid values for ``<tag>``)


.. |downloads_asqcan| image:: https://img.shields.io/conda/dn/bioconda/asqcan.svg?style=flat
   :target: https://anaconda.org/bioconda/asqcan
   :alt:   (downloads)
.. |docker_asqcan| image:: https://quay.io/repository/biocontainers/asqcan/status
   :target: https://quay.io/repository/biocontainers/asqcan
.. _`asqcan/tags`: https://quay.io/repository/biocontainers/asqcan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/asqcan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/asqcan/README.html