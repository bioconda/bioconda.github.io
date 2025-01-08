:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-messina'
.. highlight: bash

bioconductor-messina
====================

.. conda:recipe:: bioconductor-messina
   :replaces_section_title:
   :noindex:

   Single\-gene classifiers and outlier\-resistant detection of differential expression for two\-group and survival problems

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/messina.html
   :license: EPL (>= 1.0)
   :recipe: /`bioconductor-messina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-messina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-messina/meta.yaml>`_
   :links: biotools: :biotools:`messina`

   Messina is a collection of algorithms for constructing optimally robust single\-gene classifiers\, and for identifying differential expression in the presence of outliers or unknown sample subgroups.  The methods have application in identifying lead features to develop into clinical tests \(both diagnostic and prognostic\)\, and in identifying differential expression when a fraction of samples show unusual patterns of expression.


.. conda:package:: bioconductor-messina

   |downloads_bioconductor-messina| |docker_bioconductor-messina|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-2</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.30.0-2</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.30.0-2``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-foreach: ``>=1.4.1``
   :depends r-ggplot2: ``>=0.9.3.1``
   :depends r-plyr: ``>=1.8``
   :depends r-rcpp: ``>=0.11.1``
   :depends r-survival: ``>=2.37-4``
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

      mamba install bioconductor-messina

   and update with::

      mamba update bioconductor-messina

  To create a new environment, run::

      mamba create --name myenvname bioconductor-messina

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-messina:<tag>

   (see `bioconductor-messina/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-messina| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-messina.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-messina
   :alt:   (downloads)
.. |docker_bioconductor-messina| image:: https://quay.io/repository/biocontainers/bioconductor-messina/status
   :target: https://quay.io/repository/biocontainers/bioconductor-messina
.. _`bioconductor-messina/tags`: https://quay.io/repository/biocontainers/bioconductor-messina?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-messina";
        var versions = ["1.42.0","1.38.0","1.36.0","1.34.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-messina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-messina/README.html