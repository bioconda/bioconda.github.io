:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gwascat'
.. highlight: bash

bioconductor-gwascat
====================

.. conda:recipe:: bioconductor-gwascat
   :replaces_section_title:
   :noindex:

   representing and modeling data in the EMBL\-EBI GWAS catalog

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/gwascat.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gwascat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwascat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwascat/meta.yaml>`_

   Represent and model data in the EMBL\-EBI GWAS catalog.


.. conda:package:: bioconductor-gwascat

   |downloads_bioconductor-gwascat| |docker_bioconductor-gwascat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.20.1-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-1</code>,  </span></summary>
      

      ``2.32.0-0``,  ``2.30.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.1-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-snpstats: ``>=1.50.0,<1.51.0``
   :depends bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-readr: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-gwascat

   and update with::

      mamba update bioconductor-gwascat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gwascat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gwascat:<tag>

   (see `bioconductor-gwascat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gwascat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gwascat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gwascat
   :alt:   (downloads)
.. |docker_bioconductor-gwascat| image:: https://quay.io/repository/biocontainers/bioconductor-gwascat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gwascat
.. _`bioconductor-gwascat/tags`: https://quay.io/repository/biocontainers/bioconductor-gwascat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gwascat";
        var versions = ["2.32.0","2.30.0","2.26.0","2.24.0","2.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gwascat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gwascat/README.html