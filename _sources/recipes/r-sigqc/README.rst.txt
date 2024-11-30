:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sigqc'
.. highlight: bash

r-sigqc
=======

.. conda:recipe:: r-sigqc
   :replaces_section_title:
   :noindex:

   Provides gene signature quality control metrics in publication ready plots. Namely\, enables the visualization of properties such as expression\, variability\, correlation\, and comparison of methods of standardisation and scoring metrics.

   :homepage: https://CRAN.R-project.org/package=sigQC
   :license: GPL / GPL-3.0-or-later
   :recipe: /`r-sigqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sigqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sigqc/meta.yaml>`_

   


.. conda:package:: r-sigqc

   |downloads_r-sigqc| |docker_r-sigqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.24-0</code>,  <code>0.1.23-1</code>,  <code>0.1.23-0</code>,  <code>0.1.22-2</code>,  <code>0.1.22-1</code>,  <code>0.1.22-0</code>,  <code>0.1.21-4</code>,  <code>0.1.21-3</code>,  <code>0.1.21-2</code>,  </span></summary>
      

      ``0.1.24-0``,  ``0.1.23-1``,  ``0.1.23-0``,  ``0.1.22-2``,  ``0.1.22-1``,  ``0.1.22-0``,  ``0.1.21-4``,  ``0.1.21-3``,  ``0.1.21-2``,  ``0.1.21-1``,  ``0.1.21-0``,  ``0.1.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-complexheatmap: 
   :depends bioconductor-gsva: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biclust: 
   :depends r-circlize: 
   :depends r-class: 
   :depends r-cluster: 
   :depends r-fmsb: 
   :depends r-gplots: 
   :depends r-gridgraphics: 
   :depends r-kernsmooth: 
   :depends r-lattice: 
   :depends r-mass: 
   :depends r-mclust: 
   :depends r-moments: 
   :depends r-nnet: 
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

      mamba install r-sigqc

   and update with::

      mamba update r-sigqc

  To create a new environment, run::

      mamba create --name myenvname r-sigqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-sigqc:<tag>

   (see `r-sigqc/tags`_ for valid values for ``<tag>``)


.. |downloads_r-sigqc| image:: https://img.shields.io/conda/dn/bioconda/r-sigqc.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sigqc
   :alt:   (downloads)
.. |docker_r-sigqc| image:: https://quay.io/repository/biocontainers/r-sigqc/status
   :target: https://quay.io/repository/biocontainers/r-sigqc
.. _`r-sigqc/tags`: https://quay.io/repository/biocontainers/r-sigqc?tab=tags


.. raw:: html

    <script>
        var package = "r-sigqc";
        var versions = ["0.1.24","0.1.23","0.1.23","0.1.22","0.1.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sigqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sigqc/README.html