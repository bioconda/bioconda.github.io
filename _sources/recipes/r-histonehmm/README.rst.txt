:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-histonehmm'
.. highlight: bash

r-histonehmm
============

.. conda:recipe:: r-histonehmm
   :replaces_section_title:
   :noindex:

   histoneHMM is a software to analyse ChIP\-seq data of histone modifications with broad genomic footprints like H3K27me3. It allows for calling modified regions in single samples as well as for calling differentially modified regions in a comparison of two samples.

   :homepage: http://histonehmm.molgen.mpg.de
   :developer docs: https://github.com/matthiasheinig/histoneHMM
   :license: GPL
   :recipe: /`r-histonehmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-histonehmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-histonehmm/meta.yaml>`_

   


.. conda:package:: r-histonehmm

   |downloads_r-histonehmm| |docker_r-histonehmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8-8</code>,  <code>1.8-6</code>,  <code>1.8-5</code>,  <code>1.8-4</code>,  <code>1.8-3</code>,  <code>1.8-2</code>,  <code>1.8-1</code>,  <code>1.8-0</code>,  <code>1.7.1-1</code>,  </span></summary>
      

      ``1.8-8``,  ``1.8-6``,  ``1.8-5``,  ``1.8-4``,  ``1.8-3``,  ``1.8-2``,  ``1.8-1``,  ``1.8-0``,  ``1.7.1-1``,  ``1.7.1-0``,  ``1.7-1``,  ``1.7-0``,  ``1.6-1``,  ``1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocstyle: ``>=2.34.0,<2.35.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.4.0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-mvtnorm: 
   :depends r-optparse: 
   :depends r-rcpp: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-histonehmm

   and update with::

      mamba update r-histonehmm

  To create a new environment, run::

      mamba create --name myenvname r-histonehmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-histonehmm:<tag>

   (see `r-histonehmm/tags`_ for valid values for ``<tag>``)


.. |downloads_r-histonehmm| image:: https://img.shields.io/conda/dn/bioconda/r-histonehmm.svg?style=flat
   :target: https://anaconda.org/bioconda/r-histonehmm
   :alt:   (downloads)
.. |docker_r-histonehmm| image:: https://quay.io/repository/biocontainers/r-histonehmm/status
   :target: https://quay.io/repository/biocontainers/r-histonehmm
.. _`r-histonehmm/tags`: https://quay.io/repository/biocontainers/r-histonehmm?tab=tags


.. raw:: html

    <script>
        var package = "r-histonehmm";
        var versions = ["1.8","1.8","1.8","1.8","1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-histonehmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-histonehmm/README.html