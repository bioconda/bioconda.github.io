:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-empiricalbrownsmethod'
.. highlight: bash

bioconductor-empiricalbrownsmethod
==================================

.. conda:recipe:: bioconductor-empiricalbrownsmethod
   :replaces_section_title:
   :noindex:

   Uses Brown\'s method to combine p\-values from dependent tests

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/EmpiricalBrownsMethod.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-empiricalbrownsmethod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-empiricalbrownsmethod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-empiricalbrownsmethod/meta.yaml>`_
   :links: biotools: :biotools:`empiricalbrownsmethod`, doi: :doi:`10.1093/bioinformatics/btw438`

   Combining P\-values from multiple statistical tests is common in bioinformatics. However\, this procedure is non\-trivial for dependent P\-values. This package implements an empirical adaptation of Brown’s Method \(an extension of Fisher’s Method\) for combining dependent P\-values which is appropriate for highly correlated data sets found in high\-throughput biological experiments.


.. conda:package:: bioconductor-empiricalbrownsmethod

   |downloads_bioconductor-empiricalbrownsmethod| |docker_bioconductor-empiricalbrownsmethod|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-empiricalbrownsmethod

   and update with::

      mamba update bioconductor-empiricalbrownsmethod

  To create a new environment, run::

      mamba create --name myenvname bioconductor-empiricalbrownsmethod

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-empiricalbrownsmethod:<tag>

   (see `bioconductor-empiricalbrownsmethod/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-empiricalbrownsmethod| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-empiricalbrownsmethod.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-empiricalbrownsmethod
   :alt:   (downloads)
.. |docker_bioconductor-empiricalbrownsmethod| image:: https://quay.io/repository/biocontainers/bioconductor-empiricalbrownsmethod/status
   :target: https://quay.io/repository/biocontainers/bioconductor-empiricalbrownsmethod
.. _`bioconductor-empiricalbrownsmethod/tags`: https://quay.io/repository/biocontainers/bioconductor-empiricalbrownsmethod?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-empiricalbrownsmethod";
        var versions = ["1.34.0","1.30.0","1.28.0","1.26.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-empiricalbrownsmethod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-empiricalbrownsmethod/README.html