.. title:: Package Recipe 'metavelvet-sl-feature-extraction'
.. highlight: bash


metavelvet-sl-feature-extraction
================================

.. conda:recipe:: metavelvet-sl-feature-extraction
   :replaces_section_title:

   Perl libraries that do feature extraction for metavelvet\-sl

   :homepage: http://metavelvet.dna.bio.keio.ac.jp/MSL.html
   :license: 
   :recipe: /`metavelvet-sl-feature-extraction <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-sl-feature-extraction>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-sl-feature-extraction/meta.yaml>`_

   


.. conda:package:: metavelvet-sl-feature-extraction

   |downloads_metavelvet-sl-feature-extraction| |docker_metavelvet-sl-feature-extraction|

   :versions: 1.0

   :depends: :conda:package:`perl-app-cpanminus`  :conda:package:`perl-module-build`  :conda:package:`perl-threaded`  

   :required~by: |required_by_metavelvet-sl-feature-extraction|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metavelvet-sl-feature-extraction

   and update with::

      conda update metavelvet-sl-feature-extraction

   or use the docker container::

      docker pull quay.io/repository/biocontainers/metavelvet-sl-feature-extraction


.. |required_by_metavelvet-sl-feature-extraction| conda:required_by:: metavelvet-sl-feature-extraction
.. |downloads_metavelvet-sl-feature-extraction| image:: https://img.shields.io/conda/dn/bioconda/metavelvet-sl-feature-extraction.svg?style=flat
   :alt:   (downloads)
.. |docker_metavelvet-sl-feature-extraction| image:: https://quay.io/repository/biocontainers/metavelvet-sl-feature-extraction/status
   :target: https://quay.io/repository/biocontainers/metavelvet-sl-feature-extraction







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metavelvet-sl-feature-extraction/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metavelvet-sl-feature-extraction/README.html

