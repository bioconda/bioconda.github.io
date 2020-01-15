:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobasehttptools'
.. highlight: bash

biobasehttptools
================

.. conda:recipe:: biobasehttptools
   :replaces_section_title:

   Tools for querying bioinformatics web resources

   :homepage: https://github.com/eggzilla/BiobaseHTTPTools
   :license: GPL-3
   :recipe: /`biobasehttptools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobasehttptools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobasehttptools/meta.yaml>`_

   


.. conda:package:: biobasehttptools

   |downloads_biobasehttptools| |docker_biobasehttptools|

   :versions: 1.1.0-0, 1.0.1-0
   
   :depends ca-certificates: 
   :depends openssl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobasehttptools

   and update with::

      conda update biobasehttptools

   or use the docker container::

      docker pull quay.io/biocontainers/biobasehttptools:<tag>

   (see `biobasehttptools/tags`_ for valid values for ``<tag>``)


.. |downloads_biobasehttptools| image:: https://img.shields.io/conda/dn/bioconda/biobasehttptools.svg?style=flat
   :target: https://anaconda.org/bioconda/biobasehttptools
   :alt:   (downloads)
.. |docker_biobasehttptools| image:: https://quay.io/repository/biocontainers/biobasehttptools/status
   :target: https://quay.io/repository/biocontainers/biobasehttptools
.. _`biobasehttptools/tags`: https://quay.io/repository/biocontainers/biobasehttptools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobasehttptools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobasehttptools/README.html