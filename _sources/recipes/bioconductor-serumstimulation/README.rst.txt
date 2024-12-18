:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-serumstimulation'
.. highlight: bash

bioconductor-serumstimulation
=============================

.. conda:recipe:: bioconductor-serumstimulation
   :replaces_section_title:
   :noindex:

   serumStimulation is a data package which is used by examples in package pcaGoPromoter

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/serumStimulation.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-serumstimulation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-serumstimulation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-serumstimulation/meta.yaml>`_

   Contains 13 micro array data results from a serum stimulation experiment


.. conda:package:: bioconductor-serumstimulation

   |downloads_bioconductor-serumstimulation| |docker_bioconductor-serumstimulation|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.33.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.33.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-serumstimulation

   and update with::

      mamba update bioconductor-serumstimulation

  To create a new environment, run::

      mamba create --name myenvname bioconductor-serumstimulation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-serumstimulation:<tag>

   (see `bioconductor-serumstimulation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-serumstimulation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-serumstimulation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-serumstimulation
   :alt:   (downloads)
.. |docker_bioconductor-serumstimulation| image:: https://quay.io/repository/biocontainers/bioconductor-serumstimulation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-serumstimulation
.. _`bioconductor-serumstimulation/tags`: https://quay.io/repository/biocontainers/bioconductor-serumstimulation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-serumstimulation";
        var versions = ["1.42.0","1.38.0","1.36.0","1.33.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-serumstimulation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-serumstimulation/README.html