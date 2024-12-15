:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lbe'
.. highlight: bash

bioconductor-lbe
================

.. conda:recipe:: bioconductor-lbe
   :replaces_section_title:
   :noindex:

   Estimation of the false discovery rate.

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/LBE.html
   :license: GPL-2
   :recipe: /`bioconductor-lbe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lbe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lbe/meta.yaml>`_
   :links: biotools: :biotools:`lbe`, doi: :doi:`10.1093/bioinformatics/bti063`

   LBE is an efficient procedure for estimating the proportion of true null hypotheses\, the false discovery rate \(and so the q\-values\) in the framework of estimating procedures based on the marginal distribution of the p\-values without assumption for the alternative hypothesis.


.. conda:package:: bioconductor-lbe

   |downloads_bioconductor-lbe| |docker_bioconductor-lbe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.74.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-1</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  </span></summary>
      

      ``1.74.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-lbe

   and update with::

      mamba update bioconductor-lbe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lbe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lbe:<tag>

   (see `bioconductor-lbe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lbe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lbe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lbe
   :alt:   (downloads)
.. |docker_bioconductor-lbe| image:: https://quay.io/repository/biocontainers/bioconductor-lbe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lbe
.. _`bioconductor-lbe/tags`: https://quay.io/repository/biocontainers/bioconductor-lbe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lbe";
        var versions = ["1.74.0","1.70.0","1.68.0","1.66.0","1.62.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lbe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lbe/README.html