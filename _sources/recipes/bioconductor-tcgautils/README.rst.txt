:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tcgautils'
.. highlight: bash

bioconductor-tcgautils
======================

.. conda:recipe:: bioconductor-tcgautils
   :replaces_section_title:
   :noindex:

   TCGA utility functions for data management

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TCGAutils.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tcgautils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgautils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgautils/meta.yaml>`_

   A suite of helper functions for checking and manipulating TCGA data including data obtained from the curatedTCGAData experiment package. These functions aim to simplify and make working with TCGA data more manageable. Exported functions include those that import data from flat files into Bioconductor objects\, convert row annotations\, and identifier translation via the GDC API.


.. conda:package:: bioconductor-tcgautils

   |downloads_bioconductor-tcgautils| |docker_bioconductor-tcgautils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.2-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.2-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biocbaseutils: ``>=1.4.0,<1.5.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicdatacommons: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-raggedexperiment: ``>=1.26.0,<1.27.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rvest: 
   :depends r-stringr: 
   :depends r-xml2: 
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

      mamba install bioconductor-tcgautils

   and update with::

      mamba update bioconductor-tcgautils

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tcgautils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tcgautils:<tag>

   (see `bioconductor-tcgautils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tcgautils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcgautils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tcgautils
   :alt:   (downloads)
.. |docker_bioconductor-tcgautils| image:: https://quay.io/repository/biocontainers/bioconductor-tcgautils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcgautils
.. _`bioconductor-tcgautils/tags`: https://quay.io/repository/biocontainers/bioconductor-tcgautils?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tcgautils";
        var versions = ["1.22.0","1.20.2","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcgautils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcgautils/README.html