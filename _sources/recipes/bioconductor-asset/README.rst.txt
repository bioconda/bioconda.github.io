:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-asset'
.. highlight: bash

bioconductor-asset
==================

.. conda:recipe:: bioconductor-asset
   :replaces_section_title:
   :noindex:

   An R package for subset\-based association analysis of heterogeneous traits and subtypes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ASSET.html
   :license: GPL-2 + file LICENSE
   :recipe: /`bioconductor-asset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asset/meta.yaml>`_

   An R package for subset\-based analysis of heterogeneous traits and disease subtypes. The package allows the user to search through all possible subsets of z\-scores to identify the subset of traits giving the best meta\-analyzed z\-score. Further\, it returns a p\-value adjusting for the multiple\-testing involved in the search. It also allows for searching for the best combination of disease subtypes associated with each variant.


.. conda:package:: bioconductor-asset

   |downloads_bioconductor-asset| |docker_bioconductor-asset|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.24.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-1</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  </span></summary>
      

      ``2.24.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-mass: 
   :depends r-msm: 
   :depends r-rmeta: 
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

      mamba install bioconductor-asset

   and update with::

      mamba update bioconductor-asset

  To create a new environment, run::

      mamba create --name myenvname bioconductor-asset

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-asset:<tag>

   (see `bioconductor-asset/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-asset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-asset.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-asset
   :alt:   (downloads)
.. |docker_bioconductor-asset| image:: https://quay.io/repository/biocontainers/bioconductor-asset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-asset
.. _`bioconductor-asset/tags`: https://quay.io/repository/biocontainers/bioconductor-asset?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-asset";
        var versions = ["2.24.0","2.20.0","2.18.0","2.16.0","2.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-asset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-asset/README.html