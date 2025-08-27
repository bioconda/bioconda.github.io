:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-gkmsvm'
.. highlight: bash

r-gkmsvm
========

.. conda:recipe:: r-gkmsvm
   :replaces_section_title:
   :noindex:

   Imports the \'gkmSVM\' v2.0 functionalities into R \<http\:\/\/www.beerlab.org\/gkmsvm\/\> It also uses the \'kernlab\' library \(separate R package by different authors\) for various SVM algorithms.

   :homepage: https://CRAN.R-project.org/package=gkmSVM
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`r-gkmsvm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gkmsvm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gkmsvm/meta.yaml>`_

   


.. conda:package:: r-gkmsvm

   |downloads_r-gkmsvm| |docker_r-gkmsvm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.83.0-1</code>,  <code>0.83.0-0</code>,  <code>0.82.0-3</code>,  <code>0.82.0-2</code>,  <code>0.82.0-1</code>,  <code>0.82.0-0</code>,  <code>0.81.0-4</code>,  <code>0.81.0-3</code>,  <code>0.81.0-2</code>,  </span></summary>
      

      ``0.83.0-1``,  ``0.83.0-0``,  ``0.82.0-3``,  ``0.82.0-2``,  ``0.82.0-1``,  ``0.82.0-0``,  ``0.81.0-4``,  ``0.81.0-3``,  ``0.81.0-2``,  ``0.81.0-1``,  ``0.81.0-0``,  ``0.80.0-1``,  ``0.80.0-0``,  ``0.79.0-1``,  ``0.79.0-0``,  ``0.71.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends libcxx: ``>=18``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-kernlab: 
   :depends r-rcpp: 
   :depends r-rocr: 
   :depends r-seqinr: 
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

      mamba install r-gkmsvm

   and update with::

      mamba update r-gkmsvm

  To create a new environment, run::

      mamba create --name myenvname r-gkmsvm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-gkmsvm:<tag>

   (see `r-gkmsvm/tags`_ for valid values for ``<tag>``)


.. |downloads_r-gkmsvm| image:: https://img.shields.io/conda/dn/bioconda/r-gkmsvm.svg?style=flat
   :target: https://anaconda.org/bioconda/r-gkmsvm
   :alt:   (downloads)
.. |docker_r-gkmsvm| image:: https://quay.io/repository/biocontainers/r-gkmsvm/status
   :target: https://quay.io/repository/biocontainers/r-gkmsvm
.. _`r-gkmsvm/tags`: https://quay.io/repository/biocontainers/r-gkmsvm?tab=tags


.. raw:: html

    <script>
        var package = "r-gkmsvm";
        var versions = ["0.83.0","0.83.0","0.82.0","0.82.0","0.82.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gkmsvm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gkmsvm/README.html