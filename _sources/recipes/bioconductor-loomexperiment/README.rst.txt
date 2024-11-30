:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-loomexperiment'
.. highlight: bash

bioconductor-loomexperiment
===========================

.. conda:recipe:: bioconductor-loomexperiment
   :replaces_section_title:
   :noindex:

   LoomExperiment container

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/LoomExperiment.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-loomexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-loomexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-loomexperiment/meta.yaml>`_

   The LoomExperiment package provide a means to easily convert the Bioconductor \"Experiment\" classes to loom files and vice versa.


.. conda:package:: bioconductor-loomexperiment

   |downloads_bioconductor-loomexperiment| |docker_bioconductor-loomexperiment|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.1-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.4-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocio: ``>=1.12.0,<1.13.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-hdf5array: ``>=1.30.0,<1.31.0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-stringr: 
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

      mamba install bioconductor-loomexperiment

   and update with::

      mamba update bioconductor-loomexperiment

  To create a new environment, run::

      mamba create --name myenvname bioconductor-loomexperiment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-loomexperiment:<tag>

   (see `bioconductor-loomexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-loomexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-loomexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-loomexperiment
   :alt:   (downloads)
.. |docker_bioconductor-loomexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-loomexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-loomexperiment
.. _`bioconductor-loomexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-loomexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-loomexperiment";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-loomexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-loomexperiment/README.html