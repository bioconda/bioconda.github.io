:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-immunoclust'
.. highlight: bash

bioconductor-immunoclust
========================

.. conda:recipe:: bioconductor-immunoclust
   :replaces_section_title:
   :noindex:

   immunoClust \- Automated Pipeline for Population Detection in Flow Cytometry

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/immunoClust.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-immunoclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunoclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunoclust/meta.yaml>`_

   immunoClust is a model based clustering approach for Flow Cytometry samples. The cell\-events of single Flow Cytometry samples are modelled by a mixture of multinominal normal\- or t\-distributions. The cell\-event clusters of several samples are modelled by a mixture of multinominal normal\-distributions aiming stable co\-clusters across these samples.


.. conda:package:: bioconductor-immunoclust

   |downloads_bioconductor-immunoclust| |docker_bioconductor-immunoclust|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.26.0-2</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-2</code>,  <code>1.22.0-1</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-2``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-flowcore: ``>=2.12.0,<2.13.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-lattice: 
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

      mamba install bioconductor-immunoclust

   and update with::

      mamba update bioconductor-immunoclust

  To create a new environment, run::

      mamba create --name myenvname bioconductor-immunoclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-immunoclust:<tag>

   (see `bioconductor-immunoclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-immunoclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-immunoclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-immunoclust
   :alt:   (downloads)
.. |docker_bioconductor-immunoclust| image:: https://quay.io/repository/biocontainers/bioconductor-immunoclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-immunoclust
.. _`bioconductor-immunoclust/tags`: https://quay.io/repository/biocontainers/bioconductor-immunoclust?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-immunoclust";
        var versions = ["1.32.0","1.30.0","1.30.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-immunoclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-immunoclust/README.html