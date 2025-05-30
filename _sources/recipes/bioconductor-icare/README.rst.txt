:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-icare'
.. highlight: bash

bioconductor-icare
==================

.. conda:recipe:: bioconductor-icare
   :replaces_section_title:
   :noindex:

   Individualized Coherent Absolute Risk Estimation \(iCARE\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/iCARE.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-icare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icare/meta.yaml>`_

   An R package to build\, validate and apply absolute risk models


.. conda:package:: bioconductor-icare

   |downloads_bioconductor-icare| |docker_bioconductor-icare|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.22.0-2</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.22.0-2``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.3-0``,  ``1.10.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-gtools: 
   :depends r-hmisc: 
   :depends r-plotrix: 
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

      mamba install bioconductor-icare

   and update with::

      mamba update bioconductor-icare

  To create a new environment, run::

      mamba create --name myenvname bioconductor-icare

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-icare:<tag>

   (see `bioconductor-icare/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-icare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-icare.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-icare
   :alt:   (downloads)
.. |docker_bioconductor-icare| image:: https://quay.io/repository/biocontainers/bioconductor-icare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-icare
.. _`bioconductor-icare/tags`: https://quay.io/repository/biocontainers/bioconductor-icare?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-icare";
        var versions = ["1.34.0","1.30.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-icare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-icare/README.html