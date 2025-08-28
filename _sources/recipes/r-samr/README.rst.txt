:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-samr'
.. highlight: bash

r-samr
======

.. conda:recipe:: r-samr
   :replaces_section_title:
   :noindex:

   Significance Analysis of Microarrays

   :homepage: http://www-stat.stanford.edu/~tibs/SAM
   :license: LGPL / LGPL
   :recipe: /`r-samr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-samr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-samr/meta.yaml>`_

   


.. conda:package:: r-samr

   |downloads_r-samr| |docker_r-samr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0-8</code>,  <code>3.0-7</code>,  <code>3.0-6</code>,  <code>3.0-5</code>,  <code>3.0-4</code>,  <code>3.0-3</code>,  <code>3.0-2</code>,  <code>3.0-1</code>,  <code>3.0-0</code>,  </span></summary>
      

      ``3.0-8``,  ``3.0-7``,  ``3.0-6``,  ``3.0-5``,  ``3.0-4``,  ``3.0-3``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-impute: ``>=1.56.0``
   :depends libgcc-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gsa: 
   :depends r-matrixstats: 
   :depends r-openxlsx: 
   :depends r-shiny: 
   :depends r-shinyfiles: 
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

      mamba install r-samr

   and update with::

      mamba update r-samr

  To create a new environment, run::

      mamba create --name myenvname r-samr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-samr:<tag>

   (see `r-samr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-samr| image:: https://img.shields.io/conda/dn/bioconda/r-samr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-samr
   :alt:   (downloads)
.. |docker_r-samr| image:: https://quay.io/repository/biocontainers/r-samr/status
   :target: https://quay.io/repository/biocontainers/r-samr
.. _`r-samr/tags`: https://quay.io/repository/biocontainers/r-samr?tab=tags


.. raw:: html

    <script>
        var package = "r-samr";
        var versions = ["3.0","3.0","3.0","3.0","3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-samr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-samr/README.html