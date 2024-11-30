:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clusterstab'
.. highlight: bash

bioconductor-clusterstab
========================

.. conda:recipe:: bioconductor-clusterstab
   :replaces_section_title:
   :noindex:

   Compute cluster stability scores for microarray data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/clusterStab.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-clusterstab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterstab>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterstab/meta.yaml>`_
   :links: biotools: :biotools:`clusterstab`, doi: :doi:`10.1038/nmeth.3252`

   This package can be used to estimate the number of clusters in a set of microarray data\, as well as test the stability of these clusters.


.. conda:package:: bioconductor-clusterstab

   |downloads_bioconductor-clusterstab| |docker_bioconductor-clusterstab|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  </span></summary>
      

      ``1.74.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
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

      mamba install bioconductor-clusterstab

   and update with::

      mamba update bioconductor-clusterstab

  To create a new environment, run::

      mamba create --name myenvname bioconductor-clusterstab

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clusterstab:<tag>

   (see `bioconductor-clusterstab/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clusterstab| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clusterstab.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clusterstab
   :alt:   (downloads)
.. |docker_bioconductor-clusterstab| image:: https://quay.io/repository/biocontainers/bioconductor-clusterstab/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clusterstab
.. _`bioconductor-clusterstab/tags`: https://quay.io/repository/biocontainers/bioconductor-clusterstab?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clusterstab";
        var versions = ["1.74.0","1.72.0","1.70.0","1.66.0","1.64.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clusterstab/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clusterstab/README.html