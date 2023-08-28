:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-openstats'
.. highlight: bash

bioconductor-openstats
======================

.. conda:recipe:: bioconductor-openstats
   :replaces_section_title:
   :noindex:

   A Robust and Scalable Software Package for Reproducible Analysis of High\-Throughput genotype\-phenotype association

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/OpenStats.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-openstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-openstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-openstats/meta.yaml>`_

   Package contains several methods for statistical analysis of genotype to phenotype association in high\-throughput screening pipelines.


.. conda:package:: bioconductor-openstats

   |downloads_bioconductor-openstats| |docker_bioconductor-openstats|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.2-0``

      

   
   :depends r-aiccmodavg: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-car: 
   :depends r-hmisc: 
   :depends r-jsonlite: 
   :depends r-knitr: 
   :depends r-mass: 
   :depends r-nlme: 
   :depends r-rlist: 
   :depends r-summarytools: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-openstats

   and update with::

      mamba update bioconductor-openstats

  To create a new environment, run::

      mamba create --name myenvname bioconductor-openstats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-openstats:<tag>

   (see `bioconductor-openstats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-openstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-openstats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-openstats
   :alt:   (downloads)
.. |docker_bioconductor-openstats| image:: https://quay.io/repository/biocontainers/bioconductor-openstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-openstats
.. _`bioconductor-openstats/tags`: https://quay.io/repository/biocontainers/bioconductor-openstats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-openstats";
        var versions = ["1.12.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-openstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-openstats/README.html