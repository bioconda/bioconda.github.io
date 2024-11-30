:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fcbf'
.. highlight: bash

bioconductor-fcbf
=================

.. conda:recipe:: bioconductor-fcbf
   :replaces_section_title:
   :noindex:

   Fast Correlation Based Filter for Feature Selection

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/FCBF.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-fcbf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fcbf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fcbf/meta.yaml>`_

   This package provides a simple R implementation for the Fast Correlation Based Filter described in Yu\, L. and Liu\, H.\; Feature Selection for High\-Dimensional Data\: A Fast Correlation Based Filter Solution\,Proc. 20th Intl. Conf. Mach. Learn. \(ICML\-2003\)\, Washington DC\, 2003 The current package is an intent to make easier for bioinformaticians to use FCBF for feature selection\, especially regarding transcriptomic data.This implies discretizing expression \(function discretize\_exprs\) before calculating the features that explain the class\, but are not predictable by other features. The functions are implemented based on the algorithm of Yu and Liu\, 2003 and Rajarshi Guha\'s implementation from 13\/05\/2005 available \(as of 26\/08\/2018\) at http\:\/\/www.rguha.net\/code\/R\/fcbf.R .


.. conda:package:: bioconductor-fcbf

   |downloads_bioconductor-fcbf| |docker_bioconductor-fcbf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.2-0</code>,  </span></summary>
      

      ``2.8.0-0``,  ``2.6.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-mclust: 
   :depends r-pbapply: 
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

      mamba install bioconductor-fcbf

   and update with::

      mamba update bioconductor-fcbf

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fcbf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fcbf:<tag>

   (see `bioconductor-fcbf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fcbf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fcbf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fcbf
   :alt:   (downloads)
.. |docker_bioconductor-fcbf| image:: https://quay.io/repository/biocontainers/bioconductor-fcbf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fcbf
.. _`bioconductor-fcbf/tags`: https://quay.io/repository/biocontainers/bioconductor-fcbf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fcbf";
        var versions = ["2.8.0","2.6.0","2.2.0","2.0.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fcbf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fcbf/README.html