:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scfeaturefilter'
.. highlight: bash

bioconductor-scfeaturefilter
============================

.. conda:recipe:: bioconductor-scfeaturefilter
   :replaces_section_title:
   :noindex:

   A correlation\-based method for quality filtering of single\-cell RNAseq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scFeatureFilter.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scfeaturefilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scfeaturefilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scfeaturefilter/meta.yaml>`_

   An R implementation of the correlation\-based method developed in the Joshi laboratory to analyse and filter processed single\-cell RNAseq data. It returns a filtered version of the data containing only genes expression values unaffected by systematic noise.


.. conda:package:: bioconductor-scfeaturefilter

   |downloads_bioconductor-scfeaturefilter| |docker_bioconductor-scfeaturefilter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: ``>=0.7.3``
   :depends r-ggplot2: ``>=2.1.0``
   :depends r-magrittr: ``>=1.5``
   :depends r-rlang: ``>=0.1.2``
   :depends r-tibble: ``>=1.3.4``
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

      mamba install bioconductor-scfeaturefilter

   and update with::

      mamba update bioconductor-scfeaturefilter

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scfeaturefilter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scfeaturefilter:<tag>

   (see `bioconductor-scfeaturefilter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scfeaturefilter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scfeaturefilter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scfeaturefilter
   :alt:   (downloads)
.. |docker_bioconductor-scfeaturefilter| image:: https://quay.io/repository/biocontainers/bioconductor-scfeaturefilter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scfeaturefilter
.. _`bioconductor-scfeaturefilter/tags`: https://quay.io/repository/biocontainers/bioconductor-scfeaturefilter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scfeaturefilter";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scfeaturefilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scfeaturefilter/README.html