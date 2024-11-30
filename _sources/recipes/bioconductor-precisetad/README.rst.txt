:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-precisetad'
.. highlight: bash

bioconductor-precisetad
=======================

.. conda:recipe:: bioconductor-precisetad
   :replaces_section_title:
   :noindex:

   preciseTAD\: A machine learning framework for precise TAD boundary prediction

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/preciseTAD.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-precisetad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-precisetad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-precisetad/meta.yaml>`_

   preciseTAD provides functions to predict the location of boundaries of topologically associated domains \(TADs\) and chromatin loops at base\-level resolution. As an input\, it takes BED\-formatted genomic coordinates of domain boundaries detected from low\-resolution Hi\-C data\, and coordinates of high\-resolution genomic annotations from ENCODE or other consortia. preciseTAD employs several feature engineering strategies and resampling techniques to address class imbalance\, and trains an optimized random forest model for predicting low\-resolution domain boundaries. Translated on a base\-level\, preciseTAD predicts the probability for each base to be a boundary. Density\-based clustering and scalable partitioning techniques are used to detect precise boundary regions and summit points. Compared with low\-resolution boundaries\, preciseTAD boundaries are highly enriched for CTCF\, RAD21\, SMC3\, and ZNF143 signal and more conserved across cell lines. The pre\-trained model can accurately predict boundaries in another cell line using CTCF\, RAD21\, SMC3\, and ZNF143 annotation data for this cell line.


.. conda:package:: bioconductor-precisetad

   |downloads_bioconductor-precisetad| |docker_bioconductor-precisetad|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rcgh: ``>=1.32.0,<1.33.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-cluster: 
   :depends r-dbscan: 
   :depends r-dosnow: 
   :depends r-e1071: 
   :depends r-foreach: 
   :depends r-gtools: 
   :depends r-modelmetrics: 
   :depends r-pbapply: 
   :depends r-proc: 
   :depends r-prroc: 
   :depends r-randomforest: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-precisetad

   and update with::

      mamba update bioconductor-precisetad

  To create a new environment, run::

      mamba create --name myenvname bioconductor-precisetad

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-precisetad:<tag>

   (see `bioconductor-precisetad/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-precisetad| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-precisetad.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-precisetad
   :alt:   (downloads)
.. |docker_bioconductor-precisetad| image:: https://quay.io/repository/biocontainers/bioconductor-precisetad/status
   :target: https://quay.io/repository/biocontainers/bioconductor-precisetad
.. _`bioconductor-precisetad/tags`: https://quay.io/repository/biocontainers/bioconductor-precisetad?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-precisetad";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-precisetad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-precisetad/README.html