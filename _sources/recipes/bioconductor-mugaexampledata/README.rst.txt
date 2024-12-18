:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mugaexampledata'
.. highlight: bash

bioconductor-mugaexampledata
============================

.. conda:recipe:: bioconductor-mugaexampledata
   :replaces_section_title:
   :noindex:

   Example \{M\}ouse \{U\}niversal \{G\}enotyping \{A\}rray data for genome reconstruction and quantitative trait locus mapping.

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/MUGAExampleData.html
   :license: GPL-3
   :recipe: /`bioconductor-mugaexampledata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mugaexampledata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mugaexampledata/meta.yaml>`_

   This package contains example data for the MUGA array that is used by the R package DOQTL.


.. conda:package:: bioconductor-mugaexampledata

   |downloads_bioconductor-mugaexampledata| |docker_bioconductor-mugaexampledata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.17.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.17.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
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

      mamba install bioconductor-mugaexampledata

   and update with::

      mamba update bioconductor-mugaexampledata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mugaexampledata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mugaexampledata:<tag>

   (see `bioconductor-mugaexampledata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mugaexampledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mugaexampledata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mugaexampledata
   :alt:   (downloads)
.. |docker_bioconductor-mugaexampledata| image:: https://quay.io/repository/biocontainers/bioconductor-mugaexampledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mugaexampledata
.. _`bioconductor-mugaexampledata/tags`: https://quay.io/repository/biocontainers/bioconductor-mugaexampledata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mugaexampledata";
        var versions = ["1.26.0","1.22.0","1.20.0","1.17.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mugaexampledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mugaexampledata/README.html