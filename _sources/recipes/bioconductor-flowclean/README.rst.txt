:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowclean'
.. highlight: bash

bioconductor-flowclean
======================

.. conda:recipe:: bioconductor-flowclean
   :replaces_section_title:
   :noindex:

   flowClean

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/flowClean.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowclean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowclean>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowclean/meta.yaml>`_
   :links: biotools: :biotools:`flowclean`

   A quality control tool for flow cytometry data based on compositional data analysis.


.. conda:package:: bioconductor-flowclean

   |downloads_bioconductor-flowclean| |docker_bioconductor-flowclean|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-flowcore: ``>=2.14.0,<2.15.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bit: 
   :depends r-changepoint: 
   :depends r-sfsmisc: 
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

      mamba install bioconductor-flowclean

   and update with::

      mamba update bioconductor-flowclean

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowclean

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowclean:<tag>

   (see `bioconductor-flowclean/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowclean| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowclean.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowclean
   :alt:   (downloads)
.. |docker_bioconductor-flowclean| image:: https://quay.io/repository/biocontainers/bioconductor-flowclean/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowclean
.. _`bioconductor-flowclean/tags`: https://quay.io/repository/biocontainers/bioconductor-flowclean?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowclean";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowclean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowclean/README.html