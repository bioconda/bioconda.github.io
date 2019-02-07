.. title:: Package Recipe 'pb-assembly'
.. highlight: bash


pb-assembly
===========

.. conda:recipe:: pb-assembly
   :replaces_section_title:

   Meta\-package for Falcon\/Unzip tool\-suite \(originally by Jason Chin\)

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD 3-Clause Clear License
   :recipe: /`pb-assembly <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-assembly>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-assembly/meta.yaml>`_

   


.. conda:package:: pb-assembly

   |downloads_pb-assembly| |docker_pb-assembly|

   :versions: 0.0.4, 0.0.3, 0.0.2, 0.0.1, 0.0.0

   :depends: :conda:package:`bedtools`  :conda:package:`blasr`  :conda:package:`bwa`  :conda:package:`future` >=0.16.0 :conda:package:`genomicconsensus`  :conda:package:`minimap2`  :conda:package:`mummer4`  :conda:package:`nim-falcon`  :conda:package:`numpy`  :conda:package:`openssl` >=1.0.2p,<1.0.3a :conda:package:`pb-dazzler`  :conda:package:`pb-falcon` >=0.2.5 :conda:package:`pbalign`  :conda:package:`pbmm2`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`samtools`  

   :required~by: |required_by_pb-assembly|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pb-assembly

   and update with::

      conda update pb-assembly

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pb-assembly


.. |required_by_pb-assembly| conda:required_by:: pb-assembly
.. |downloads_pb-assembly| image:: https://img.shields.io/conda/dn/bioconda/pb-assembly.svg?style=flat
   :alt:   (downloads)
.. |docker_pb-assembly| image:: https://quay.io/repository/biocontainers/pb-assembly/status
   :target: https://quay.io/repository/biocontainers/pb-assembly







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pb-assembly/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pb-assembly/README.html

