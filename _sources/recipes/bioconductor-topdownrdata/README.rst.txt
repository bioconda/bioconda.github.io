:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-topdownrdata'
.. highlight: bash

bioconductor-topdownrdata
=========================

.. conda:recipe:: bioconductor-topdownrdata
   :replaces_section_title:
   :noindex:

   Example Files for the topdownr R Package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/topdownrdata.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-topdownrdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topdownrdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topdownrdata/meta.yaml>`_

   Example data for the topdownr package generated on a Thermo Orbitrap Fusion Lumos MS device.


.. conda:package:: bioconductor-topdownrdata

   |downloads_bioconductor-topdownrdata| |docker_bioconductor-topdownrdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-topdownr: ``>=1.28.0,<1.29.0``
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

      mamba install bioconductor-topdownrdata

   and update with::

      mamba update bioconductor-topdownrdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-topdownrdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-topdownrdata:<tag>

   (see `bioconductor-topdownrdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-topdownrdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-topdownrdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-topdownrdata
   :alt:   (downloads)
.. |docker_bioconductor-topdownrdata| image:: https://quay.io/repository/biocontainers/bioconductor-topdownrdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-topdownrdata
.. _`bioconductor-topdownrdata/tags`: https://quay.io/repository/biocontainers/bioconductor-topdownrdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-topdownrdata";
        var versions = ["1.28.0","1.24.0","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-topdownrdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-topdownrdata/README.html