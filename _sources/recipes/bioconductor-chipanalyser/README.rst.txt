:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipanalyser'
.. highlight: bash

bioconductor-chipanalyser
=========================

.. conda:recipe:: bioconductor-chipanalyser
   :replaces_section_title:

   Based on a statistical thermodynamic framework\, ChIPanalyser tries to produce ChIP\-seq like profile. The model relies on four consideration\: TF binding sites can be scored using a Position weight Matrix\, DNA accessibility plays a role in Transcription Factor binding\, binding profiles are dependant on the number of transcription factors bound to DNA and finally binding energy \(another way of describing PWM\'s\) or binding specificity should be modulated \(hence the introduction of a binding specificity modulator\). The end result of ChIPanalyser is to produce profiles simulating real ChIP\-seq profile and provide accuracy measurements of these predicted profiles after being compared to real ChIP\-seq data. The ultimate goal is to produce ChIP\-seq like profiles predicting ChIP\-seq like profile to circumvent the need to produce costly ChIP\-seq experiments.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/ChIPanalyser.html
   :license: GPL-3
   :recipe: /`bioconductor-chipanalyser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipanalyser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipanalyser/meta.yaml>`_

   


.. conda:package:: bioconductor-chipanalyser

   |downloads_bioconductor-chipanalyser| |docker_bioconductor-chipanalyser|

   :versions: 1.8.0-0, 1.6.0-1, 1.4.0-0
   
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-bsgenome: >=1.54.0,<1.55.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-rtracklayer: >=1.46.0,<1.47.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-biocmanager: 
   :depends r-rcpproll: 
   :depends r-rocr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chipanalyser

   and update with::

      conda update bioconductor-chipanalyser

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chipanalyser:<tag>

   (see `bioconductor-chipanalyser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipanalyser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipanalyser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipanalyser
   :alt:   (downloads)
.. |docker_bioconductor-chipanalyser| image:: https://quay.io/repository/biocontainers/bioconductor-chipanalyser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipanalyser
.. _`bioconductor-chipanalyser/tags`: https://quay.io/repository/biocontainers/bioconductor-chipanalyser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipanalyser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipanalyser/README.html