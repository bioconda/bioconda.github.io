:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-twoddpcr'
.. highlight: bash

bioconductor-twoddpcr
=====================

.. conda:recipe:: bioconductor-twoddpcr
   :replaces_section_title:
   :noindex:

   Classify 2\-d Droplet Digital PCR \(ddPCR\) data and quantify the number of starting molecules

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/twoddpcr.html
   :license: GPL-3
   :recipe: /`bioconductor-twoddpcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-twoddpcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-twoddpcr/meta.yaml>`_

   The twoddpcr package takes Droplet Digital PCR \(ddPCR\) droplet amplitude data from Bio\-Rad\'s QuantaSoft and can classify the droplets. A summary of the positive\/negative droplet counts can be generated\, which can then be used to estimate the number of molecules using the Poisson distribution. This is the first open source package that facilitates the automatic classification of general two channel ddPCR data. Previous work includes \'definetherain\' \(Jones et al.\, 2014\) and \'ddpcRquant\' \(Trypsteen et al.\, 2015\) which both handle one channel ddPCR experiments only. The \'ddpcr\' package available on CRAN \(Attali et al.\, 2016\) supports automatic gating of a specific class of two channel ddPCR experiments only.


.. conda:package:: bioconductor-twoddpcr

   |downloads_bioconductor-twoddpcr| |docker_bioconductor-twoddpcr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-class: 
   :depends r-ggplot2: 
   :depends r-hexbin: 
   :depends r-rcolorbrewer: 
   :depends r-scales: 
   :depends r-shiny: 
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

      mamba install bioconductor-twoddpcr

   and update with::

      mamba update bioconductor-twoddpcr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-twoddpcr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-twoddpcr:<tag>

   (see `bioconductor-twoddpcr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-twoddpcr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-twoddpcr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-twoddpcr
   :alt:   (downloads)
.. |docker_bioconductor-twoddpcr| image:: https://quay.io/repository/biocontainers/bioconductor-twoddpcr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-twoddpcr
.. _`bioconductor-twoddpcr/tags`: https://quay.io/repository/biocontainers/bioconductor-twoddpcr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-twoddpcr";
        var versions = ["1.26.0","1.24.0","1.22.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-twoddpcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-twoddpcr/README.html