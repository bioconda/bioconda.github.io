:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ssrch'
.. highlight: bash

bioconductor-ssrch
==================

.. conda:recipe:: bioconductor-ssrch
   :replaces_section_title:
   :noindex:

   a simple search engine

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ssrch.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ssrch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ssrch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ssrch/meta.yaml>`_

   Demonstrate tokenization and a search gadget for collections of CSV files.


.. conda:package:: bioconductor-ssrch

   |downloads_bioconductor-ssrch| |docker_bioconductor-ssrch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dt: 
   :depends r-shiny: 
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

      mamba install bioconductor-ssrch

   and update with::

      mamba update bioconductor-ssrch

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ssrch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ssrch:<tag>

   (see `bioconductor-ssrch/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ssrch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ssrch.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ssrch
   :alt:   (downloads)
.. |docker_bioconductor-ssrch| image:: https://quay.io/repository/biocontainers/bioconductor-ssrch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ssrch
.. _`bioconductor-ssrch/tags`: https://quay.io/repository/biocontainers/bioconductor-ssrch?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ssrch";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ssrch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ssrch/README.html