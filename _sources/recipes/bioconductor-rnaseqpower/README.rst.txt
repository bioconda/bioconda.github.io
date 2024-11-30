:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnaseqpower'
.. highlight: bash

bioconductor-rnaseqpower
========================

.. conda:recipe:: bioconductor-rnaseqpower
   :replaces_section_title:
   :noindex:

   Sample size for RNAseq studies

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RNASeqPower.html
   :license: LGPL (>=2)
   :recipe: /`bioconductor-rnaseqpower <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqpower>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqpower/meta.yaml>`_
   :links: biotools: :biotools:`rnaseqpower`, doi: :doi:`10.1089/cmb.2012.0283`

   RNA\-seq\, sample size


.. conda:package:: bioconductor-rnaseqpower

   |downloads_bioconductor-rnaseqpower| |docker_bioconductor-rnaseqpower|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.1-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-rnaseqpower

   and update with::

      mamba update bioconductor-rnaseqpower

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rnaseqpower

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnaseqpower:<tag>

   (see `bioconductor-rnaseqpower/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnaseqpower| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaseqpower.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnaseqpower
   :alt:   (downloads)
.. |docker_bioconductor-rnaseqpower| image:: https://quay.io/repository/biocontainers/bioconductor-rnaseqpower/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaseqpower
.. _`bioconductor-rnaseqpower/tags`: https://quay.io/repository/biocontainers/bioconductor-rnaseqpower?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnaseqpower";
        var versions = ["1.42.0","1.40.0","1.38.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaseqpower/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaseqpower/README.html