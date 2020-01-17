:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'locus_processing'
.. highlight: bash

locus_processing
================

.. conda:recipe:: locus_processing
   :replaces_section_title:

   Tools for working with locus definition files

   :homepage: https://github.com/LUMC/locus_processing
   :license: MIT / MIT License
   :recipe: /`locus_processing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/locus_processing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/locus_processing/meta.yaml>`_

   


.. conda:package:: locus_processing

   |downloads_locus_processing| |docker_locus_processing|

   :versions: 0.0.4-0
   
   :depends click: >=6.7
   :depends marshmallow: 2.13.5
   :depends python: >=3.6
   :depends pyyaml: >=3.12
   :depends requests: >=2.18.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install locus_processing

   and update with::

      conda update locus_processing

   or use the docker container::

      docker pull quay.io/biocontainers/locus_processing:<tag>

   (see `locus_processing/tags`_ for valid values for ``<tag>``)


.. |downloads_locus_processing| image:: https://img.shields.io/conda/dn/bioconda/locus_processing.svg?style=flat
   :target: https://anaconda.org/bioconda/locus_processing
   :alt:   (downloads)
.. |docker_locus_processing| image:: https://quay.io/repository/biocontainers/locus_processing/status
   :target: https://quay.io/repository/biocontainers/locus_processing
.. _`locus_processing/tags`: https://quay.io/repository/biocontainers/locus_processing?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/locus_processing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/locus_processing/README.html