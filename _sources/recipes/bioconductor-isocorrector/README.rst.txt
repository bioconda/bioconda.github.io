:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-isocorrector'
.. highlight: bash

bioconductor-isocorrector
=========================

.. conda:recipe:: bioconductor-isocorrector
   :replaces_section_title:
   :noindex:

   Correction for natural isotope abundance and tracer purity in MS and MS\/MS data from stable isotope labeling experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/IsoCorrectoR.html
   :license: GPL-3
   :recipe: /`bioconductor-isocorrector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isocorrector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isocorrector/meta.yaml>`_

   IsoCorrectoR performs the correction of mass spectrometry data from stable isotope labeling\/tracing metabolomics experiments with regard to natural isotope abundance and tracer impurity. Data from both MS and MS\/MS measurements can be corrected \(with any tracer isotope\: 13C\, 15N\, 18O...\)\, as well as ultra\-high resolution MS data from multiple\-tracer experiments \(e.g. 13C and 15N used simultaneously\). See the Bioconductor package IsoCorrectoRGUI for a graphical user interface to IsoCorrectoR. NOTE\: With R version 4.0.0\, writing correction results to Excel files may currently not work on Windows. However\, writing results to csv works as before.


.. conda:package:: bioconductor-isocorrector

   |downloads_bioconductor-isocorrector| |docker_bioconductor-isocorrector|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-pracma: 
   :depends r-quadprog: 
   :depends r-readr: 
   :depends r-readxl: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-writexls: 
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

      mamba install bioconductor-isocorrector

   and update with::

      mamba update bioconductor-isocorrector

  To create a new environment, run::

      mamba create --name myenvname bioconductor-isocorrector

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-isocorrector:<tag>

   (see `bioconductor-isocorrector/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-isocorrector| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isocorrector.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-isocorrector
   :alt:   (downloads)
.. |docker_bioconductor-isocorrector| image:: https://quay.io/repository/biocontainers/bioconductor-isocorrector/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isocorrector
.. _`bioconductor-isocorrector/tags`: https://quay.io/repository/biocontainers/bioconductor-isocorrector?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-isocorrector";
        var versions = ["1.24.0","1.20.0","1.18.0","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isocorrector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isocorrector/README.html