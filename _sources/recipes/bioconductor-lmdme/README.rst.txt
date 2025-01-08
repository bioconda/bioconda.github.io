:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lmdme'
.. highlight: bash

bioconductor-lmdme
==================

.. conda:recipe:: bioconductor-lmdme
   :replaces_section_title:
   :noindex:

   Linear Model decomposition for Designed Multivariate Experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/lmdme.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-lmdme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lmdme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lmdme/meta.yaml>`_
   :links: biotools: :biotools:`lmdme`

   linear ANOVA decomposition of Multivariate Designed Experiments implementation based on limma lmFit. Features\: i\)Flexible formula type interface\, ii\) Fast limma based implementation\, iii\) p\-values for each estimated coefficient levels in each factor\, iv\) F values for factor effects and v\) plotting functions for PCA and PLS.


.. conda:package:: bioconductor-lmdme

   |downloads_bioconductor-lmdme| |docker_bioconductor-lmdme|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-2</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-2``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-stemhypoxia: ``>=1.42.0,<1.43.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-pls: 
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

      mamba install bioconductor-lmdme

   and update with::

      mamba update bioconductor-lmdme

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lmdme

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lmdme:<tag>

   (see `bioconductor-lmdme/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lmdme| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lmdme.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lmdme
   :alt:   (downloads)
.. |docker_bioconductor-lmdme| image:: https://quay.io/repository/biocontainers/bioconductor-lmdme/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lmdme
.. _`bioconductor-lmdme/tags`: https://quay.io/repository/biocontainers/bioconductor-lmdme?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lmdme";
        var versions = ["1.48.0","1.44.0","1.42.0","1.40.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lmdme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lmdme/README.html