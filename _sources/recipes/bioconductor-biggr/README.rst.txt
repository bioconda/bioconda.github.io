:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biggr'
.. highlight: bash

bioconductor-biggr
==================

.. conda:recipe:: bioconductor-biggr
   :replaces_section_title:
   :noindex:

   Constraint based modeling in R using metabolic reconstruction databases

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BiGGR.html
   :license: file LICENSE
   :recipe: /`bioconductor-biggr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biggr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biggr/meta.yaml>`_

   This package provides an interface to simulate metabolic reconstruction from the BiGG database\(http\:\/\/bigg.ucsd.edu\/\) and other metabolic reconstruction databases. The package facilitates flux balance analysis \(FBA\) and the sampling of feasible flux distributions. Metabolic networks and estimated fluxes can be visualized with hypergraphs.


.. conda:package:: bioconductor-biggr

   |downloads_bioconductor-biggr| |docker_bioconductor-biggr|

   :versions:
      
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``

      

   
   :depends bioconductor-hyperdraw: ``>=1.50.0,<1.51.0``
   :depends bioconductor-hypergraph: ``>=1.70.0,<1.71.0``
   :depends bioconductor-rsbml: ``>=2.56.0,<2.57.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-lim: 
   :depends r-limsolve: 
   :depends r-stringr: 
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

      mamba install bioconductor-biggr

   and update with::

      mamba update bioconductor-biggr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biggr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biggr:<tag>

   (see `bioconductor-biggr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biggr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biggr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biggr
   :alt:   (downloads)
.. |docker_bioconductor-biggr| image:: https://quay.io/repository/biocontainers/bioconductor-biggr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biggr
.. _`bioconductor-biggr/tags`: https://quay.io/repository/biocontainers/bioconductor-biggr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biggr";
        var versions = ["1.34.0","1.30.0","1.28.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biggr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biggr/README.html