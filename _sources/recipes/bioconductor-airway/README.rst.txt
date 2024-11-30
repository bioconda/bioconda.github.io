:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-airway'
.. highlight: bash

bioconductor-airway
===================

.. conda:recipe:: bioconductor-airway
   :replaces_section_title:
   :noindex:

   RangedSummarizedExperiment for RNA\-Seq in airway smooth muscle cells\, by Himes et al PLoS One 2014

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/airway.html
   :license: LGPL
   :recipe: /`bioconductor-airway <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-airway>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-airway/meta.yaml>`_

   This package provides a RangedSummarizedExperiment object of read counts in genes for an RNA\-Seq experiment on four human airway smooth muscle cell lines treated with dexamethasone. Details on the gene model and read counting procedure are provided in the package vignette. The citation for the experiment is\: Himes BE\, Jiang X\, Wagner P\, Hu R\, Wang Q\, Klanderman B\, Whitaker RM\, Duan Q\, Lasky\-Su J\, Nikolos C\, Jester W\, Johnson M\, Panettieri R Jr\, Tantisira KG\, Weiss ST\, Lu Q. \'RNA\-Seq Transcriptome Profiling Identifies CRISPLD2 as a Glucocorticoid Responsive Gene that Modulates Cytokine Function in Airway Smooth Muscle Cells.\' PLoS One. 2014 Jun 13\;9\(6\)\:e99625. PMID\: 24926665. GEO\: GSE52778.


.. conda:package:: bioconductor-airway

   |downloads_bioconductor-airway| |docker_bioconductor-airway|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-airway

   and update with::

      mamba update bioconductor-airway

  To create a new environment, run::

      mamba create --name myenvname bioconductor-airway

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-airway:<tag>

   (see `bioconductor-airway/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-airway| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-airway.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-airway
   :alt:   (downloads)
.. |docker_bioconductor-airway| image:: https://quay.io/repository/biocontainers/bioconductor-airway/status
   :target: https://quay.io/repository/biocontainers/bioconductor-airway
.. _`bioconductor-airway/tags`: https://quay.io/repository/biocontainers/bioconductor-airway?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-airway";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-airway/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-airway/README.html