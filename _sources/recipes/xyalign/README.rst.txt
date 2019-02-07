.. title:: Package Recipe 'xyalign'
.. highlight: bash


xyalign
=======

.. conda:recipe:: xyalign
   :replaces_section_title:

   Command line tools and python library to infer ploidy\, correct for sex chromosome complement\, and work with NGS data

   :homepage: https://github.com/WilsonSayresLab/XYalign
   :license: GPL / GPL-3.0
   :recipe: /`xyalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xyalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xyalign/meta.yaml>`_

   


.. conda:package:: xyalign

   |downloads_xyalign| |docker_xyalign|

   :versions: 1.1.5, 1.1.4, 1.1.3, 1.0.0

   :depends: :conda:package:`bbmap`  :conda:package:`bedtools`  :conda:package:`bwa`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`platypus-variant`  :conda:package:`pybedtools`  :conda:package:`pysam`  :conda:package:`python` <3 :conda:package:`sambamba`  :conda:package:`samtools`  :conda:package:`scipy`  

   :required~by: |required_by_xyalign|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xyalign

   and update with::

      conda update xyalign

   or use the docker container::

      docker pull quay.io/repository/biocontainers/xyalign


.. |required_by_xyalign| conda:required_by:: xyalign
.. |downloads_xyalign| image:: https://img.shields.io/conda/dn/bioconda/xyalign.svg?style=flat
   :alt:   (downloads)
.. |docker_xyalign| image:: https://quay.io/repository/biocontainers/xyalign/status
   :target: https://quay.io/repository/biocontainers/xyalign







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xyalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xyalign/README.html

