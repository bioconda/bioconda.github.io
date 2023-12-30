:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cimice'
.. highlight: bash

bioconductor-cimice
===================

.. conda:recipe:: bioconductor-cimice
   :replaces_section_title:
   :noindex:

   CIMICE\-R\: \(Markov\) Chain Method to Inferr Cancer Evolution

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CIMICE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cimice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cimice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cimice/meta.yaml>`_

   CIMICE is a tool in the field of tumor phylogenetics and its goal is to build a Markov Chain \(called Cancer Progression Markov Chain\, CPMC\) in order to model tumor subtypes evolution. The input of CIMICE is a Mutational Matrix\, so a boolean matrix representing altered genes in a collection of samples. These samples are assumed to be obtained with single\-cell DNA analysis techniques and the tool is specifically written to use the peculiarities of this data for the CMPC construction.


.. conda:package:: bioconductor-cimice

   |downloads_bioconductor-cimice| |docker_bioconductor-cimice|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-maftools: ``>=2.18.0,<2.19.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-expm: 
   :depends r-ggcorrplot: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-glue: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-networkd3: 
   :depends r-purrr: 
   :depends r-tidygraph: 
   :depends r-tidyr: 
   :depends r-visnetwork: 
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

      mamba install bioconductor-cimice

   and update with::

      mamba update bioconductor-cimice

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cimice

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cimice:<tag>

   (see `bioconductor-cimice/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cimice| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cimice.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cimice
   :alt:   (downloads)
.. |docker_bioconductor-cimice| image:: https://quay.io/repository/biocontainers/bioconductor-cimice/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cimice
.. _`bioconductor-cimice/tags`: https://quay.io/repository/biocontainers/bioconductor-cimice?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cimice";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cimice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cimice/README.html