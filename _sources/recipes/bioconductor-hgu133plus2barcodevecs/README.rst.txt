:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu133plus2barcodevecs'
.. highlight: bash

bioconductor-hgu133plus2barcodevecs
===================================

.. conda:recipe:: bioconductor-hgu133plus2barcodevecs
   :replaces_section_title:
   :noindex:

   hgu133plus2 data for barcode

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/hgu133plus2barcodevecs.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hgu133plus2barcodevecs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133plus2barcodevecs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133plus2barcodevecs/meta.yaml>`_

   Data used by the barcode package for microarrays of type hgu133plus2.


.. conda:package:: bioconductor-hgu133plus2barcodevecs

   |downloads_bioconductor-hgu133plus2barcodevecs| |docker_bioconductor-hgu133plus2barcodevecs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.35.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.35.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-hgu133plus2barcodevecs

   and update with::

      mamba update bioconductor-hgu133plus2barcodevecs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hgu133plus2barcodevecs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu133plus2barcodevecs:<tag>

   (see `bioconductor-hgu133plus2barcodevecs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu133plus2barcodevecs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu133plus2barcodevecs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu133plus2barcodevecs
   :alt:   (downloads)
.. |docker_bioconductor-hgu133plus2barcodevecs| image:: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2barcodevecs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2barcodevecs
.. _`bioconductor-hgu133plus2barcodevecs/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2barcodevecs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgu133plus2barcodevecs";
        var versions = ["1.40.0","1.38.0","1.35.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu133plus2barcodevecs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu133plus2barcodevecs/README.html