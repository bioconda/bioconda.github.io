:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cssam'
.. highlight: bash

r-cssam
=======

.. conda:recipe:: r-cssam
   :replaces_section_title:
   :noindex:

   Cell\-type specific differential expression of a microarray experiment of heterogeneous tissue samples\, using SAM.

   :homepage: https://github.com/shenorrLab/csSAM
   :license: GPL / LGPL
   :recipe: /`r-cssam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cssam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cssam/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.1439`

   


.. conda:package:: r-cssam

   |downloads_r-cssam| |docker_r-cssam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4-8</code>,  <code>1.4-7</code>,  <code>1.4-6</code>,  <code>1.4-5</code>,  <code>1.4-4</code>,  <code>1.4-3</code>,  <code>1.4-2</code>,  <code>1.4-1</code>,  <code>1.4-0</code>,  </span></summary>
      

      ``1.4-8``,  ``1.4-7``,  ``1.4-6``,  ``1.4-5``,  ``1.4-4``,  ``1.4-3``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``,  ``0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.50.0``
   :depends libcxx: ``>=18``
   :depends r-base: ``>=4.0.5``
   :depends r-formula: ``>=1.2_4``
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-pkgmaker: ``>=0.32.2``
   :depends r-plyr: ``>=1.8.6``
   :depends r-rcpp: ``>=1.0.7``
   :depends r-rngtools: ``>=1.5.2``
   :depends r-scales: ``>=1.1.1``
   :depends xbioc: ``>=0.1.19``
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

      mamba install r-cssam

   and update with::

      mamba update r-cssam

  To create a new environment, run::

      mamba create --name myenvname r-cssam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-cssam:<tag>

   (see `r-cssam/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cssam| image:: https://img.shields.io/conda/dn/bioconda/r-cssam.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cssam
   :alt:   (downloads)
.. |docker_r-cssam| image:: https://quay.io/repository/biocontainers/r-cssam/status
   :target: https://quay.io/repository/biocontainers/r-cssam
.. _`r-cssam/tags`: https://quay.io/repository/biocontainers/r-cssam?tab=tags


.. raw:: html

    <script>
        var package = "r-cssam";
        var versions = ["1.4","1.4","1.4","1.4","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cssam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cssam/README.html