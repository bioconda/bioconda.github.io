:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sbmlr'
.. highlight: bash

bioconductor-sbmlr
==================

.. conda:recipe:: bioconductor-sbmlr
   :replaces_section_title:
   :noindex:

   SBML\-R Interface and Analysis Tools

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SBMLR.html
   :license: GPL-2
   :recipe: /`bioconductor-sbmlr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sbmlr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sbmlr/meta.yaml>`_

   This package contains a systems biology markup language \(SBML\) interface to R.


.. conda:package:: bioconductor-sbmlr

   |downloads_bioconductor-sbmlr| |docker_bioconductor-sbmlr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.96.0-0</code>,  <code>1.94.0-0</code>,  <code>1.90.0-0</code>,  <code>1.88.0-0</code>,  <code>1.86.0-1</code>,  <code>1.86.0-0</code>,  <code>1.84.0-0</code>,  <code>1.82.0-0</code>,  <code>1.80.0-1</code>,  </span></summary>
      

      ``1.96.0-0``,  ``1.94.0-0``,  ``1.90.0-0``,  ``1.88.0-0``,  ``1.86.0-1``,  ``1.86.0-0``,  ``1.84.0-0``,  ``1.82.0-0``,  ``1.80.0-1``,  ``1.80.0-0``,  ``1.78.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-desolve: 
   :depends r-xml: 
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

      mamba install bioconductor-sbmlr

   and update with::

      mamba update bioconductor-sbmlr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sbmlr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sbmlr:<tag>

   (see `bioconductor-sbmlr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sbmlr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sbmlr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sbmlr
   :alt:   (downloads)
.. |docker_bioconductor-sbmlr| image:: https://quay.io/repository/biocontainers/bioconductor-sbmlr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sbmlr
.. _`bioconductor-sbmlr/tags`: https://quay.io/repository/biocontainers/bioconductor-sbmlr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sbmlr";
        var versions = ["1.96.0","1.94.0","1.90.0","1.88.0","1.86.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sbmlr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sbmlr/README.html