:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mmuphin'
.. highlight: bash

bioconductor-mmuphin
====================

.. conda:recipe:: bioconductor-mmuphin
   :replaces_section_title:
   :noindex:

   Meta\-analysis Methods with Uniform Pipeline for Heterogeneity in Microbiome Studies

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MMUPHin.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-mmuphin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmuphin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmuphin/meta.yaml>`_

   MMUPHin is an R package for meta\-analysis tasks of microbiome cohorts. It has function interfaces for\: a\) covariate\-controlled batch\- and cohort effect adjustment\, b\) meta\-analysis differential abundance testing\, c\) meta\-analysis unsupervised discrete structure \(clustering\) discovery\, and d\) meta\-analysis unsupervised continuous structure discovery.


.. conda:package:: bioconductor-mmuphin

   |downloads_bioconductor-mmuphin| |docker_bioconductor-mmuphin|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-maaslin2: ``>=1.16.0,<1.17.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-fpc: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-metafor: 
   :depends r-stringr: 
   :depends r-tidyr: 
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

      mamba install bioconductor-mmuphin

   and update with::

      mamba update bioconductor-mmuphin

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mmuphin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mmuphin:<tag>

   (see `bioconductor-mmuphin/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mmuphin| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mmuphin.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mmuphin
   :alt:   (downloads)
.. |docker_bioconductor-mmuphin| image:: https://quay.io/repository/biocontainers/bioconductor-mmuphin/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mmuphin
.. _`bioconductor-mmuphin/tags`: https://quay.io/repository/biocontainers/bioconductor-mmuphin?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mmuphin";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mmuphin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mmuphin/README.html