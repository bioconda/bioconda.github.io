:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-precisetad'
.. highlight: bash

bioconductor-precisetad
=======================

.. conda:recipe:: bioconductor-precisetad
   :replaces_section_title:
   :noindex:

   preciseTAD\: A machine learning framework for precise TAD boundary prediction

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/preciseTAD.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-precisetad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-precisetad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-precisetad/meta.yaml>`_

   preciseTAD provides functions to predict the location of boundaries of topologically associated domains \(TADs\) and chromatin loops at base\-level resolution. As an input\, it takes BED\-formatted genomic coordinates of domain boundaries detected from low\-resolution Hi\-C data\, and coordinates of high\-resolution genomic annotations from ENCODE or other consortia. preciseTAD employs several feature engineering strategies and resampling techniques to address class imbalance\, and trains an optimized random forest model for predicting low\-resolution domain boundaries. Translated on a base\-level\, preciseTAD predicts the probability for each base to be a boundary. Density\-based clustering and scalable partitioning techniques are used to detect precise boundary regions and summit points. Compared with low\-resolution boundaries\, preciseTAD boundaries are highly enriched for CTCF\, RAD21\, SMC3\, and ZNF143 signal and more conserved across cell lines. The pre\-trained model can accurately predict boundaries in another cell line using CTCF\, RAD21\, SMC3\, and ZNF143 annotation data for this cell line.


.. conda:package:: bioconductor-precisetad

   |downloads_bioconductor-precisetad| |docker_bioconductor-precisetad|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-caret: 
   :depends r-cluster: 
   :depends r-dbscan: 
   :depends r-dosnow: 
   :depends r-e1071: 
   :depends r-foreach: 
   :depends r-modelmetrics: 
   :depends r-pbapply: 
   :depends r-proc: 
   :depends r-prroc: 
   :depends r-randomforest: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-precisetad

   and update with::

      conda update bioconductor-precisetad

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-precisetad:<tag>

   (see `bioconductor-precisetad/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-precisetad| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-precisetad.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-precisetad
   :alt:   (downloads)
.. |docker_bioconductor-precisetad| image:: https://quay.io/repository/biocontainers/bioconductor-precisetad/status
   :target: https://quay.io/repository/biocontainers/bioconductor-precisetad
.. _`bioconductor-precisetad/tags`: https://quay.io/repository/biocontainers/bioconductor-precisetad?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-precisetad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-precisetad/README.html