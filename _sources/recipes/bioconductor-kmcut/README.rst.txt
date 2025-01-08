:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kmcut'
.. highlight: bash

bioconductor-kmcut
==================

.. conda:recipe:: bioconductor-kmcut
   :replaces_section_title:
   :noindex:

   Optimized Kaplan Meier analysis and identification and validation of prognostic biomarkers

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/kmcut.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-kmcut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kmcut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kmcut/meta.yaml>`_

   The purpose of the package is to identify prognostic biomarkers and an optimal numeric cutoff for each biomarker that can be used to stratify a group of test subjects \(samples\) into two sub\-groups with significantly different survival \(better vs. worse\). The package was developed for the analysis of gene expression data\, such as RNA\-seq. However\, it can be used with any quantitative variable that has a sufficiently large proportion of unique values.


.. conda:package:: bioconductor-kmcut

   |downloads_bioconductor-kmcut| |docker_bioconductor-kmcut|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-pracma: 
   :depends r-survival: 
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

      mamba install bioconductor-kmcut

   and update with::

      mamba update bioconductor-kmcut

  To create a new environment, run::

      mamba create --name myenvname bioconductor-kmcut

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-kmcut:<tag>

   (see `bioconductor-kmcut/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-kmcut| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kmcut.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kmcut
   :alt:   (downloads)
.. |docker_bioconductor-kmcut| image:: https://quay.io/repository/biocontainers/bioconductor-kmcut/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kmcut
.. _`bioconductor-kmcut/tags`: https://quay.io/repository/biocontainers/bioconductor-kmcut?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-kmcut";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kmcut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kmcut/README.html