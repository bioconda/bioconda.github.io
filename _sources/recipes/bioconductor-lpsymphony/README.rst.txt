:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lpsymphony'
.. highlight: bash

bioconductor-lpsymphony
=======================

.. conda:recipe:: bioconductor-lpsymphony
   :replaces_section_title:
   :noindex:

   Symphony integer linear programming solver in R

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/lpsymphony.html
   :license: EPL
   :recipe: /`bioconductor-lpsymphony <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpsymphony>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpsymphony/meta.yaml>`_
   :links: biotools: :biotools:`lpsymphony`, doi: :doi:`10.1007/0-387-23529-9_5`

   This package was derived from Rsymphony\_0.1\-17 from CRAN. These packages provide an R interface to SYMPHONY\, an open\-source linear programming solver written in C\+\+. The main difference between this package and Rsymphony is that it includes the solver source code \(SYMPHONY version 5.6\)\, while Rsymphony expects to find header and library files on the users\' system. Thus the intention of lpsymphony is to provide an easy to install interface to SYMPHONY. For Windows\, precompiled DLLs are included in this package.


.. conda:package:: bioconductor-lpsymphony

   |downloads_bioconductor-lpsymphony| |docker_bioconductor-lpsymphony|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.1-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.22.0-2</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.1-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.22.0-2``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=14``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-lpsymphony

   and update with::

      mamba update bioconductor-lpsymphony

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lpsymphony

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lpsymphony:<tag>

   (see `bioconductor-lpsymphony/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lpsymphony| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lpsymphony.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lpsymphony
   :alt:   (downloads)
.. |docker_bioconductor-lpsymphony| image:: https://quay.io/repository/biocontainers/bioconductor-lpsymphony/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lpsymphony
.. _`bioconductor-lpsymphony/tags`: https://quay.io/repository/biocontainers/bioconductor-lpsymphony?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lpsymphony";
        var versions = ["1.30.0","1.28.1","1.26.0","1.26.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lpsymphony/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lpsymphony/README.html