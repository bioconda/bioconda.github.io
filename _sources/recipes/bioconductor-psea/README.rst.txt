:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-psea'
.. highlight: bash

bioconductor-psea
=================

.. conda:recipe:: bioconductor-psea
   :replaces_section_title:
   :noindex:

   Population\-Specific Expression Analysis.

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/PSEA.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-psea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-psea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-psea/meta.yaml>`_
   :links: biotools: :biotools:`psea`, doi: :doi:`10.1038/scibx.2011.1159`

   Deconvolution of gene expression data by Population\-Specific Expression Analysis \(PSEA\).


.. conda:package:: bioconductor-psea

   |downloads_bioconductor-psea| |docker_bioconductor-psea|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mass: 
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

      mamba install bioconductor-psea

   and update with::

      mamba update bioconductor-psea

  To create a new environment, run::

      mamba create --name myenvname bioconductor-psea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-psea:<tag>

   (see `bioconductor-psea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-psea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-psea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-psea
   :alt:   (downloads)
.. |docker_bioconductor-psea| image:: https://quay.io/repository/biocontainers/bioconductor-psea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-psea
.. _`bioconductor-psea/tags`: https://quay.io/repository/biocontainers/bioconductor-psea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-psea";
        var versions = ["1.34.0","1.32.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-psea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-psea/README.html