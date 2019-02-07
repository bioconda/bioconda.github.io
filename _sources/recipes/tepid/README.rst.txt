.. title:: Package Recipe 'tepid'
.. highlight: bash


tepid
=====

.. conda:recipe:: tepid
   :replaces_section_title:

   TEPID uses paired\-end illumina sequencing reads to identify novel TE variants.

   :homepage: https://github.com/ListerLab/TEPID
   :license: GPL
   :recipe: /`tepid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tepid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tepid/meta.yaml>`_

   


.. conda:package:: tepid

   |downloads_tepid| |docker_tepid|

   :versions: 0.8, 0.7

   :depends: :conda:package:`bedtools` ==2.25.0 :conda:package:`bowtie2`  :conda:package:`libgcc`  :conda:package:`nose`  :conda:package:`numpy` ==1.9.2 :conda:package:`pandas`  :conda:package:`pybedtools`  :conda:package:`pysam` <0.9,>0.8 :conda:package:`python` 2.7* :conda:package:`samblaster`  :conda:package:`samtools` ==1.2 :conda:package:`yaha`  :conda:package:`zlib`  

   :required~by: |required_by_tepid|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tepid

   and update with::

      conda update tepid

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tepid


.. |required_by_tepid| conda:required_by:: tepid
.. |downloads_tepid| image:: https://img.shields.io/conda/dn/bioconda/tepid.svg?style=flat
   :alt:   (downloads)
.. |docker_tepid| image:: https://quay.io/repository/biocontainers/tepid/status
   :target: https://quay.io/repository/biocontainers/tepid







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tepid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tepid/README.html

