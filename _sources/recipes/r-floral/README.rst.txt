:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-floral'
.. highlight: bash

r-floral
========

.. conda:recipe:: r-floral
   :replaces_section_title:
   :noindex:

   Log\-ratio Lasso regression for continuous\, binary\, and survival outcomes with \(longitudinal\) compositional features. See Fei and others \(2024\) \<doi\:10.1016\/j.crmeth.2024.100899\>.

   :homepage: https://vdblab.github.io/FLORAL/
   :license: GPL-3.0-or-later
   :recipe: /`r-floral <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-floral>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-floral/meta.yaml>`_

   


.. conda:package:: r-floral

   |downloads_r-floral| |docker_r-floral|

   :versions:
      
      

      ``0.4.0-0``

      

   
   :depends bioconductor-phyloseq: 
   :depends bioconductor-survcomp: 
   :depends r-ast2ast: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-caret: 
   :depends r-doparallel: 
   :depends r-dorng: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-msm: 
   :depends r-mvtnorm: 
   :depends r-rcpp: ``>=1.0.9``
   :depends r-rcpparmadillo: 
   :depends r-rcppprogress: 
   :depends r-reshape: 
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

      mamba install r-floral

   and update with::

      mamba update r-floral

  To create a new environment, run::

      mamba create --name myenvname r-floral

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-floral:<tag>

   (see `r-floral/tags`_ for valid values for ``<tag>``)


.. |downloads_r-floral| image:: https://img.shields.io/conda/dn/bioconda/r-floral.svg?style=flat
   :target: https://anaconda.org/bioconda/r-floral
   :alt:   (downloads)
.. |docker_r-floral| image:: https://quay.io/repository/biocontainers/r-floral/status
   :target: https://quay.io/repository/biocontainers/r-floral
.. _`r-floral/tags`: https://quay.io/repository/biocontainers/r-floral?tab=tags


.. raw:: html

    <script>
        var package = "r-floral";
        var versions = ["0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-floral/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-floral/README.html