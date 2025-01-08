:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dyndoc'
.. highlight: bash

bioconductor-dyndoc
===================

.. conda:recipe:: bioconductor-dyndoc
   :replaces_section_title:
   :noindex:

   Dynamic document tools

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DynDoc.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dyndoc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dyndoc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dyndoc/meta.yaml>`_
   :links: biotools: :biotools:`dyndoc`, doi: :doi:`10.1038/nmeth.3252`

   A set of functions to create and interact with dynamic documents and vignettes.


.. conda:package:: bioconductor-dyndoc

   |downloads_bioconductor-dyndoc| |docker_bioconductor-dyndoc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.84.0-0</code>,  <code>1.80.0-0</code>,  <code>1.78.0-0</code>,  <code>1.76.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  </span></summary>
      

      ``1.84.0-0``,  ``1.80.0-0``,  ``1.78.0-0``,  ``1.76.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-dyndoc

   and update with::

      mamba update bioconductor-dyndoc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dyndoc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dyndoc:<tag>

   (see `bioconductor-dyndoc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dyndoc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dyndoc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dyndoc
   :alt:   (downloads)
.. |docker_bioconductor-dyndoc| image:: https://quay.io/repository/biocontainers/bioconductor-dyndoc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dyndoc
.. _`bioconductor-dyndoc/tags`: https://quay.io/repository/biocontainers/bioconductor-dyndoc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dyndoc";
        var versions = ["1.84.0","1.80.0","1.78.0","1.76.0","1.72.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dyndoc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dyndoc/README.html