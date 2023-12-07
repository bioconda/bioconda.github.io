:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcwl'
.. highlight: bash

bioconductor-rcwl
=================

.. conda:recipe:: bioconductor-rcwl
   :replaces_section_title:
   :noindex:

   An R interface to the Common Workflow Language

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Rcwl.html
   :license: GPL-2 | file LICENSE
   :recipe: /`bioconductor-rcwl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcwl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcwl/meta.yaml>`_

   The Common Workflow Language \(CWL\) is an open standard for development of data analysis workflows that is portable and scalable across different tools and working environments. Rcwl provides a simple way to wrap command line tools and build CWL data analysis pipelines programmatically within R. It increases the ease of usage\, development\, and maintenance of CWL pipelines.


.. conda:package:: bioconductor-rcwl

   |downloads_bioconductor-rcwl| |docker_bioconductor-rcwl|

   :versions:
      
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.2-0``

      

   
   :depends bioconductor-basilisk: ``>=1.14.0,<1.15.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-batchtools: 
   :depends r-codetools: 
   :depends r-diagrammer: 
   :depends r-r.utils: 
   :depends r-shiny: 
   :depends r-yaml: 
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

      mamba install bioconductor-rcwl

   and update with::

      mamba update bioconductor-rcwl

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rcwl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcwl:<tag>

   (see `bioconductor-rcwl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcwl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcwl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcwl
   :alt:   (downloads)
.. |docker_bioconductor-rcwl| image:: https://quay.io/repository/biocontainers/bioconductor-rcwl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcwl
.. _`bioconductor-rcwl/tags`: https://quay.io/repository/biocontainers/bioconductor-rcwl?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcwl";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcwl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcwl/README.html