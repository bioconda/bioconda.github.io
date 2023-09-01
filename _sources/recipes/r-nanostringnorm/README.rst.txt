:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-nanostringnorm'
.. highlight: bash

r-nanostringnorm
================

.. conda:recipe:: r-nanostringnorm
   :replaces_section_title:
   :noindex:

   A set of tools for normalizing\, diagnostics and visualization of NanoString nCounter data.

   :homepage: https://CRAN.R-project.org/package=NanoStringNorm
   :license: GPL2 / GPL-2.0-only
   :recipe: /`r-nanostringnorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nanostringnorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nanostringnorm/meta.yaml>`_

   


.. conda:package:: r-nanostringnorm

   |downloads_r-nanostringnorm| |docker_r-nanostringnorm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1.1-4</code>,  <code>1.2.1.1-3</code>,  <code>1.2.1.1-2</code>,  <code>1.2.1.1-1</code>,  <code>1.2.1.1-0</code>,  <code>1.2.1-3</code>,  <code>1.2.1-2</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  </span></summary>
      

      ``1.2.1.1-4``,  ``1.2.1.1-3``,  ``1.2.1.1-2``,  ``1.2.1.1-1``,  ``1.2.1.1-0``,  ``1.2.1-3``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.1.21-2``,  ``1.1.21-1``,  ``1.1.21-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-vsn: ``>=3.22.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gdata: ``>=2.8.2``
   :depends r-xml: ``>=3.98_1.5``
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

      mamba install r-nanostringnorm

   and update with::

      mamba update r-nanostringnorm

  To create a new environment, run::

      mamba create --name myenvname r-nanostringnorm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-nanostringnorm:<tag>

   (see `r-nanostringnorm/tags`_ for valid values for ``<tag>``)


.. |downloads_r-nanostringnorm| image:: https://img.shields.io/conda/dn/bioconda/r-nanostringnorm.svg?style=flat
   :target: https://anaconda.org/bioconda/r-nanostringnorm
   :alt:   (downloads)
.. |docker_r-nanostringnorm| image:: https://quay.io/repository/biocontainers/r-nanostringnorm/status
   :target: https://quay.io/repository/biocontainers/r-nanostringnorm
.. _`r-nanostringnorm/tags`: https://quay.io/repository/biocontainers/r-nanostringnorm?tab=tags


.. raw:: html

    <script>
        var package = "r-nanostringnorm";
        var versions = ["1.2.1.1","1.2.1.1","1.2.1.1","1.2.1.1","1.2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-nanostringnorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-nanostringnorm/README.html