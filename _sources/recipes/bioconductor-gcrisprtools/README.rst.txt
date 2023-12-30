:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gcrisprtools'
.. highlight: bash

bioconductor-gcrisprtools
=========================

.. conda:recipe:: bioconductor-gcrisprtools
   :replaces_section_title:
   :noindex:

   Suite of Functions for Pooled Crispr Screen QC and Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/gCrisprTools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gcrisprtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcrisprtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcrisprtools/meta.yaml>`_
   :links: biotools: :biotools:`gcrisprtools`, doi: :doi:`10.1038/nmeth.3252`

   Set of tools for evaluating pooled high\-throughput screening experiments\, typically employing CRISPR\/Cas9 or shRNA expression cassettes. Contains methods for interrogating library and cassette behavior within an experiment\, identifying differentially abundant cassettes\, aggregating signals to identify candidate targets for empirical validation\, hypothesis testing\, and comprehensive reporting. Version 2.0 extends these applications to include a variety of tools for contextualizing and integrating signals across many experiments\, incorporates extended signal enrichment methodologies via the \"sparrow\" package\, and streamlines many formal requirements to aid in interpretablity.


.. conda:package:: bioconductor-gcrisprtools

   |downloads_bioconductor-gcrisprtools| |docker_bioconductor-gcrisprtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.0.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.0.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-rmarkdown: 
   :depends r-robustrankaggreg: 
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

      mamba install bioconductor-gcrisprtools

   and update with::

      mamba update bioconductor-gcrisprtools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gcrisprtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gcrisprtools:<tag>

   (see `bioconductor-gcrisprtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gcrisprtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gcrisprtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gcrisprtools
   :alt:   (downloads)
.. |docker_bioconductor-gcrisprtools| image:: https://quay.io/repository/biocontainers/bioconductor-gcrisprtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gcrisprtools
.. _`bioconductor-gcrisprtools/tags`: https://quay.io/repository/biocontainers/bioconductor-gcrisprtools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gcrisprtools";
        var versions = ["2.8.0","2.6.0","2.4.0","2.0.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gcrisprtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gcrisprtools/README.html