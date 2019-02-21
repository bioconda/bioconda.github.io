:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-impulsede2'
.. highlight: bash

bioconductor-impulsede2
=======================

.. conda:recipe:: bioconductor-impulsede2
   :replaces_section_title:

   ImpulseDE2 is a differential expression algorithm for longitudinal count data sets which arise in sequencing experiments such as RNA\-seq\, ChIP\-seq\, ATAC\-seq and DNaseI\-seq. ImpulseDE2 is based on a negative binomial noise model with dispersion trend smoothing by DESeq2 and uses the impulse model to constrain the mean expression trajectory of each gene. The impulse model was empirically found to fit global expression changes in cells after environmental and developmental stimuli and is therefore appropriate in most cell biological scenarios. The constraint on the mean expression trajectory prevents overfitting to small expression fluctuations. Secondly\, ImpulseDE2 has higher statistical testing power than generalized linear model\-based differential expression algorithms which fit time as a categorial variable if more than six time points are sampled because of the fixed number of parameters.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ImpulseDE2.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-impulsede2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-impulsede2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-impulsede2/meta.yaml>`_

   


.. conda:package:: bioconductor-impulsede2

   |downloads_bioconductor-impulsede2| |docker_bioconductor-impulsede2|

   :versions: 1.6.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   
   :depends bioconductor-complexheatmap: >=1.20.0,<1.21.0
   
   :depends bioconductor-deseq2: >=1.22.0,<1.23.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-circlize: 
   
   :depends r-cowplot: 
   
   :depends r-ggplot2: 
   
   :depends r-knitr: 
   
   :depends r-matrix: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-impulsede2

   and update with::

      conda update bioconductor-impulsede2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-impulsede2:<tag>

   (see `bioconductor-impulsede2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-impulsede2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-impulsede2.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-impulsede2| image:: https://quay.io/repository/biocontainers/bioconductor-impulsede2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-impulsede2
.. _`bioconductor-impulsede2/tags`: https://quay.io/repository/biocontainers/bioconductor-impulsede2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-impulsede2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-impulsede2/README.html