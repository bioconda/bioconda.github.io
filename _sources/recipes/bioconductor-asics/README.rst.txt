:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-asics'
.. highlight: bash

bioconductor-asics
==================

.. conda:recipe:: bioconductor-asics
   :replaces_section_title:
   :noindex:

   Automatic Statistical Identification in Complex Spectra

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ASICS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-asics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asics/meta.yaml>`_

   With a set of pure metabolite reference spectra\, ASICS quantifies concentration of metabolites in a complex spectrum. The identification of metabolites is performed by fitting a mixture model to the spectra of the library with a sparse penalty. The method and its statistical properties are described in Tardivel et al. \(2017\) \<doi\:10.1007\/s11306\-017\-1244\-5\>.


.. conda:package:: bioconductor-asics

   |downloads_bioconductor-asics| |docker_bioconductor-asics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.1-1</code>,  <code>2.6.1-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  </span></summary>
      

      ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.1-1``,  ``2.6.1-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-pepsnmr: ``>=1.20.0,<1.21.0``
   :depends bioconductor-ropls: ``>=1.34.0,<1.35.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-gridextra: 
   :depends r-matrix: 
   :depends r-mvtnorm: 
   :depends r-plyr: 
   :depends r-quadprog: 
   :depends r-zoo: 
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

      mamba install bioconductor-asics

   and update with::

      mamba update bioconductor-asics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-asics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-asics:<tag>

   (see `bioconductor-asics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-asics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-asics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-asics
   :alt:   (downloads)
.. |docker_bioconductor-asics| image:: https://quay.io/repository/biocontainers/bioconductor-asics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-asics
.. _`bioconductor-asics/tags`: https://quay.io/repository/biocontainers/bioconductor-asics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-asics";
        var versions = ["2.18.0","2.16.0","2.14.0","2.10.0","2.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-asics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-asics/README.html