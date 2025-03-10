:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ritandata'
.. highlight: bash

bioconductor-ritandata
======================

.. conda:recipe:: bioconductor-ritandata
   :replaces_section_title:
   :noindex:

   This package contains reference annotation and network data sets

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/RITANdata.html
   :license: file LICENSE
   :recipe: /`bioconductor-ritandata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ritandata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ritandata/meta.yaml>`_

   Data such as is contained in the two R data files in this package are required for the RITAN package examples. Users are highly encouraged to use their own or additional resources in conjunction with RITANdata. See the RITAN vignettes and RITAN.md for more information\, such as gathering more up\-to\-date annotation data.


.. conda:package:: bioconductor-ritandata

   |downloads_bioconductor-ritandata| |docker_bioconductor-ritandata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.21.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``

      
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

      mamba install bioconductor-ritandata

   and update with::

      mamba update bioconductor-ritandata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ritandata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ritandata:<tag>

   (see `bioconductor-ritandata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ritandata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ritandata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ritandata
   :alt:   (downloads)
.. |docker_bioconductor-ritandata| image:: https://quay.io/repository/biocontainers/bioconductor-ritandata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ritandata
.. _`bioconductor-ritandata/tags`: https://quay.io/repository/biocontainers/bioconductor-ritandata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ritandata";
        var versions = ["1.30.0","1.26.0","1.24.0","1.22.0","1.21.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ritandata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ritandata/README.html