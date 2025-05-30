:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seventygenedata'
.. highlight: bash

bioconductor-seventygenedata
============================

.. conda:recipe:: bioconductor-seventygenedata
   :replaces_section_title:
   :noindex:

   ExpressionSets from the van\'t Veer and Van de Vijver breast cancer studies

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/seventyGeneData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-seventygenedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seventygenedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seventygenedata/meta.yaml>`_

   Gene expression data for the two breast cancer cohorts published by van\'t Veer and Van de Vijver in 2002.


.. conda:package:: bioconductor-seventygenedata

   |downloads_bioconductor-seventygenedata| |docker_bioconductor-seventygenedata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.36.1-0</code>,  <code>1.33.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.25.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.36.1-0``,  ``1.33.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``

      
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

      mamba install bioconductor-seventygenedata

   and update with::

      mamba update bioconductor-seventygenedata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-seventygenedata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seventygenedata:<tag>

   (see `bioconductor-seventygenedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seventygenedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seventygenedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seventygenedata
   :alt:   (downloads)
.. |docker_bioconductor-seventygenedata| image:: https://quay.io/repository/biocontainers/bioconductor-seventygenedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seventygenedata
.. _`bioconductor-seventygenedata/tags`: https://quay.io/repository/biocontainers/bioconductor-seventygenedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seventygenedata";
        var versions = ["1.42.0","1.36.1","1.33.0","1.30.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seventygenedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seventygenedata/README.html