:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'frogs'
.. highlight: bash

frogs
=====

.. conda:recipe:: frogs
   :replaces_section_title:
   :noindex:

   FROGS is a workflow designed to metabarcoding sequence analysis

   :homepage: https://github.com/geraldinepascal/FROGS
   :license: GNU GPL v3
   :recipe: /`frogs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/frogs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/frogs/meta.yaml>`_

   FROGS produces an OTUs count matrix from high depth sequencing amplicon data. This is the official release 3.2.1 of FROGS. To fully install FROGS dependencies\, please refer to the frogs\-conda\-requirements.txt available at https\:\/\/github.com\/geraldinepascal\/FROGS


.. conda:package:: frogs

   |downloads_frogs| |docker_frogs|

   :versions:
      
      

      ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.0-1``,  ``3.1.0-0``,  ``2.0.1-1``,  ``2.0.1-0``

      

   
   :depends perl: 
   :depends perl-io-zlib: 
   :depends perl-perlio-gzip: 
   :depends python: ``>=3.7,<3.8.0a0``
   :depends rdptools: ``>=2.0.3``
   :depends scipy: ``>=1.1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install frogs

   and update with::

      conda update frogs

   or use the docker container::

      docker pull quay.io/biocontainers/frogs:<tag>

   (see `frogs/tags`_ for valid values for ``<tag>``)


.. |downloads_frogs| image:: https://img.shields.io/conda/dn/bioconda/frogs.svg?style=flat
   :target: https://anaconda.org/bioconda/frogs
   :alt:   (downloads)
.. |docker_frogs| image:: https://quay.io/repository/biocontainers/frogs/status
   :target: https://quay.io/repository/biocontainers/frogs
.. _`frogs/tags`: https://quay.io/repository/biocontainers/frogs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/frogs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/frogs/README.html