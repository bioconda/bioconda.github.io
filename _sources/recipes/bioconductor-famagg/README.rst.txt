:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-famagg'
.. highlight: bash

bioconductor-famagg
===================

.. conda:recipe:: bioconductor-famagg
   :replaces_section_title:
   :noindex:

   Pedigree Analysis and Familial Aggregation

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/FamAgg.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-famagg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-famagg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-famagg/meta.yaml>`_

   Framework providing basic pedigree analysis and plotting utilities as well as a variety of methods to evaluate familial aggregation of traits in large pedigrees.


.. conda:package:: bioconductor-famagg

   |downloads_bioconductor-famagg| |docker_bioconductor-famagg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.4-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gap: ``>=1.1-17``
   :depends r-igraph: 
   :depends r-kinship2: 
   :depends r-matrix: 
   :depends r-survey: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-famagg

   and update with::

      mamba update bioconductor-famagg

  To create a new environment, run::

      mamba create --name myenvname bioconductor-famagg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-famagg:<tag>

   (see `bioconductor-famagg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-famagg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-famagg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-famagg
   :alt:   (downloads)
.. |docker_bioconductor-famagg| image:: https://quay.io/repository/biocontainers/bioconductor-famagg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-famagg
.. _`bioconductor-famagg/tags`: https://quay.io/repository/biocontainers/bioconductor-famagg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-famagg";
        var versions = ["1.28.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-famagg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-famagg/README.html