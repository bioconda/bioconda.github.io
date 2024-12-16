:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-fastbaps'
.. highlight: bash

r-fastbaps
==========

.. conda:recipe:: r-fastbaps
   :replaces_section_title:
   :noindex:

   A fast approximation to a Dirichlet Process Mixture model \(DPM\) for clustering genetic data

   :homepage: https://github.com/gtonkinhill/fastbaps
   :license: MIT / MIT
   :recipe: /`r-fastbaps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fastbaps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fastbaps/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.1472299`, doi: :doi:`10.1093/nar/gkz361`

   


.. conda:package:: r-fastbaps

   |downloads_r-fastbaps| |docker_r-fastbaps|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.8-4</code>,  <code>1.0.8-3</code>,  <code>1.0.8-2</code>,  <code>1.0.8-1</code>,  <code>1.0.8-0</code>,  <code>1.0.7-0</code>,  <code>1.0.6-1</code>,  <code>1.0.6-0</code>,  <code>1.0.4-0</code>,  </span></summary>
      

      ``1.0.8-4``,  ``1.0.8-3``,  ``1.0.8-2``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-ggtree: ``>=3.14.0,<3.15.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-adegenet: 
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-clusteval: 
   :depends r-doparallel: 
   :depends r-fastcluster: 
   :depends r-genie: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-irlba: 
   :depends r-matrix: 
   :depends r-optparse: 
   :depends r-phytools: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
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

      mamba install r-fastbaps

   and update with::

      mamba update r-fastbaps

  To create a new environment, run::

      mamba create --name myenvname r-fastbaps

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-fastbaps:<tag>

   (see `r-fastbaps/tags`_ for valid values for ``<tag>``)


.. |downloads_r-fastbaps| image:: https://img.shields.io/conda/dn/bioconda/r-fastbaps.svg?style=flat
   :target: https://anaconda.org/bioconda/r-fastbaps
   :alt:   (downloads)
.. |docker_r-fastbaps| image:: https://quay.io/repository/biocontainers/r-fastbaps/status
   :target: https://quay.io/repository/biocontainers/r-fastbaps
.. _`r-fastbaps/tags`: https://quay.io/repository/biocontainers/r-fastbaps?tab=tags


.. raw:: html

    <script>
        var package = "r-fastbaps";
        var versions = ["1.0.8","1.0.8","1.0.8","1.0.8","1.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-fastbaps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-fastbaps/README.html