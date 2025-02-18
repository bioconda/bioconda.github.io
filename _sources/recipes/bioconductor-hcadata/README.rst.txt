:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hcadata'
.. highlight: bash

bioconductor-hcadata
====================

.. conda:recipe:: bioconductor-hcadata
   :replaces_section_title:
   :noindex:

   Accessing The Datasets Of The Human Cell Atlas in R\/Bioconductor

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/HCAData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hcadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hcadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hcadata/meta.yaml>`_

   This package allows a direct access to the dataset generated by the Human Cell Atlas project for further processing in R and Bioconductor\, in the comfortable format of SingleCellExperiment objects \(available in other formats here\: http\:\/\/preview.data.humancellatlas.org\/\).


.. conda:package:: bioconductor-hcadata

   |downloads_bioconductor-hcadata| |docker_bioconductor-hcadata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
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

      mamba install bioconductor-hcadata

   and update with::

      mamba update bioconductor-hcadata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hcadata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hcadata:<tag>

   (see `bioconductor-hcadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hcadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hcadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hcadata
   :alt:   (downloads)
.. |docker_bioconductor-hcadata| image:: https://quay.io/repository/biocontainers/bioconductor-hcadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hcadata
.. _`bioconductor-hcadata/tags`: https://quay.io/repository/biocontainers/bioconductor-hcadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hcadata";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hcadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hcadata/README.html