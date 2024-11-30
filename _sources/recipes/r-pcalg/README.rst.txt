:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pcalg'
.. highlight: bash

r-pcalg
=======

.. conda:recipe:: r-pcalg
   :replaces_section_title:
   :noindex:

   Functions for causal structure learning and causal inference using graphical models. The main algorithms for causal structure learning are PC \(for observational data without hidden variables\)\, FCI and RFCI \(for observational data with hidden variables\)\, and GIES \(for a mix of data from observational studies \(i.e. observational data\) and data from experiments involving interventions \(i.e. interventional data\) without hidden variables\). For causal inference the IDA algorithm\, the Generalized Backdoor Criterion \(GBC\)\, the Generalized Adjustment Criterion \(GAC\) and some related functions are implemented. Functions for incorporating background knowledge are provided.

   :homepage: http://pcalg.r-forge.r-project.org/
   :license: GPL2 / GPL-2
   :recipe: /`r-pcalg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pcalg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pcalg/meta.yaml>`_

   


.. conda:package:: r-pcalg

   |downloads_r-pcalg| |docker_r-pcalg|

   :versions:
      
      

      ``2.6_12-6``,  ``2.6_12-5``,  ``2.6_12-4``,  ``2.6_12-3``,  ``2.6_12-2``,  ``2.6_12-1``,  ``2.6_12-0``

      

   
   :depends bioconductor-graph: 
   :depends bioconductor-rbgl: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-abind: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bdsmatrix: 
   :depends r-bh: 
   :depends r-clue: 
   :depends r-corpcor: 
   :depends r-dagitty: 
   :depends r-fastica: 
   :depends r-ggm: 
   :depends r-igraph: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-robustbase: 
   :depends r-sfsmisc: ``>=1.0_26``
   :depends r-vcd: 
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

      mamba install r-pcalg

   and update with::

      mamba update r-pcalg

  To create a new environment, run::

      mamba create --name myenvname r-pcalg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-pcalg:<tag>

   (see `r-pcalg/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pcalg| image:: https://img.shields.io/conda/dn/bioconda/r-pcalg.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pcalg
   :alt:   (downloads)
.. |docker_r-pcalg| image:: https://quay.io/repository/biocontainers/r-pcalg/status
   :target: https://quay.io/repository/biocontainers/r-pcalg
.. _`r-pcalg/tags`: https://quay.io/repository/biocontainers/r-pcalg?tab=tags


.. raw:: html

    <script>
        var package = "r-pcalg";
        var versions = ["2.6_12","2.6_12","2.6_12","2.6_12","2.6_12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pcalg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pcalg/README.html