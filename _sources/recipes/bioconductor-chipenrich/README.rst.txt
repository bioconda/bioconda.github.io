:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipenrich'
.. highlight: bash

bioconductor-chipenrich
=======================

.. conda:recipe:: bioconductor-chipenrich
   :replaces_section_title:
   :noindex:

   Gene Set Enrichment For ChIP\-seq Peak Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/chipenrich.html
   :license: GPL-3
   :recipe: /`bioconductor-chipenrich <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipenrich>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipenrich/meta.yaml>`_

   ChIP\-Enrich and Poly\-Enrich perform gene set enrichment testing using peaks called from a ChIP\-seq experiment. The method empirically corrects for confounding factors such as the length of genes\, and the mappability of the sequence surrounding genes.


.. conda:package:: bioconductor-chipenrich

   |downloads_bioconductor-chipenrich| |docker_bioconductor-chipenrich|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-1</code>,  <code>2.8.0-1</code>,  </span></summary>
      

      ``2.24.0-0``,  ``2.22.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-1``,  ``2.8.0-1``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-chipenrich.data: ``>=2.24.0,<2.25.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-org.dm.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-org.dr.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-org.rn.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-lattice: 
   :depends r-latticeextra: 
   :depends r-mass: 
   :depends r-mgcv: 
   :depends r-plyr: 
   :depends r-rms: 
   :depends r-stringr: 
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

      mamba install bioconductor-chipenrich

   and update with::

      mamba update bioconductor-chipenrich

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chipenrich

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chipenrich:<tag>

   (see `bioconductor-chipenrich/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipenrich| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipenrich.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipenrich
   :alt:   (downloads)
.. |docker_bioconductor-chipenrich| image:: https://quay.io/repository/biocontainers/bioconductor-chipenrich/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipenrich
.. _`bioconductor-chipenrich/tags`: https://quay.io/repository/biocontainers/bioconductor-chipenrich?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chipenrich";
        var versions = ["2.24.0","2.22.0","2.18.0","2.16.0","2.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipenrich/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipenrich/README.html