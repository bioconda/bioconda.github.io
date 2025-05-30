:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu2beta7'
.. highlight: bash

bioconductor-hgu2beta7
======================

.. conda:recipe:: bioconductor-hgu2beta7
   :replaces_section_title:
   :noindex:

   A data package containing annotation data for hgu2beta7

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/hgu2beta7.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hgu2beta7 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu2beta7>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu2beta7/meta.yaml>`_

   Annotation data file for hgu2beta7 assembled using data from public data repositories


.. conda:package:: bioconductor-hgu2beta7

   |downloads_bioconductor-hgu2beta7| |docker_bioconductor-hgu2beta7|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.37.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.37.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.29.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``

      
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

      mamba install bioconductor-hgu2beta7

   and update with::

      mamba update bioconductor-hgu2beta7

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hgu2beta7

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu2beta7:<tag>

   (see `bioconductor-hgu2beta7/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu2beta7| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu2beta7.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu2beta7
   :alt:   (downloads)
.. |docker_bioconductor-hgu2beta7| image:: https://quay.io/repository/biocontainers/bioconductor-hgu2beta7/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu2beta7
.. _`bioconductor-hgu2beta7/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu2beta7?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgu2beta7";
        var versions = ["1.46.0","1.42.0","1.40.0","1.37.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu2beta7/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu2beta7/README.html