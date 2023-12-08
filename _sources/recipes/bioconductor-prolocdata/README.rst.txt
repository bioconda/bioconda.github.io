:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prolocdata'
.. highlight: bash

bioconductor-prolocdata
=======================

.. conda:recipe:: bioconductor-prolocdata
   :replaces_section_title:
   :noindex:

   Data accompanying the pRoloc package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/pRolocdata.html
   :license: GPL-2
   :recipe: /`bioconductor-prolocdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prolocdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prolocdata/meta.yaml>`_

   Mass\-spectrometry based spatial proteomics data sets and protein complex separation data. Also contains the time course expression experiment from Mulvey et al. 2015.


.. conda:package:: bioconductor-prolocdata

   |downloads_bioconductor-prolocdata| |docker_bioconductor-prolocdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-msnbase: ``>=2.28.0,<2.29.0``
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

      mamba install bioconductor-prolocdata

   and update with::

      mamba update bioconductor-prolocdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-prolocdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-prolocdata:<tag>

   (see `bioconductor-prolocdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-prolocdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prolocdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prolocdata
   :alt:   (downloads)
.. |docker_bioconductor-prolocdata| image:: https://quay.io/repository/biocontainers/bioconductor-prolocdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prolocdata
.. _`bioconductor-prolocdata/tags`: https://quay.io/repository/biocontainers/bioconductor-prolocdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-prolocdata";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prolocdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prolocdata/README.html