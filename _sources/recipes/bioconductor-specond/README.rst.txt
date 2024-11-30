:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-specond'
.. highlight: bash

bioconductor-specond
====================

.. conda:recipe:: bioconductor-specond
   :replaces_section_title:
   :noindex:

   Condition specific detection from expression data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SpeCond.html
   :license: LGPL (>=2)
   :recipe: /`bioconductor-specond <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-specond>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-specond/meta.yaml>`_
   :links: biotools: :biotools:`specond`, doi: :doi:`10.1186/gb-2011-12-12-413`

   This package performs a gene expression data analysis to detect condition\-specific genes. Such genes are significantly up\- or down\-regulated in a small number of conditions. It does so by fitting a mixture of normal distributions to the expression values. Conditions can be environmental conditions\, different tissues\, organs or any other sources that you wish to compare in terms of gene expression.


.. conda:package:: bioconductor-specond

   |downloads_bioconductor-specond| |docker_bioconductor-specond|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fields: 
   :depends r-hwriter: ``>=1.1``
   :depends r-mclust: ``>=3.3.1``
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-specond

   and update with::

      mamba update bioconductor-specond

  To create a new environment, run::

      mamba create --name myenvname bioconductor-specond

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-specond:<tag>

   (see `bioconductor-specond/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-specond| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-specond.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-specond
   :alt:   (downloads)
.. |docker_bioconductor-specond| image:: https://quay.io/repository/biocontainers/bioconductor-specond/status
   :target: https://quay.io/repository/biocontainers/bioconductor-specond
.. _`bioconductor-specond/tags`: https://quay.io/repository/biocontainers/bioconductor-specond?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-specond";
        var versions = ["1.56.0","1.54.0","1.52.0","1.48.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-specond/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-specond/README.html