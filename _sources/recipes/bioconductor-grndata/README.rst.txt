:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-grndata'
.. highlight: bash

bioconductor-grndata
====================

.. conda:recipe:: bioconductor-grndata
   :replaces_section_title:
   :noindex:

   Synthetic Expression Data for Gene Regulatory Network Inference

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/grndata.html
   :license: GPL-3
   :recipe: /`bioconductor-grndata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grndata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grndata/meta.yaml>`_

   Simulated expression data for five large Gene Regulatory Networks from different simulators


.. conda:package:: bioconductor-grndata

   |downloads_bioconductor-grndata| |docker_bioconductor-grndata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.29.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.21.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.29.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.14.0-0``

      
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

      mamba install bioconductor-grndata

   and update with::

      mamba update bioconductor-grndata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-grndata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-grndata:<tag>

   (see `bioconductor-grndata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-grndata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-grndata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-grndata
   :alt:   (downloads)
.. |docker_bioconductor-grndata| image:: https://quay.io/repository/biocontainers/bioconductor-grndata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-grndata
.. _`bioconductor-grndata/tags`: https://quay.io/repository/biocontainers/bioconductor-grndata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-grndata";
        var versions = ["1.34.0","1.32.0","1.29.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-grndata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-grndata/README.html