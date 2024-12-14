:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mgsa'
.. highlight: bash

bioconductor-mgsa
=================

.. conda:recipe:: bioconductor-mgsa
   :replaces_section_title:
   :noindex:

   Model\-based gene set analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/mgsa.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mgsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mgsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mgsa/meta.yaml>`_
   :links: biotools: :biotools:`mgsa`, doi: :doi:`10.1093/nar/gkq045`

   Model\-based Gene Set Analysis \(MGSA\) is a Bayesian modeling approach for gene set enrichment. The package mgsa implements MGSA and tools to use MGSA together with the Gene Ontology.


.. conda:package:: bioconductor-mgsa

   |downloads_bioconductor-mgsa| |docker_bioconductor-mgsa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.50.0-2</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-2</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  <code>1.42.0-2</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.50.0-2``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-2``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.42.0-2``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-gplots: 
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

      mamba install bioconductor-mgsa

   and update with::

      mamba update bioconductor-mgsa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mgsa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mgsa:<tag>

   (see `bioconductor-mgsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mgsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mgsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mgsa
   :alt:   (downloads)
.. |docker_bioconductor-mgsa| image:: https://quay.io/repository/biocontainers/bioconductor-mgsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mgsa
.. _`bioconductor-mgsa/tags`: https://quay.io/repository/biocontainers/bioconductor-mgsa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mgsa";
        var versions = ["1.54.0","1.50.0","1.50.0","1.50.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mgsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mgsa/README.html