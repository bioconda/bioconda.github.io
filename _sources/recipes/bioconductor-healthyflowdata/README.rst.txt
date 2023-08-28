:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-healthyflowdata'
.. highlight: bash

bioconductor-healthyflowdata
============================

.. conda:recipe:: bioconductor-healthyflowdata
   :replaces_section_title:
   :noindex:

   Healthy dataset used by the flowMatch package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/healthyFlowData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-healthyflowdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-healthyflowdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-healthyflowdata/meta.yaml>`_

   A healthy dataset with 20 flow cytometry samples used by the flowMatch package.


.. conda:package:: bioconductor-healthyflowdata

   |downloads_bioconductor-healthyflowdata| |docker_bioconductor-healthyflowdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-flowcore: ``>=2.12.0,<2.13.0``
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

      mamba install bioconductor-healthyflowdata

   and update with::

      mamba update bioconductor-healthyflowdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-healthyflowdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-healthyflowdata:<tag>

   (see `bioconductor-healthyflowdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-healthyflowdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-healthyflowdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-healthyflowdata
   :alt:   (downloads)
.. |docker_bioconductor-healthyflowdata| image:: https://quay.io/repository/biocontainers/bioconductor-healthyflowdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-healthyflowdata
.. _`bioconductor-healthyflowdata/tags`: https://quay.io/repository/biocontainers/bioconductor-healthyflowdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-healthyflowdata";
        var versions = ["1.38.0","1.36.0","1.32.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-healthyflowdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-healthyflowdata/README.html