:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clumsiddata'
.. highlight: bash

bioconductor-clumsiddata
========================

.. conda:recipe:: bioconductor-clumsiddata
   :replaces_section_title:
   :noindex:

   Data for the CluMSID package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/CluMSIDdata.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-clumsiddata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clumsiddata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clumsiddata/meta.yaml>`_

   This package contains various LC\-MS\/MS and GC\-MS data that is used in vignettes and examples in the CluMSID package.


.. conda:package:: bioconductor-clumsiddata

   |downloads_bioconductor-clumsiddata| |docker_bioconductor-clumsiddata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.13.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.5.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.13.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
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

      mamba install bioconductor-clumsiddata

   and update with::

      mamba update bioconductor-clumsiddata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-clumsiddata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clumsiddata:<tag>

   (see `bioconductor-clumsiddata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clumsiddata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clumsiddata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clumsiddata
   :alt:   (downloads)
.. |docker_bioconductor-clumsiddata| image:: https://quay.io/repository/biocontainers/bioconductor-clumsiddata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clumsiddata
.. _`bioconductor-clumsiddata/tags`: https://quay.io/repository/biocontainers/bioconductor-clumsiddata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clumsiddata";
        var versions = ["1.18.0","1.16.0","1.13.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clumsiddata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clumsiddata/README.html