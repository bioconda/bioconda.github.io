:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-onlinefdr'
.. highlight: bash

bioconductor-onlinefdr
======================

.. conda:recipe:: bioconductor-onlinefdr
   :replaces_section_title:
   :noindex:

   Online error rate control

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/onlineFDR.html
   :license: GPL-3
   :recipe: /`bioconductor-onlinefdr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-onlinefdr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-onlinefdr/meta.yaml>`_

   This package allows users to control the false discovery rate \(FDR\) or familywise error rate \(FWER\) for online multiple hypothesis testing\, where hypotheses arrive in a stream. In this framework\, a null hypothesis is rejected based on the evidence against it and on the previous rejection decisions.


.. conda:package:: bioconductor-onlinefdr

   |downloads_bioconductor-onlinefdr| |docker_bioconductor-onlinefdr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-2</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.2.0-2</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  </span></summary>
      

      ``2.14.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-progress: 
   :depends r-rcpp: 
   :depends r-rcppprogress: 
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

      mamba install bioconductor-onlinefdr

   and update with::

      mamba update bioconductor-onlinefdr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-onlinefdr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-onlinefdr:<tag>

   (see `bioconductor-onlinefdr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-onlinefdr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-onlinefdr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-onlinefdr
   :alt:   (downloads)
.. |docker_bioconductor-onlinefdr| image:: https://quay.io/repository/biocontainers/bioconductor-onlinefdr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-onlinefdr
.. _`bioconductor-onlinefdr/tags`: https://quay.io/repository/biocontainers/bioconductor-onlinefdr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-onlinefdr";
        var versions = ["2.14.0","2.10.0","2.8.0","2.6.0","2.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-onlinefdr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-onlinefdr/README.html