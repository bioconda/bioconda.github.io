:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ibh'
.. highlight: bash

bioconductor-ibh
================

.. conda:recipe:: bioconductor-ibh
   :replaces_section_title:
   :noindex:

   Interaction Based Homogeneity for Evaluating Gene Lists

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ibh.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ibh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ibh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ibh/meta.yaml>`_
   :links: biotools: :biotools:`ibh`, doi: :doi:`10.1038/nmeth.3252`

   This package contains methods for calculating Interaction Based Homogeneity to evaluate fitness of gene lists to an interaction network which is useful for evaluation of clustering results and gene list analysis. BioGRID interactions are used in the calculation. The user can also provide their own interactions.


.. conda:package:: bioconductor-ibh

   |downloads_bioconductor-ibh| |docker_bioconductor-ibh|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-2</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-2``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-simpintlists: ``>=1.42.0,<1.43.0``
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

      mamba install bioconductor-ibh

   and update with::

      mamba update bioconductor-ibh

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ibh

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ibh:<tag>

   (see `bioconductor-ibh/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ibh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ibh.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ibh
   :alt:   (downloads)
.. |docker_bioconductor-ibh| image:: https://quay.io/repository/biocontainers/bioconductor-ibh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ibh
.. _`bioconductor-ibh/tags`: https://quay.io/repository/biocontainers/bioconductor-ibh?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ibh";
        var versions = ["1.54.0","1.50.0","1.48.0","1.46.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ibh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ibh/README.html