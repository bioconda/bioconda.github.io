:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-meshr'
.. highlight: bash

bioconductor-meshr
==================

.. conda:recipe:: bioconductor-meshr
   :replaces_section_title:
   :noindex:

   Tools for conducting enrichment analysis of MeSH

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/meshr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-meshr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meshr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meshr/meta.yaml>`_

   A set of annotation maps describing the entire MeSH assembled using data from MeSH.


.. conda:package:: bioconductor-meshr

   |downloads_bioconductor-meshr| |docker_bioconductor-meshr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.0.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.1-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.0.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.1-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocstyle: ``>=2.30.0,<2.31.0``
   :depends bioconductor-category: ``>=2.68.0,<2.69.0``
   :depends bioconductor-meshdbi: ``>=1.38.0,<1.39.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fdrtool: 
   :depends r-knitr: 
   :depends r-markdown: 
   :depends r-rmarkdown: 
   :depends r-rsqlite: 
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

      mamba install bioconductor-meshr

   and update with::

      mamba update bioconductor-meshr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-meshr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-meshr:<tag>

   (see `bioconductor-meshr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-meshr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meshr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-meshr
   :alt:   (downloads)
.. |docker_bioconductor-meshr| image:: https://quay.io/repository/biocontainers/bioconductor-meshr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meshr
.. _`bioconductor-meshr/tags`: https://quay.io/repository/biocontainers/bioconductor-meshr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-meshr";
        var versions = ["2.8.0","2.6.0","2.4.0","2.0.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meshr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meshr/README.html