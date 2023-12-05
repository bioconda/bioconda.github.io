:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-minionsummarydata'
.. highlight: bash

bioconductor-minionsummarydata
==============================

.. conda:recipe:: bioconductor-minionsummarydata
   :replaces_section_title:
   :noindex:

   Summarised MinION sequencing data published by Ashton et al. 2015

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/minionSummaryData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-minionsummarydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minionsummarydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minionsummarydata/meta.yaml>`_

   Summarised MinION sequencing data for Salmonella Typhi published by Ashton et al. in 2015. Three replicate runs are each provided as Fast5Summary objects.


.. conda:package:: bioconductor-minionsummarydata

   |downloads_bioconductor-minionsummarydata| |docker_bioconductor-minionsummarydata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.27.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.19.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.27.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``

      
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

      mamba install bioconductor-minionsummarydata

   and update with::

      mamba update bioconductor-minionsummarydata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-minionsummarydata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-minionsummarydata:<tag>

   (see `bioconductor-minionsummarydata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-minionsummarydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-minionsummarydata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-minionsummarydata
   :alt:   (downloads)
.. |docker_bioconductor-minionsummarydata| image:: https://quay.io/repository/biocontainers/bioconductor-minionsummarydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-minionsummarydata
.. _`bioconductor-minionsummarydata/tags`: https://quay.io/repository/biocontainers/bioconductor-minionsummarydata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-minionsummarydata";
        var versions = ["1.32.0","1.30.0","1.27.0","1.24.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-minionsummarydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-minionsummarydata/README.html