:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbm'
.. highlight: bash

bioconductor-rbm
================

.. conda:recipe:: bioconductor-rbm
   :replaces_section_title:
   :noindex:

   RBM\: a R package for microarray and RNA\-Seq data analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RBM.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rbm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbm/meta.yaml>`_
   :links: biotools: :biotools:`rbm`, doi: :doi:`10.1038/nmeth.3252`

   Use A Resampling\-Based Empirical Bayes Approach to Assess Differential Expression in Two\-Color Microarrays and RNA\-Seq data sets.


.. conda:package:: bioconductor-rbm

   |downloads_bioconductor-rbm| |docker_bioconductor-rbm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-marray: ``>=1.84.0,<1.85.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-rbm

   and update with::

      mamba update bioconductor-rbm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rbm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rbm:<tag>

   (see `bioconductor-rbm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rbm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbm
   :alt:   (downloads)
.. |docker_bioconductor-rbm| image:: https://quay.io/repository/biocontainers/bioconductor-rbm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbm
.. _`bioconductor-rbm/tags`: https://quay.io/repository/biocontainers/bioconductor-rbm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbm";
        var versions = ["1.38.0","1.34.0","1.32.0","1.30.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbm/README.html