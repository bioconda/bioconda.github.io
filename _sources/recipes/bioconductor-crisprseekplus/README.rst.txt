:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprseekplus'
.. highlight: bash

bioconductor-crisprseekplus
===========================

.. conda:recipe:: bioconductor-crisprseekplus
   :replaces_section_title:
   :noindex:

   crisprseekplus

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/crisprseekplus.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-crisprseekplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprseekplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprseekplus/meta.yaml>`_
   :links: biotools: :biotools:`crisprseekplus`, doi: :doi:`10.1371/journal.pone.0108424`

   Bioinformatics platform containing interface to work with offTargetAnalysis and compare2Sequences in the CRISPRseek package\, and GUIDEseqAnalysis.


.. conda:package:: bioconductor-crisprseekplus

   |downloads_bioconductor-crisprseekplus| |docker_bioconductor-crisprseekplus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-crisprseek: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-guideseq: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-dt: 
   :depends r-hash: 
   :depends r-shiny: 
   :depends r-shinyjs: 
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

      mamba install bioconductor-crisprseekplus

   and update with::

      mamba update bioconductor-crisprseekplus

  To create a new environment, run::

      mamba create --name myenvname bioconductor-crisprseekplus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crisprseekplus:<tag>

   (see `bioconductor-crisprseekplus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crisprseekplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprseekplus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprseekplus
   :alt:   (downloads)
.. |docker_bioconductor-crisprseekplus| image:: https://quay.io/repository/biocontainers/bioconductor-crisprseekplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprseekplus
.. _`bioconductor-crisprseekplus/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprseekplus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprseekplus";
        var versions = ["1.26.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprseekplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprseekplus/README.html