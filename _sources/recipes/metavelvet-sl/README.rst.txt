.. title:: Package Recipe 'metavelvet-sl'
.. highlight: bash


metavelvet-sl
=============

.. conda:recipe:: metavelvet-sl
   :replaces_section_title:

   MetaVelvet\-SL \: An extension of Velvet assembler to de novo metagenomic assembler utilizing supervised learning

   :homepage: http://metavelvet.dna.bio.keio.ac.jp/MSL.html
   :license: 
   :recipe: /`metavelvet-sl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-sl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-sl/meta.yaml>`_

   


.. conda:package:: metavelvet-sl

   |downloads_metavelvet-sl| |docker_metavelvet-sl|

   :versions: 1.0

   :depends: :conda:package:`libgcc`  :conda:package:`metavelvet-sl-feature-extraction`  :conda:package:`perl-app-cpanminus`  :conda:package:`perl-module-build`  :conda:package:`perl-threaded`  :conda:package:`zlib`  

   :required~by: |required_by_metavelvet-sl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metavelvet-sl

   and update with::

      conda update metavelvet-sl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/metavelvet-sl


.. |required_by_metavelvet-sl| conda:required_by:: metavelvet-sl
.. |downloads_metavelvet-sl| image:: https://img.shields.io/conda/dn/bioconda/metavelvet-sl.svg?style=flat
   :alt:   (downloads)
.. |docker_metavelvet-sl| image:: https://quay.io/repository/biocontainers/metavelvet-sl/status
   :target: https://quay.io/repository/biocontainers/metavelvet-sl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metavelvet-sl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metavelvet-sl/README.html

