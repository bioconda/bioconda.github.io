:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggpa'
.. highlight: bash

bioconductor-ggpa
=================

.. conda:recipe:: bioconductor-ggpa
   :replaces_section_title:
   :noindex:

   graph\-GPA\: A graphical model for prioritizing GWAS results and investigating pleiotropic architecture

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GGPA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ggpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggpa/meta.yaml>`_

   Genome\-wide association studies \(GWAS\) is a widely used tool for identification of genetic variants associated with phenotypes and diseases\, though complex diseases featuring many genetic variants with small effects present difficulties for traditional these studies. By leveraging pleiotropy\, the statistical power of a single GWAS can be increased. This package provides functions for fitting graph\-GPA\, a statistical framework to prioritize GWAS results by integrating pleiotropy. \'GGPA\' package provides user\-friendly interface to fit graph\-GPA models\, implement association mapping\, and generate a phenotype graph.


.. conda:package:: bioconductor-ggpa

   |downloads_bioconductor-ggpa| |docker_bioconductor-ggpa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.12.1-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.12.1-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggally: 
   :depends r-matrixstats: 
   :depends r-network: 
   :depends r-rcpp: ``>=0.11.3``
   :depends r-rcpparmadillo: 
   :depends r-scales: 
   :depends r-sna: 
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

      mamba install bioconductor-ggpa

   and update with::

      mamba update bioconductor-ggpa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ggpa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggpa:<tag>

   (see `bioconductor-ggpa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggpa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggpa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggpa
   :alt:   (downloads)
.. |docker_bioconductor-ggpa| image:: https://quay.io/repository/biocontainers/bioconductor-ggpa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggpa
.. _`bioconductor-ggpa/tags`: https://quay.io/repository/biocontainers/bioconductor-ggpa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggpa";
        var versions = ["1.12.1","1.10.0","1.10.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggpa/README.html