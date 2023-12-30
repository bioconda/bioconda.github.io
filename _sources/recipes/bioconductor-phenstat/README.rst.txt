:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phenstat'
.. highlight: bash

bioconductor-phenstat
=====================

.. conda:recipe:: bioconductor-phenstat
   :replaces_section_title:
   :noindex:

   Statistical analysis of phenotypic data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/PhenStat.html
   :license: file LICENSE
   :recipe: /`bioconductor-phenstat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenstat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenstat/meta.yaml>`_

   Package contains methods for statistical analysis of phenotypic data.


.. conda:package:: bioconductor-phenstat

   |downloads_bioconductor-phenstat| |docker_bioconductor-phenstat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.38.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-1</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  </span></summary>
      

      ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.18.1-0``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-car: 
   :depends r-corrplot: 
   :depends r-ggplot2: 
   :depends r-knitr: 
   :depends r-lme4: 
   :depends r-logistf: 
   :depends r-mass: 
   :depends r-msgps: 
   :depends r-nlme: 
   :depends r-nortest: 
   :depends r-pingr: 
   :depends r-reshape: 
   :depends r-smoothwin: 
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

      mamba install bioconductor-phenstat

   and update with::

      mamba update bioconductor-phenstat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-phenstat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phenstat:<tag>

   (see `bioconductor-phenstat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phenstat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phenstat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phenstat
   :alt:   (downloads)
.. |docker_bioconductor-phenstat| image:: https://quay.io/repository/biocontainers/bioconductor-phenstat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phenstat
.. _`bioconductor-phenstat/tags`: https://quay.io/repository/biocontainers/bioconductor-phenstat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phenstat";
        var versions = ["2.38.0","2.36.0","2.34.0","2.30.0","2.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phenstat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phenstat/README.html