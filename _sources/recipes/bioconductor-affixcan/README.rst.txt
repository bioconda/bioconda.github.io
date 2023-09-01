:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affixcan'
.. highlight: bash

bioconductor-affixcan
=====================

.. conda:recipe:: bioconductor-affixcan
   :replaces_section_title:
   :noindex:

   A Functional Approach To Impute Genetically Regulated Expression

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/AffiXcan.html
   :license: GPL-3
   :recipe: /`bioconductor-affixcan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affixcan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affixcan/meta.yaml>`_

   Impute a GReX \(Genetically Regulated Expression\) for a set of genes in a sample of individuals\, using a method based on the Total Binding Affinity \(TBA\). Statistical models to impute GReX can be trained with a training dataset where the real total expression values are known.


.. conda:package:: bioconductor-affixcan

   |downloads_bioconductor-affixcan| |docker_bioconductor-affixcan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-multiassayexperiment: ``>=1.26.0,<1.27.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-crayon: 
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

      mamba install bioconductor-affixcan

   and update with::

      mamba update bioconductor-affixcan

  To create a new environment, run::

      mamba create --name myenvname bioconductor-affixcan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affixcan:<tag>

   (see `bioconductor-affixcan/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affixcan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affixcan.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affixcan
   :alt:   (downloads)
.. |docker_bioconductor-affixcan| image:: https://quay.io/repository/biocontainers/bioconductor-affixcan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affixcan
.. _`bioconductor-affixcan/tags`: https://quay.io/repository/biocontainers/bioconductor-affixcan?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-affixcan";
        var versions = ["1.18.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affixcan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affixcan/README.html