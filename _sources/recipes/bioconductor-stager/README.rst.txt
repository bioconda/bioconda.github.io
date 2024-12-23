:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stager'
.. highlight: bash

bioconductor-stager
===================

.. conda:recipe:: bioconductor-stager
   :replaces_section_title:
   :noindex:

   stageR\: stage\-wise analysis of high throughput gene expression data in R

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/stageR.html
   :license: GNU General Public License version 3
   :recipe: /`bioconductor-stager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stager/meta.yaml>`_

   The stageR package allows automated stage\-wise analysis of high\-throughput gene expression data. The method is published in Genome Biology at https\:\/\/genomebiology.biomedcentral.com\/articles\/10.1186\/s13059\-017\-1277\-0


.. conda:package:: bioconductor-stager

   |downloads_bioconductor-stager| |docker_bioconductor-stager|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
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

      mamba install bioconductor-stager

   and update with::

      mamba update bioconductor-stager

  To create a new environment, run::

      mamba create --name myenvname bioconductor-stager

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-stager:<tag>

   (see `bioconductor-stager/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-stager| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stager.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stager
   :alt:   (downloads)
.. |docker_bioconductor-stager| image:: https://quay.io/repository/biocontainers/bioconductor-stager/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stager
.. _`bioconductor-stager/tags`: https://quay.io/repository/biocontainers/bioconductor-stager?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-stager";
        var versions = ["1.28.0","1.24.0","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stager/README.html