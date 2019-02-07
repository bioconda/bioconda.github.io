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

   :versions: 1.0

   :depends: :conda:package:`dwgsim`  :conda:package:`libgcc`  :conda:package:`libsvm`  :conda:package:`metaphlan2`  :conda:package:`metavelvet-sl`  :conda:package:`metavelvet-sl-feature-extraction`  :conda:package:`perl` 5.22.0* :conda:package:`perl-app-cpanminus`  :conda:package:`perl-module-build`  :conda:package:`velvet`  :conda:package:`zlib`  

   :required~by: |required_by_metavelvet-sl-pipeline|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metavelvet-sl-pipeline

   and update with::

      conda update metavelvet-sl-pipeline

   or use the docker container::

      docker pull quay.io/repository/biocontainers/metavelvet-sl-pipeline


.. |required_by_metavelvet-sl-pipeline| conda:required_by:: metavelvet-sl-pipeline
.. |downloads_metavelvet-sl-pipeline| image:: https://img.shields.io/conda/dn/bioconda/metavelvet-sl-pipeline.svg?style=flat
   :alt:   (downloads)
.. |docker_metavelvet-sl-pipeline| image:: https://quay.io/repository/biocontainers/metavelvet-sl-pipeline/status
   :target: https://quay.io/repository/biocontainers/metavelvet-sl-pipeline







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metavelvet-sl-pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metavelvet-sl-pipeline/README.html

