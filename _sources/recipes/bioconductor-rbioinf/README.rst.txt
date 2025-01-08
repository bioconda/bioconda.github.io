:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbioinf'
.. highlight: bash

bioconductor-rbioinf
====================

.. conda:recipe:: bioconductor-rbioinf
   :replaces_section_title:
   :noindex:

   RBioinf

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RBioinf.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rbioinf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbioinf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbioinf/meta.yaml>`_
   :links: biotools: :biotools:`rbioinf`, doi: :doi:`10.1038/nmeth.3252`

   Functions and datasets and examples to accompany the monograph R For Bioinformatics.


.. conda:package:: bioconductor-rbioinf

   |downloads_bioconductor-rbioinf| |docker_bioconductor-rbioinf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.66.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-1</code>,  <code>1.58.0-0</code>,  <code>1.54.0-2</code>,  <code>1.54.0-1</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  </span></summary>
      

      ``1.66.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.54.0-2``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-rbioinf

   and update with::

      mamba update bioconductor-rbioinf

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rbioinf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rbioinf:<tag>

   (see `bioconductor-rbioinf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rbioinf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbioinf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbioinf
   :alt:   (downloads)
.. |docker_bioconductor-rbioinf| image:: https://quay.io/repository/biocontainers/bioconductor-rbioinf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbioinf
.. _`bioconductor-rbioinf/tags`: https://quay.io/repository/biocontainers/bioconductor-rbioinf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbioinf";
        var versions = ["1.66.0","1.62.0","1.60.0","1.58.0","1.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbioinf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbioinf/README.html