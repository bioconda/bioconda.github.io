.. title:: Package Recipe 'bamm'
.. highlight: bash


bamm
====

.. conda:recipe:: bamm
   :replaces_section_title:

   Metagenomics\-focused BAM file manipulation

   :homepage: https://github.com/Ecogenomics/BamM
   :license: LGPL-3.0
   :recipe: /`bamm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamm/meta.yaml>`_

   


.. conda:package:: bamm

   |downloads_bamm| |docker_bamm|

   :versions: 1.7.3

   :depends: :conda:package:`bwa` ==0.7.12 :conda:package:`libgcc`  :conda:package:`numpy`  :conda:package:`python` >=2.7,<3 :conda:package:`samtools` ==1.2 :conda:package:`zlib`  

   :required~by: |required_by_bamm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bamm

   and update with::

      conda update bamm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bamm


.. |required_by_bamm| conda:required_by:: bamm
.. |downloads_bamm| image:: https://img.shields.io/conda/dn/bioconda/bamm.svg?style=flat
   :alt:   (downloads)
.. |docker_bamm| image:: https://quay.io/repository/biocontainers/bamm/status
   :target: https://quay.io/repository/biocontainers/bamm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamm/README.html

