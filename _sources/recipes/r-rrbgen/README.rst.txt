:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rrbgen'
.. highlight: bash

r-rrbgen
========

.. conda:recipe:: r-rrbgen
   :replaces_section_title:
   :noindex:

   A lightweight limited functionality R bgen read\/write library

   :homepage: https://github.com/rwdavies/rrbgen
   :license: GPL3 / GPL3
   :recipe: /`r-rrbgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rrbgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rrbgen/meta.yaml>`_

   


.. conda:package:: r-rrbgen

   |downloads_r-rrbgen| |docker_r-rrbgen|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.6-12</code>,  <code>0.0.6-11</code>,  <code>0.0.6-10</code>,  <code>0.0.6-9</code>,  <code>0.0.6-8</code>,  <code>0.0.6-7</code>,  <code>0.0.6-6</code>,  <code>0.0.6-5</code>,  <code>0.0.6-4</code>,  </span></summary>
      

      ``0.0.6-12``,  ``0.0.6-11``,  ``0.0.6-10``,  ``0.0.6-9``,  ``0.0.6-8``,  ``0.0.6-7``,  ``0.0.6-6``,  ``0.0.6-5``,  ``0.0.6-4``,  ``0.0.6-3``,  ``0.0.6-2``,  ``0.0.6-1``,  ``0.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-rcpp: ``>=0.12.18``
   :depends r-rcpparmadillo: ``>=0.8.600.0.0``
   :depends r-testthat: ``>=2.0.0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-rrbgen

   and update with::

      mamba update r-rrbgen

  To create a new environment, run::

      mamba create --name myenvname r-rrbgen

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-rrbgen:<tag>

   (see `r-rrbgen/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rrbgen| image:: https://img.shields.io/conda/dn/bioconda/r-rrbgen.svg?style=flat
   :target: https://anaconda.org/bioconda/r-rrbgen
   :alt:   (downloads)
.. |docker_r-rrbgen| image:: https://quay.io/repository/biocontainers/r-rrbgen/status
   :target: https://quay.io/repository/biocontainers/r-rrbgen
.. _`r-rrbgen/tags`: https://quay.io/repository/biocontainers/r-rrbgen?tab=tags


.. raw:: html

    <script>
        var package = "r-rrbgen";
        var versions = ["0.0.6","0.0.6","0.0.6","0.0.6","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rrbgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rrbgen/README.html