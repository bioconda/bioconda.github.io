:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocsklearn'
.. highlight: bash

bioconductor-biocsklearn
========================

.. conda:recipe:: bioconductor-biocsklearn
   :replaces_section_title:
   :noindex:

   interface to python sklearn via Rstudio reticulate

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BiocSklearn.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocsklearn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocsklearn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocsklearn/meta.yaml>`_

   This package provides interfaces to selected sklearn elements\, and demonstrates fault tolerant use of python modules requiring extensive iteration.


.. conda:package:: bioconductor-biocsklearn

   |downloads_bioconductor-biocsklearn| |docker_bioconductor-biocsklearn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-3</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-3``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.3-1``,  ``1.10.3-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-basilisk: ``>=1.18.0,<1.19.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends python: ``>=2.7``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-reticulate: 
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

      mamba install bioconductor-biocsklearn

   and update with::

      mamba update bioconductor-biocsklearn

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biocsklearn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocsklearn:<tag>

   (see `bioconductor-biocsklearn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocsklearn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocsklearn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocsklearn
   :alt:   (downloads)
.. |docker_bioconductor-biocsklearn| image:: https://quay.io/repository/biocontainers/bioconductor-biocsklearn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocsklearn
.. _`bioconductor-biocsklearn/tags`: https://quay.io/repository/biocontainers/bioconductor-biocsklearn?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocsklearn";
        var versions = ["1.28.0","1.24.0","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocsklearn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocsklearn/README.html