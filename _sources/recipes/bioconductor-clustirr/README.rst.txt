:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clustirr'
.. highlight: bash

bioconductor-clustirr
=====================

.. conda:recipe:: bioconductor-clustirr
   :replaces_section_title:
   :noindex:

   Clustering of immune receptor repertoires

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ClustIRR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-clustirr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustirr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustirr/meta.yaml>`_

   ClustIRR analyzes repertoires of B\- and T\-cell receptors. It starts by identifying communities of immune receptors with similar specificities\, based on the sequences of their complementarity\-determining regions \(CDRs\). Next\, it employs a Bayesian probabilistic models to quantify differential community occupancy \(DCO\) between repertoires\, allowing the identification of expanding or contracting communities in response to e.g. infection or cancer treatment.


.. conda:package:: bioconductor-clustirr

   |downloads_bioconductor-clustirr| |docker_bioconductor-clustirr|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-pwalign: ``>=1.2.0,<1.3.0``
   :depends bioconductor-pwalign: ``>=1.2.0,<1.3.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bh: ``>=1.66.0``
   :depends r-blaster: 
   :depends r-future: 
   :depends r-future.apply: 
   :depends r-igraph: 
   :depends r-rcpp: ``>=0.12.0``
   :depends r-rcppeigen: ``>=0.3.3.3.0``
   :depends r-rcppparallel: ``>=5.0.1``
   :depends r-reshape2: 
   :depends r-rstan: ``>=2.18.1``
   :depends r-rstantools: ``>=2.4.0``
   :depends r-stanheaders: ``>=2.18.0``
   :depends r-stringdist: 
   :depends r-visnetwork: 
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

      mamba install bioconductor-clustirr

   and update with::

      mamba update bioconductor-clustirr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-clustirr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clustirr:<tag>

   (see `bioconductor-clustirr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clustirr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clustirr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clustirr
   :alt:   (downloads)
.. |docker_bioconductor-clustirr| image:: https://quay.io/repository/biocontainers/bioconductor-clustirr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clustirr
.. _`bioconductor-clustirr/tags`: https://quay.io/repository/biocontainers/bioconductor-clustirr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clustirr";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clustirr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clustirr/README.html