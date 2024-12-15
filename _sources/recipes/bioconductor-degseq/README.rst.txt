:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-degseq'
.. highlight: bash

bioconductor-degseq
===================

.. conda:recipe:: bioconductor-degseq
   :replaces_section_title:
   :noindex:

   Identify Differentially Expressed Genes from RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/DEGseq.html
   :license: LGPL-3-or-above
   :recipe: /`bioconductor-degseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degseq/meta.yaml>`_
   :links: biotools: :biotools:`degseq`, doi: :doi:`10.1093/bioinformatics/btp612`

   DEGseq is an R package to identify differentially expressed genes from RNA\-Seq data.


.. conda:package:: bioconductor-degseq

   |downloads_bioconductor-degseq| |docker_bioconductor-degseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.60.0-0</code>,  <code>1.56.1-1</code>,  <code>1.56.1-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.48.0-2</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  </span></summary>
      

      ``1.60.0-0``,  ``1.56.1-1``,  ``1.56.1-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.48.0-2``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.1-0``,  ``1.34.1-0``,  ``1.32.0-0``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-qvalue: ``>=2.38.0,<2.39.0``
   :depends bioconductor-qvalue: ``>=2.38.0,<2.39.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-degseq

   and update with::

      mamba update bioconductor-degseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-degseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-degseq:<tag>

   (see `bioconductor-degseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-degseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-degseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-degseq
   :alt:   (downloads)
.. |docker_bioconductor-degseq| image:: https://quay.io/repository/biocontainers/bioconductor-degseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-degseq
.. _`bioconductor-degseq/tags`: https://quay.io/repository/biocontainers/bioconductor-degseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-degseq";
        var versions = ["1.60.0","1.56.1","1.56.1","1.54.0","1.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-degseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-degseq/README.html