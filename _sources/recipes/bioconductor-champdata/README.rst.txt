:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-champdata'
.. highlight: bash

bioconductor-champdata
======================

.. conda:recipe:: bioconductor-champdata
   :replaces_section_title:
   :noindex:

   Data Packages for ChAMP package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/ChAMPdata.html
   :license: GPL-3
   :recipe: /`bioconductor-champdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-champdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-champdata/meta.yaml>`_

   Provides datasets needed for ChAMP including a test dataset and blood controls for CNA analysis.


.. conda:package:: bioconductor-champdata

   |downloads_bioconductor-champdata| |docker_bioconductor-champdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.34.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.26.0-1</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.20.0-1</code>,  </span></summary>
      

      ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.14.1-0``,  ``2.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
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

      mamba install bioconductor-champdata

   and update with::

      mamba update bioconductor-champdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-champdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-champdata:<tag>

   (see `bioconductor-champdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-champdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-champdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-champdata
   :alt:   (downloads)
.. |docker_bioconductor-champdata| image:: https://quay.io/repository/biocontainers/bioconductor-champdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-champdata
.. _`bioconductor-champdata/tags`: https://quay.io/repository/biocontainers/bioconductor-champdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-champdata";
        var versions = ["2.34.0","2.32.0","2.30.0","2.26.0","2.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-champdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-champdata/README.html