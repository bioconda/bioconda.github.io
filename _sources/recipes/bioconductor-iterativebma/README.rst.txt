:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iterativebma'
.. highlight: bash

bioconductor-iterativebma
=========================

.. conda:recipe:: bioconductor-iterativebma
   :replaces_section_title:
   :noindex:

   The Iterative Bayesian Model Averaging \(BMA\) algorithm

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/iterativeBMA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-iterativebma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iterativebma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iterativebma/meta.yaml>`_
   :links: biotools: :biotools:`iterativebma`, doi: :doi:`10.1186/gb-2008-9-7-r118`

   The iterative Bayesian Model Averaging \(BMA\) algorithm is a variable selection and classification algorithm with an application of classifying 2\-class microarray samples\, as described in Yeung\, Bumgarner and Raftery \(Bioinformatics 2005\, 21\: 2394\-2402\).


.. conda:package:: bioconductor-iterativebma

   |downloads_bioconductor-iterativebma| |docker_bioconductor-iterativebma|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.64.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  </span></summary>
      

      ``1.64.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bma: 
   :depends r-leaps: 
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

      mamba install bioconductor-iterativebma

   and update with::

      mamba update bioconductor-iterativebma

  To create a new environment, run::

      mamba create --name myenvname bioconductor-iterativebma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iterativebma:<tag>

   (see `bioconductor-iterativebma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iterativebma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iterativebma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iterativebma
   :alt:   (downloads)
.. |docker_bioconductor-iterativebma| image:: https://quay.io/repository/biocontainers/bioconductor-iterativebma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iterativebma
.. _`bioconductor-iterativebma/tags`: https://quay.io/repository/biocontainers/bioconductor-iterativebma?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iterativebma";
        var versions = ["1.64.0","1.60.0","1.58.0","1.56.0","1.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iterativebma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iterativebma/README.html