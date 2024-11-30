:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocstyle'
.. highlight: bash

bioconductor-biocstyle
======================

.. conda:recipe:: bioconductor-biocstyle
   :replaces_section_title:
   :noindex:

   Standard styles for vignettes and other Bioconductor documents

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BiocStyle.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocstyle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocstyle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocstyle/meta.yaml>`_
   :links: biotools: :biotools:`biocstyle`, doi: :doi:`10.1038/nmeth.3252`

   Provides standard formatting styles for Bioconductor PDF and HTML documents. Package vignettes illustrate use and functionality.


.. conda:package:: bioconductor-biocstyle

   |downloads_bioconductor-biocstyle| |docker_bioconductor-biocstyle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.1-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  </span></summary>
      

      ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.1-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.2-0``,  ``2.6.0-0``,  ``2.4.1-0``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-bookdown: 
   :depends r-knitr: ``>=1.30``
   :depends r-rmarkdown: ``>=1.2``
   :depends r-yaml: 
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

      mamba install bioconductor-biocstyle

   and update with::

      mamba update bioconductor-biocstyle

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biocstyle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocstyle:<tag>

   (see `bioconductor-biocstyle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocstyle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocstyle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocstyle
   :alt:   (downloads)
.. |docker_bioconductor-biocstyle| image:: https://quay.io/repository/biocontainers/bioconductor-biocstyle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocstyle
.. _`bioconductor-biocstyle/tags`: https://quay.io/repository/biocontainers/bioconductor-biocstyle?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocstyle";
        var versions = ["2.30.0","2.28.0","2.26.0","2.22.0","2.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocstyle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocstyle/README.html