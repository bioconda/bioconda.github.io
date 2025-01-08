:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gseabase'
.. highlight: bash

bioconductor-gseabase
=====================

.. conda:recipe:: bioconductor-gseabase
   :replaces_section_title:
   :noindex:

   Gene set enrichment data structures and methods

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GSEABase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gseabase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gseabase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gseabase/meta.yaml>`_
   :links: biotools: :biotools:`gseabase`, doi: :doi:`10.1038/nmeth.3252`

   This package provides classes and methods to support Gene Set Enrichment Analysis \(GSEA\).


.. conda:package:: bioconductor-gseabase

   |downloads_bioconductor-gseabase| |docker_bioconductor-gseabase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.68.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.1-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  </span></summary>
      

      ``1.68.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.1-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.2-0``,  ``1.34.1-0``,  ``1.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.84.0,<1.85.0``
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-xml: 
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

      mamba install bioconductor-gseabase

   and update with::

      mamba update bioconductor-gseabase

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gseabase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gseabase:<tag>

   (see `bioconductor-gseabase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gseabase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gseabase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gseabase
   :alt:   (downloads)
.. |docker_bioconductor-gseabase| image:: https://quay.io/repository/biocontainers/bioconductor-gseabase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gseabase
.. _`bioconductor-gseabase/tags`: https://quay.io/repository/biocontainers/bioconductor-gseabase?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gseabase";
        var versions = ["1.68.0","1.64.0","1.62.0","1.60.0","1.56.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gseabase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gseabase/README.html