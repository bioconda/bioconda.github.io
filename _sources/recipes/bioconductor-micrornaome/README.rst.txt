:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-micrornaome'
.. highlight: bash

bioconductor-micrornaome
========================

.. conda:recipe:: bioconductor-micrornaome
   :replaces_section_title:
   :noindex:

   SummarizedExperiment for the microRNAome project

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/microRNAome.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-micrornaome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-micrornaome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-micrornaome/meta.yaml>`_

   This package provides a SummarizedExperiment object of read counts for microRNAs across tissues\, cell\-types\, and cancer cell\-lines. The read count matrix was prepared and provided by the author of the study\: Towards the human cellular microRNAome.


.. conda:package:: bioconductor-micrornaome

   |downloads_bioconductor-micrornaome| |docker_bioconductor-micrornaome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends curl: 
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

      mamba install bioconductor-micrornaome

   and update with::

      mamba update bioconductor-micrornaome

  To create a new environment, run::

      mamba create --name myenvname bioconductor-micrornaome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-micrornaome:<tag>

   (see `bioconductor-micrornaome/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-micrornaome| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-micrornaome.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-micrornaome
   :alt:   (downloads)
.. |docker_bioconductor-micrornaome| image:: https://quay.io/repository/biocontainers/bioconductor-micrornaome/status
   :target: https://quay.io/repository/biocontainers/bioconductor-micrornaome
.. _`bioconductor-micrornaome/tags`: https://quay.io/repository/biocontainers/bioconductor-micrornaome?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-micrornaome";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-micrornaome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-micrornaome/README.html