:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-calm'
.. highlight: bash

bioconductor-calm
=================

.. conda:recipe:: bioconductor-calm
   :replaces_section_title:
   :noindex:

   Covariate Assisted Large\-scale Multiple testing

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/calm.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-calm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-calm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-calm/meta.yaml>`_

   Statistical methods for multiple testing with covariate information. Traditional multiple testing methods only consider a list of test statistics\, such as p\-values. Our methods incorporate the auxiliary information\, such as the lengths of gene coding regions or the minor allele frequencies of SNPs\, to improve power.


.. conda:package:: bioconductor-calm

   |downloads_bioconductor-calm| |docker_bioconductor-calm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mgcv: 
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

      mamba install bioconductor-calm

   and update with::

      mamba update bioconductor-calm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-calm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-calm:<tag>

   (see `bioconductor-calm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-calm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-calm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-calm
   :alt:   (downloads)
.. |docker_bioconductor-calm| image:: https://quay.io/repository/biocontainers/bioconductor-calm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-calm
.. _`bioconductor-calm/tags`: https://quay.io/repository/biocontainers/bioconductor-calm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-calm";
        var versions = ["1.16.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-calm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-calm/README.html