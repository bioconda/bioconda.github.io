:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cummerbund'
.. highlight: bash

bioconductor-cummerbund
=======================

.. conda:recipe:: bioconductor-cummerbund
   :replaces_section_title:
   :noindex:

   Analysis\, exploration\, manipulation\, and visualization of Cufflinks high\-throughput sequencing data.

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/cummeRbund.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cummerbund <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cummerbund>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cummerbund/meta.yaml>`_
   :links: biotools: :biotools:`cummerbund`, doi: :doi:`10.1038/nprot.2012.016`

   Allows for persistent storage\, access\, exploration\, and manipulation of Cufflinks high\-throughput sequencing data.  In addition\, provides numerous plotting functions for commonly used visualizations.


.. conda:package:: bioconductor-cummerbund

   |downloads_bioconductor-cummerbund| |docker_bioconductor-cummerbund|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.44.0-0</code>,  <code>2.42.0-0</code>,  <code>2.40.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-0</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  </span></summary>
      

      ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-1``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.12.1-1``,  ``2.12.1-0``,  ``2.8.2-1``,  ``2.8.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-gviz: ``>=1.46.0,<1.47.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fastcluster: 
   :depends r-ggplot2: 
   :depends r-plyr: 
   :depends r-reshape2: 
   :depends r-rsqlite: 
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

      mamba install bioconductor-cummerbund

   and update with::

      mamba update bioconductor-cummerbund

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cummerbund

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cummerbund:<tag>

   (see `bioconductor-cummerbund/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cummerbund| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cummerbund.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cummerbund
   :alt:   (downloads)
.. |docker_bioconductor-cummerbund| image:: https://quay.io/repository/biocontainers/bioconductor-cummerbund/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cummerbund
.. _`bioconductor-cummerbund/tags`: https://quay.io/repository/biocontainers/bioconductor-cummerbund?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cummerbund";
        var versions = ["2.44.0","2.42.0","2.40.0","2.36.0","2.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cummerbund/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cummerbund/README.html