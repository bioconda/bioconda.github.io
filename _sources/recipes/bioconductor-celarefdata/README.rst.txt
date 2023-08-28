:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-celarefdata'
.. highlight: bash

bioconductor-celarefdata
========================

.. conda:recipe:: bioconductor-celarefdata
   :replaces_section_title:
   :noindex:

   Processed scRNA data for celaref Vignette \- cell labelling by reference

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/celarefData.html
   :license: GPL-3
   :recipe: /`bioconductor-celarefdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celarefdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celarefdata/meta.yaml>`_

   This experiment data contains some processed data used in the celaref package vignette. These are publically available datasets\, that have been processed by celaref package\, and can be manipulated further with it.


.. conda:package:: bioconductor-celarefdata

   |downloads_bioconductor-celarefdata| |docker_bioconductor-celarefdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.15.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.7.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.15.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-celarefdata

   and update with::

      mamba update bioconductor-celarefdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-celarefdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-celarefdata:<tag>

   (see `bioconductor-celarefdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-celarefdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-celarefdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-celarefdata
   :alt:   (downloads)
.. |docker_bioconductor-celarefdata| image:: https://quay.io/repository/biocontainers/bioconductor-celarefdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-celarefdata
.. _`bioconductor-celarefdata/tags`: https://quay.io/repository/biocontainers/bioconductor-celarefdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-celarefdata";
        var versions = ["1.18.0","1.15.0","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-celarefdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-celarefdata/README.html