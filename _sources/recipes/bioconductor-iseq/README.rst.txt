:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iseq'
.. highlight: bash

bioconductor-iseq
=================

.. conda:recipe:: bioconductor-iseq
   :replaces_section_title:
   :noindex:

   Bayesian Hierarchical Modeling of ChIP\-seq Data Through Hidden Ising Models

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/iSeq.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-iseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseq/meta.yaml>`_
   :links: biotools: :biotools:`iseq`, doi: :doi:`10.1111/j.1541-0420.2009.01379.x`

   Bayesian hidden Ising models are implemented to identify IP\-enriched genomic regions from ChIP\-seq data. They can be used to analyze ChIP\-seq data with and without controls and replicates.


.. conda:package:: bioconductor-iseq

   |downloads_bioconductor-iseq| |docker_bioconductor-iseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-1</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-2</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.46.0-2</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  </span></summary>
      

      ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-2``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.46.0-2``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
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

      mamba install bioconductor-iseq

   and update with::

      mamba update bioconductor-iseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-iseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iseq:<tag>

   (see `bioconductor-iseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iseq
   :alt:   (downloads)
.. |docker_bioconductor-iseq| image:: https://quay.io/repository/biocontainers/bioconductor-iseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iseq
.. _`bioconductor-iseq/tags`: https://quay.io/repository/biocontainers/bioconductor-iseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iseq";
        var versions = ["1.54.0","1.54.0","1.52.0","1.50.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iseq/README.html