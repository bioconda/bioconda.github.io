:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-saige'
.. highlight: bash

r-saige
=======

.. conda:recipe:: r-saige
   :replaces_section_title:
   :noindex:

   SAIGE is an R package with Scalable and Accurate Implementation of Generalized mixed model \(Chen\, H. et al. 2016\)

   :homepage: https://github.com/saigegit/SAIGE
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-saige <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-saige>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-saige/meta.yaml>`_

   SAIGE is an R package with Scalable and Accurate Implementation of Generalized
   mixed model \(Chen\, H. et al. 2016\). It accounts for sample relatedness and is
   feasible for genetic association tests in large cohorts and biobanks \(N \> 400000\).



.. conda:package:: r-saige

   |downloads_r-saige| |docker_r-saige|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-2</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.9-3</code>,  <code>1.1.9-2</code>,  <code>1.1.9-1</code>,  <code>1.1.9-0</code>,  <code>1.1.8-0</code>,  </span></summary>
      

      ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.9-3``,  ``1.1.9-2``,  ``1.1.9-1``,  ``1.1.9-0``,  ``1.1.8-0``,  ``0.45.0-5``,  ``0.45.0-4``,  ``0.45.0-3``,  ``0.45.0-2``,  ``0.45.0-0``,  ``0.44.6.5-3``,  ``0.44.6.5-2``,  ``0.44.6.5-1``,  ``0.44.6.5-0``,  ``0.44.6.2-0``,  ``0.44.6.1-0``,  ``0.44.6-0``,  ``0.44.5-1``,  ``0.44.5-0``,  ``0.44.2-0``,  ``0.44.1-0``,  ``0.44.0-0``,  ``0.43.3-0``,  ``0.43.0-0``,  ``0.42.1-1``,  ``0.42.1-0``,  ``0.42.0-1``,  ``0.42.0-0``,  ``0.39.0-1``,  ``0.39.0-0``,  ``0.35.8.8-2``,  ``0.35.8.8-1``,  ``0.35.8.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dbplyr: 
   :depends r-dplyr: 
   :depends r-matrix: 
   :depends r-optparse: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rcppeigen: 
   :depends r-rcppparallel: 
   :depends r-rhpcblasctl: 
   :depends r-rsqlite: 
   :depends r-skat: 
   :depends r-spatest: 
   :depends savvy: 
   :depends zstd: ``>=1.5.6,<1.6.0a0``
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

      mamba install r-saige

   and update with::

      mamba update r-saige

  To create a new environment, run::

      mamba create --name myenvname r-saige

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-saige:<tag>

   (see `r-saige/tags`_ for valid values for ``<tag>``)


.. |downloads_r-saige| image:: https://img.shields.io/conda/dn/bioconda/r-saige.svg?style=flat
   :target: https://anaconda.org/bioconda/r-saige
   :alt:   (downloads)
.. |docker_r-saige| image:: https://quay.io/repository/biocontainers/r-saige/status
   :target: https://quay.io/repository/biocontainers/r-saige
.. _`r-saige/tags`: https://quay.io/repository/biocontainers/r-saige?tab=tags


.. raw:: html

    <script>
        var package = "r-saige";
        var versions = ["1.3.1","1.3.1","1.3.1","1.2.0","1.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-saige/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-saige/README.html