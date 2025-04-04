:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-farms'
.. highlight: bash

bioconductor-farms
==================

.. conda:recipe:: bioconductor-farms
   :replaces_section_title:
   :noindex:

   FARMS \- Factor Analysis for Robust Microarray Summarization

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/farms.html
   :license: LGPL (>= 2.1)
   :recipe: /`bioconductor-farms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-farms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-farms/meta.yaml>`_
   :links: biotools: :biotools:`farms`

   The package provides the summarization algorithm called Factor Analysis for Robust Microarray Summarization \(FARMS\) and a novel unsupervised feature selection criterion called \"I\/NI\-calls\"


.. conda:package:: bioconductor-farms

   |downloads_bioconductor-farms| |docker_bioconductor-farms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.78.0,<1.79.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mass: 
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

      mamba install bioconductor-farms

   and update with::

      mamba update bioconductor-farms

  To create a new environment, run::

      mamba create --name myenvname bioconductor-farms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-farms:<tag>

   (see `bioconductor-farms/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-farms| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-farms.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-farms
   :alt:   (downloads)
.. |docker_bioconductor-farms| image:: https://quay.io/repository/biocontainers/bioconductor-farms/status
   :target: https://quay.io/repository/biocontainers/bioconductor-farms
.. _`bioconductor-farms/tags`: https://quay.io/repository/biocontainers/bioconductor-farms?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-farms";
        var versions = ["1.52.0","1.50.0","1.46.0","1.44.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-farms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-farms/README.html