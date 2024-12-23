:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytofqc'
.. highlight: bash

bioconductor-cytofqc
====================

.. conda:recipe:: bioconductor-cytofqc
   :replaces_section_title:
   :noindex:

   Labels normalized cells for CyTOF data and assigns probabilities for each label

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/cytofQC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cytofqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytofqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytofqc/meta.yaml>`_

   cytofQC is a package for initial cleaning of CyTOF data. It uses a semi\-supervised approach for labeling cells with their most likely data type \(bead\, doublet\, debris\, dead\) and the probability that they belong to each label type. This package does not remove data from the dataset\, but provides labels and information to aid the data user in cleaning their data. Our algorithm is able to distinguish between doublets and large cells.


.. conda:package:: bioconductor-cytofqc

   |downloads_bioconductor-cytofqc| |docker_bioconductor-cytofqc|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-catalyst: ``>=1.30.0,<1.31.0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-e1071: 
   :depends r-eztune: 
   :depends r-gbm: 
   :depends r-ggplot2: 
   :depends r-hrbrthemes: 
   :depends r-matrixstats: 
   :depends r-randomforest: 
   :depends r-rmarkdown: 
   :depends r-ssc: 
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

      mamba install bioconductor-cytofqc

   and update with::

      mamba update bioconductor-cytofqc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cytofqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cytofqc:<tag>

   (see `bioconductor-cytofqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cytofqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytofqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytofqc
   :alt:   (downloads)
.. |docker_bioconductor-cytofqc| image:: https://quay.io/repository/biocontainers/bioconductor-cytofqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytofqc
.. _`bioconductor-cytofqc/tags`: https://quay.io/repository/biocontainers/bioconductor-cytofqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytofqc";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytofqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytofqc/README.html