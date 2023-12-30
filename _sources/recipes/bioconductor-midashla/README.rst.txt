:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-midashla'
.. highlight: bash

bioconductor-midashla
=====================

.. conda:recipe:: bioconductor-midashla
   :replaces_section_title:
   :noindex:

   R package for immunogenomics data handling and association analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/midasHLA.html
   :license: MIT + file LICENCE
   :recipe: /`bioconductor-midashla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-midashla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-midashla/meta.yaml>`_

   MiDAS is a R package for immunogenetics data transformation and statistical analysis. MiDAS accepts input data in the form of HLA alleles and KIR types\, and can transform it into biologically meaningful variables\, enabling HLA amino acid fine mapping\, analyses of HLA evolutionary divergence\, KIR gene presence\, as well as validated HLA\-KIR interactions. Further\, it allows comprehensive statistical association analysis workflows with phenotypes of diverse measurement scales. MiDAS closes a gap between the inference of immunogenetic variation and its efficient utilization to make relevant discoveries related to T cell\, Natural Killer cell\, and disease biology.


.. conda:package:: bioconductor-midashla

   |downloads_bioconductor-midashla| |docker_bioconductor-midashla|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-assertthat: ``>=0.2.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-broom: ``>=0.5.1``
   :depends r-dplyr: ``>=0.8.0.1``
   :depends r-formattable: ``>=0.2.0.1``
   :depends r-hardyweinberg: ``>=1.6.3``
   :depends r-kableextra: ``>=1.1.0``
   :depends r-knitr: ``>=1.21``
   :depends r-magrittr: ``>=1.5``
   :depends r-qdaptools: ``>=1.3.3``
   :depends r-rlang: ``>=0.3.1``
   :depends r-stringi: ``>=1.2.4``
   :depends r-tibble: ``>=2.0.1``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-midashla

   and update with::

      mamba update bioconductor-midashla

  To create a new environment, run::

      mamba create --name myenvname bioconductor-midashla

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-midashla:<tag>

   (see `bioconductor-midashla/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-midashla| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-midashla.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-midashla
   :alt:   (downloads)
.. |docker_bioconductor-midashla| image:: https://quay.io/repository/biocontainers/bioconductor-midashla/status
   :target: https://quay.io/repository/biocontainers/bioconductor-midashla
.. _`bioconductor-midashla/tags`: https://quay.io/repository/biocontainers/bioconductor-midashla?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-midashla";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-midashla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-midashla/README.html