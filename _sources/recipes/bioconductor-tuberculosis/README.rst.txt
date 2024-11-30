:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tuberculosis'
.. highlight: bash

bioconductor-tuberculosis
=========================

.. conda:recipe:: bioconductor-tuberculosis
   :replaces_section_title:
   :noindex:

   Tuberculosis Gene Expression Data for Machine Learning

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/tuberculosis.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tuberculosis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tuberculosis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tuberculosis/meta.yaml>`_

   The tuberculosis R\/Bioconductor package features tuberculosis gene expression data for machine learning. All human samples from GEO that did not come from cell lines\, were not taken postmortem\, and did not feature recombination have been included. The package has more than 10\,000 samples from both microarray and sequencing studies that have been processed from raw data through a hyper\-standardized\, reproducible pipeline.


.. conda:package:: bioconductor-tuberculosis

   |downloads_bioconductor-tuberculosis| |docker_bioconductor-tuberculosis|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-tuberculosis

   and update with::

      mamba update bioconductor-tuberculosis

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tuberculosis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tuberculosis:<tag>

   (see `bioconductor-tuberculosis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tuberculosis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tuberculosis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tuberculosis
   :alt:   (downloads)
.. |docker_bioconductor-tuberculosis| image:: https://quay.io/repository/biocontainers/bioconductor-tuberculosis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tuberculosis
.. _`bioconductor-tuberculosis/tags`: https://quay.io/repository/biocontainers/bioconductor-tuberculosis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tuberculosis";
        var versions = ["1.8.0","1.6.0","1.4.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tuberculosis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tuberculosis/README.html