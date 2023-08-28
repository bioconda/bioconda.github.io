:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-diffcorr'
.. highlight: bash

r-diffcorr
==========

.. conda:recipe:: r-diffcorr
   :replaces_section_title:
   :noindex:

   A method for identifying pattern changes between 2 experimental conditions in correlation networks \(e.g.\, gene co\-expression networks\)\, which builds on a commonly used association measure\, such as Pearson\'s correlation coefficient. This package includes functions to calculate correlation matrices for high\-dimensional dataset and to test differential correlation\, which means the changes in the correlation relationship among variables \(e.g.\, genes and metabolites\) between 2 experimental conditions. 

   :homepage: https://CRAN.R-project.org/package=DiffCorr
   :license: GPL3 / GPL3
   :recipe: /`r-diffcorr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-diffcorr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-diffcorr/meta.yaml>`_

   


.. conda:package:: r-diffcorr

   |downloads_r-diffcorr| |docker_r-diffcorr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.3-0</code>,  <code>0.4.2-2</code>,  <code>0.4.2-1</code>,  <code>0.4.2-0</code>,  <code>0.4.1-6</code>,  <code>0.4.1-5</code>,  <code>0.4.1-4</code>,  <code>0.4.1-3</code>,  <code>0.4.1-2</code>,  </span></summary>
      

      ``0.4.3-0``,  ``0.4.2-2``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-6``,  ``0.4.1-5``,  ``0.4.1-4``,  ``0.4.1-3``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-multtest: 
   :depends bioconductor-pcamethods: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fdrtool: 
   :depends r-igraph: 
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

      mamba install r-diffcorr

   and update with::

      mamba update r-diffcorr

  To create a new environment, run::

      mamba create --name myenvname r-diffcorr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-diffcorr:<tag>

   (see `r-diffcorr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-diffcorr| image:: https://img.shields.io/conda/dn/bioconda/r-diffcorr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-diffcorr
   :alt:   (downloads)
.. |docker_r-diffcorr| image:: https://quay.io/repository/biocontainers/r-diffcorr/status
   :target: https://quay.io/repository/biocontainers/r-diffcorr
.. _`r-diffcorr/tags`: https://quay.io/repository/biocontainers/r-diffcorr?tab=tags


.. raw:: html

    <script>
        var package = "r-diffcorr";
        var versions = ["0.4.3","0.4.2","0.4.2","0.4.2","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-diffcorr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-diffcorr/README.html