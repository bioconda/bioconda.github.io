:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metavelvet-sl-pipeline'
.. highlight: bash

metavelvet-sl-pipeline
======================

.. conda:recipe:: metavelvet-sl-pipeline
   :replaces_section_title:

   Perl libraries that run the full pipeline for metavelvet\-sl

   :homepage: http://metavelvet.dna.bio.keio.ac.jp/MSL.html
   :license: 
   :recipe: /`metavelvet-sl-pipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-sl-pipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-sl-pipeline/meta.yaml>`_

   


.. conda:package:: metavelvet-sl-pipeline

   |downloads_metavelvet-sl-pipeline| |docker_metavelvet-sl-pipeline|

   :versions: 1.0-0
   
   :depends dwgsim: 
   :depends libgcc: 
   :depends libsvm: 
   :depends metaphlan2: 
   :depends metavelvet-sl: 
   :depends metavelvet-sl-feature-extraction: 
   :depends perl: 5.22.0*
   :depends perl-app-cpanminus: 
   :depends perl-module-build: 
   :depends velvet: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metavelvet-sl-pipeline

   and update with::

      conda update metavelvet-sl-pipeline

   or use the docker container::

      docker pull quay.io/biocontainers/metavelvet-sl-pipeline:<tag>

   (see `metavelvet-sl-pipeline/tags`_ for valid values for ``<tag>``)


.. |downloads_metavelvet-sl-pipeline| image:: https://img.shields.io/conda/dn/bioconda/metavelvet-sl-pipeline.svg?style=flat
   :alt:   (downloads)
.. |docker_metavelvet-sl-pipeline| image:: https://quay.io/repository/biocontainers/metavelvet-sl-pipeline/status
   :target: https://quay.io/repository/biocontainers/metavelvet-sl-pipeline
.. _`metavelvet-sl-pipeline/tags`: https://quay.io/repository/biocontainers/metavelvet-sl-pipeline?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metavelvet-sl-pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metavelvet-sl-pipeline/README.html