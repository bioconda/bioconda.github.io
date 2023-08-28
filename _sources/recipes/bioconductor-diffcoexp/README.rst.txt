:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diffcoexp'
.. highlight: bash

bioconductor-diffcoexp
======================

.. conda:recipe:: bioconductor-diffcoexp
   :replaces_section_title:
   :noindex:

   Differential Co\-expression Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/diffcoexp.html
   :license: GPL (>2)
   :recipe: /`bioconductor-diffcoexp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffcoexp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffcoexp/meta.yaml>`_

   A tool for the identification of differentially coexpressed links \(DCLs\) and differentially coexpressed genes \(DCGs\). DCLs are gene pairs with significantly different correlation coefficients under two conditions. DCGs are genes with significantly more DCLs than by chance.


.. conda:package:: bioconductor-diffcoexp

   |downloads_bioconductor-diffcoexp| |docker_bioconductor-diffcoexp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-diffcorr: 
   :depends r-igraph: 
   :depends r-psych: 
   :depends r-wgcna: 
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

      mamba install bioconductor-diffcoexp

   and update with::

      mamba update bioconductor-diffcoexp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-diffcoexp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-diffcoexp:<tag>

   (see `bioconductor-diffcoexp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-diffcoexp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffcoexp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-diffcoexp
   :alt:   (downloads)
.. |docker_bioconductor-diffcoexp| image:: https://quay.io/repository/biocontainers/bioconductor-diffcoexp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffcoexp
.. _`bioconductor-diffcoexp/tags`: https://quay.io/repository/biocontainers/bioconductor-diffcoexp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-diffcoexp";
        var versions = ["1.20.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffcoexp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffcoexp/README.html