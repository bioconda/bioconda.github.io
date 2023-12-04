:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-topconfects'
.. highlight: bash

bioconductor-topconfects
========================

.. conda:recipe:: bioconductor-topconfects
   :replaces_section_title:
   :noindex:

   Top Confident Effect Sizes

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/topconfects.html
   :license: LGPL-2.1 | file LICENSE
   :recipe: /`bioconductor-topconfects <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topconfects>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topconfects/meta.yaml>`_

   Rank results by confident effect sizes\, while maintaining False Discovery Rate and False Coverage\-statement Rate control. Topconfects is an alternative presentation of TREAT results with improved usability\, eliminating p\-values and instead providing confidence bounds. The main application is differential gene expression analysis\, providing genes ranked in order of confident log2 fold change\, but it can be applied to any collection of effect sizes with associated standard errors.


.. conda:package:: bioconductor-topconfects

   |downloads_bioconductor-topconfects| |docker_bioconductor-topconfects|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-topconfects

   and update with::

      mamba update bioconductor-topconfects

  To create a new environment, run::

      mamba create --name myenvname bioconductor-topconfects

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-topconfects:<tag>

   (see `bioconductor-topconfects/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-topconfects| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-topconfects.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-topconfects
   :alt:   (downloads)
.. |docker_bioconductor-topconfects| image:: https://quay.io/repository/biocontainers/bioconductor-topconfects/status
   :target: https://quay.io/repository/biocontainers/bioconductor-topconfects
.. _`bioconductor-topconfects/tags`: https://quay.io/repository/biocontainers/bioconductor-topconfects?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-topconfects";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-topconfects/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-topconfects/README.html