:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beer'
.. highlight: bash

bioconductor-beer
=================

.. conda:recipe:: bioconductor-beer
   :replaces_section_title:
   :noindex:

   Bayesian Enrichment Estimation in R

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/beer.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-beer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beer/meta.yaml>`_

   BEER implements a Bayesian model for analyzing phage\-immunoprecipitation sequencing \(PhIP\-seq\) data. Given a PhIPData object\, BEER returns posterior probabilities of enriched antibody responses\, point estimates for the relative fold\-change in comparison to negative control samples\, and more. Additionally\, BEER provides a convenient implementation for using edgeR to identify enriched antibody responses.


.. conda:package:: bioconductor-beer

   |downloads_bioconductor-beer| |docker_bioconductor-beer|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-phipdata: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-progressr: 
   :depends r-rjags: 
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

      mamba install bioconductor-beer

   and update with::

      mamba update bioconductor-beer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-beer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beer:<tag>

   (see `bioconductor-beer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beer
   :alt:   (downloads)
.. |docker_bioconductor-beer| image:: https://quay.io/repository/biocontainers/bioconductor-beer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beer
.. _`bioconductor-beer/tags`: https://quay.io/repository/biocontainers/bioconductor-beer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-beer";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beer/README.html