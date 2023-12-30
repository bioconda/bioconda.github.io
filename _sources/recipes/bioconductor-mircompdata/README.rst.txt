:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mircompdata'
.. highlight: bash

bioconductor-mircompdata
========================

.. conda:recipe:: bioconductor-mircompdata
   :replaces_section_title:
   :noindex:

   Data used in the miRcomp package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/miRcompData.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-mircompdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mircompdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mircompdata/meta.yaml>`_

   Raw amplification data from a large microRNA mixture \/ dilution study. These data are used by the miRcomp package to assess the performance of methods that estimate expression from the amplification curves.


.. conda:package:: bioconductor-mircompdata

   |downloads_bioconductor-mircompdata| |docker_bioconductor-mircompdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.27.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``

      
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

      mamba install bioconductor-mircompdata

   and update with::

      mamba update bioconductor-mircompdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mircompdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mircompdata:<tag>

   (see `bioconductor-mircompdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mircompdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mircompdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mircompdata
   :alt:   (downloads)
.. |docker_bioconductor-mircompdata| image:: https://quay.io/repository/biocontainers/bioconductor-mircompdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mircompdata
.. _`bioconductor-mircompdata/tags`: https://quay.io/repository/biocontainers/bioconductor-mircompdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mircompdata";
        var versions = ["1.32.0","1.30.0","1.28.0","1.27.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mircompdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mircompdata/README.html