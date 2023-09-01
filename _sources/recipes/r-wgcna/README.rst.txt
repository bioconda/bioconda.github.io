:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-wgcna'
.. highlight: bash

r-wgcna
=======

.. conda:recipe:: r-wgcna
   :replaces_section_title:
   :noindex:

   Functions necessary to perform Weighted Correlation Network Analysis on high\-dimensional data as originally described in Horvath and Zhang \(2005\) \<doi\:10.2202\/1544\-6115.1128\> and Langfelder and Horvath \(2008\) \<doi\:10.1186\/1471\-2105\-9\-559\>. Includes functions for rudimentary data cleaning\, construction of correlation networks\, module identification\, summarization\, and relating of variables and modules to sample traits. Also includes a number of utility functions for data manipulation and visualization.

   :homepage: http://horvath.genetics.ucla.edu/html/CoexpressionNetwork/Rpackages/WGCNA/
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-wgcna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-wgcna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-wgcna/meta.yaml>`_
   :links: biotools: :biotools:`wgcna`, doi: :doi:`10.1186/1471-2105-9-559`

   


.. conda:package:: r-wgcna

   |downloads_r-wgcna| |docker_r-wgcna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.71-4</code>,  <code>1.71-3</code>,  <code>1.71-2</code>,  <code>1.71-0</code>,  <code>1.69-5</code>,  <code>1.69-4</code>,  <code>1.69-3</code>,  <code>1.69-2</code>,  <code>1.69-1</code>,  </span></summary>
      

      ``1.71-4``,  ``1.71-3``,  ``1.71-2``,  ``1.71-0``,  ``1.69-5``,  ``1.69-4``,  ``1.69-3``,  ``1.69-2``,  ``1.69-1``,  ``1.69-0``,  ``1.68-1``,  ``1.68-0``,  ``1.67-0``,  ``1.66-1``,  ``1.66-0``,  ``1.64_1-0``,  ``1.61-0``,  ``1.51-1``,  ``1.51-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: 
   :depends bioconductor-go.db: 
   :depends bioconductor-impute: 
   :depends bioconductor-preprocesscore: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-dynamictreecut: ``>=1.62``
   :depends r-fastcluster: 
   :depends r-foreach: 
   :depends r-hmisc: 
   :depends r-matrixstats: ``>=0.8.1``
   :depends r-rcpp: ``>=0.11.0``
   :depends r-robust: 
   :depends r-survival: 
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

      mamba install r-wgcna

   and update with::

      mamba update r-wgcna

  To create a new environment, run::

      mamba create --name myenvname r-wgcna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-wgcna:<tag>

   (see `r-wgcna/tags`_ for valid values for ``<tag>``)


.. |downloads_r-wgcna| image:: https://img.shields.io/conda/dn/bioconda/r-wgcna.svg?style=flat
   :target: https://anaconda.org/bioconda/r-wgcna
   :alt:   (downloads)
.. |docker_r-wgcna| image:: https://quay.io/repository/biocontainers/r-wgcna/status
   :target: https://quay.io/repository/biocontainers/r-wgcna
.. _`r-wgcna/tags`: https://quay.io/repository/biocontainers/r-wgcna?tab=tags


.. raw:: html

    <script>
        var package = "r-wgcna";
        var versions = ["1.71","1.71","1.71","1.71","1.69"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-wgcna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-wgcna/README.html