:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-agilp'
.. highlight: bash

bioconductor-agilp
==================

.. conda:recipe:: bioconductor-agilp
   :replaces_section_title:
   :noindex:

   Agilent expression array processing package

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/agilp.html
   :license: GPL-3
   :recipe: /`bioconductor-agilp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-agilp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-agilp/meta.yaml>`_

   More about what it does \(maybe more than one line\)


.. conda:package:: bioconductor-agilp

   |downloads_bioconductor-agilp| |docker_bioconductor-agilp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.32.0-0</code>,  <code>3.30.0-0</code>,  <code>3.26.0-0</code>,  <code>3.24.0-0</code>,  <code>3.22.0-1</code>,  <code>3.22.0-0</code>,  <code>3.20.0-0</code>,  <code>3.18.0-0</code>,  <code>3.16.0-1</code>,  </span></summary>
      

      ``3.32.0-0``,  ``3.30.0-0``,  ``3.26.0-0``,  ``3.24.0-0``,  ``3.22.0-1``,  ``3.22.0-0``,  ``3.20.0-0``,  ``3.18.0-0``,  ``3.16.0-1``,  ``3.16.0-0``,  ``3.14.0-0``,  ``3.12.0-0``,  ``3.10.0-0``,  ``3.8.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-agilp

   and update with::

      mamba update bioconductor-agilp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-agilp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-agilp:<tag>

   (see `bioconductor-agilp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-agilp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-agilp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-agilp
   :alt:   (downloads)
.. |docker_bioconductor-agilp| image:: https://quay.io/repository/biocontainers/bioconductor-agilp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-agilp
.. _`bioconductor-agilp/tags`: https://quay.io/repository/biocontainers/bioconductor-agilp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-agilp";
        var versions = ["3.32.0","3.30.0","3.26.0","3.24.0","3.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-agilp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-agilp/README.html