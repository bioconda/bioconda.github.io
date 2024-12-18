:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomationdata'
.. highlight: bash

bioconductor-genomationdata
===========================

.. conda:recipe:: bioconductor-genomationdata
   :replaces_section_title:
   :noindex:

   Experimental data for showing functionalities of the genomation package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/genomationData.html
   :license: GPL-3
   :recipe: /`bioconductor-genomationdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomationdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomationdata/meta.yaml>`_

   The package contains Chip Seq\, Methylation and Cage data\, downloaded from Encode


.. conda:package:: bioconductor-genomationdata

   |downloads_bioconductor-genomationdata| |docker_bioconductor-genomationdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.29.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.29.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``

      
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

      mamba install bioconductor-genomationdata

   and update with::

      mamba update bioconductor-genomationdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genomationdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomationdata:<tag>

   (see `bioconductor-genomationdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomationdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomationdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomationdata
   :alt:   (downloads)
.. |docker_bioconductor-genomationdata| image:: https://quay.io/repository/biocontainers/bioconductor-genomationdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomationdata
.. _`bioconductor-genomationdata/tags`: https://quay.io/repository/biocontainers/bioconductor-genomationdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomationdata";
        var versions = ["1.38.0","1.34.0","1.32.0","1.29.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomationdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomationdata/README.html