:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-frgepistasis'
.. highlight: bash

bioconductor-frgepistasis
=========================

.. conda:recipe:: bioconductor-frgepistasis
   :replaces_section_title:
   :noindex:

   Epistasis Analysis for Quantitative Traits by Functional Regression Model

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/FRGEpistasis.html
   :license: GPL-2
   :recipe: /`bioconductor-frgepistasis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-frgepistasis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-frgepistasis/meta.yaml>`_

   A Tool for Epistasis Analysis Based on Functional Regression Model


.. conda:package:: bioconductor-frgepistasis

   |downloads_bioconductor-frgepistasis| |docker_bioconductor-frgepistasis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fda: 
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-frgepistasis

   and update with::

      mamba update bioconductor-frgepistasis

  To create a new environment, run::

      mamba create --name myenvname bioconductor-frgepistasis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-frgepistasis:<tag>

   (see `bioconductor-frgepistasis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-frgepistasis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-frgepistasis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-frgepistasis
   :alt:   (downloads)
.. |docker_bioconductor-frgepistasis| image:: https://quay.io/repository/biocontainers/bioconductor-frgepistasis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-frgepistasis
.. _`bioconductor-frgepistasis/tags`: https://quay.io/repository/biocontainers/bioconductor-frgepistasis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-frgepistasis";
        var versions = ["1.36.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-frgepistasis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-frgepistasis/README.html