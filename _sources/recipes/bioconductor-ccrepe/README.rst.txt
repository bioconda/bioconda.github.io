:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ccrepe'
.. highlight: bash

bioconductor-ccrepe
===================

.. conda:recipe:: bioconductor-ccrepe
   :replaces_section_title:
   :noindex:

   ccrepe\_and\_nc.score

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ccrepe.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ccrepe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccrepe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccrepe/meta.yaml>`_

   The CCREPE \(Compositionality Corrected by REnormalizaion and PErmutation\) package is designed to assess the significance of general similarity measures in compositional datasets.  In microbial abundance data\, for example\, the total abundances of all microbes sum to one\; CCREPE is designed to take this constraint into account when assigning p\-values to similarity measures between the microbes.  The package has two functions\: ccrepe\: Calculates similarity measures\, p\-values and q\-values for relative abundances of bugs in one or two body sites using bootstrap and permutation matrices of the data. nc.score\: Calculates species\-level co\-variation and co\-exclusion patterns based on an extension of the checkerboard score to ordinal data.


.. conda:package:: bioconductor-ccrepe

   |downloads_bioconductor-ccrepe| |docker_bioconductor-ccrepe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-infotheo: ``>=1.1``
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

      mamba install bioconductor-ccrepe

   and update with::

      mamba update bioconductor-ccrepe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ccrepe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ccrepe:<tag>

   (see `bioconductor-ccrepe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ccrepe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ccrepe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ccrepe
   :alt:   (downloads)
.. |docker_bioconductor-ccrepe| image:: https://quay.io/repository/biocontainers/bioconductor-ccrepe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ccrepe
.. _`bioconductor-ccrepe/tags`: https://quay.io/repository/biocontainers/bioconductor-ccrepe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ccrepe";
        var versions = ["1.46.0","1.42.0","1.36.0","1.34.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ccrepe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ccrepe/README.html