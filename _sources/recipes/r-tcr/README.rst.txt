:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tcr'
.. highlight: bash

r-tcr
=====

.. conda:recipe:: r-tcr
   :replaces_section_title:
   :noindex:

   Platform for the advanced analysis of T cell receptor and Immunoglobulin repertoires data and visualisation of the analysis results.

   :homepage: http://imminfo.github.io/tcr/
   :license: APACHE / Apache License 2.0
   :recipe: /`r-tcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tcr/meta.yaml>`_

   


.. conda:package:: r-tcr

   |downloads_r-tcr| |docker_r-tcr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.2-7</code>,  <code>2.3.2-6</code>,  <code>2.3.2-5</code>,  <code>2.3.2-4</code>,  <code>2.3.2-3</code>,  <code>2.3.2-2</code>,  <code>2.3.2-1</code>,  <code>2.3.2-0</code>,  <code>2.2.4.1-1</code>,  </span></summary>
      

      ``2.3.2-7``,  ``2.3.2-6``,  ``2.3.2-5``,  ``2.3.2-4``,  ``2.3.2-3``,  ``2.3.2-2``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.2.4.1-1``,  ``2.2.4.1-0``,  ``2.2.4-1``,  ``2.2.4-0``,  ``2.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libcxx: ``>=18``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: ``>=1.9.0``
   :depends r-dplyr: ``>=0.4.0``
   :depends r-ggplot2: ``>=1.0.0``
   :depends r-gridextra: ``>=0.9.0``
   :depends r-gtable: ``>=0.1.2``
   :depends r-igraph: ``>=0.7.1``
   :depends r-rcpp: ``>=0.11.1``
   :depends r-reshape2: ``>=1.2.0``
   :depends r-scales: ``>=0.3.0``
   :depends r-stringdist: ``>=0.7.3``
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

      mamba install r-tcr

   and update with::

      mamba update r-tcr

  To create a new environment, run::

      mamba create --name myenvname r-tcr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-tcr:<tag>

   (see `r-tcr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-tcr| image:: https://img.shields.io/conda/dn/bioconda/r-tcr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-tcr
   :alt:   (downloads)
.. |docker_r-tcr| image:: https://quay.io/repository/biocontainers/r-tcr/status
   :target: https://quay.io/repository/biocontainers/r-tcr
.. _`r-tcr/tags`: https://quay.io/repository/biocontainers/r-tcr?tab=tags


.. raw:: html

    <script>
        var package = "r-tcr";
        var versions = ["2.3.2","2.3.2","2.3.2","2.3.2","2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tcr/README.html