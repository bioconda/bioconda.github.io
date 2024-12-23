:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hdcytodata'
.. highlight: bash

bioconductor-hdcytodata
=======================

.. conda:recipe:: bioconductor-hdcytodata
   :replaces_section_title:
   :noindex:

   Collection of high\-dimensional cytometry benchmark datasets in Bioconductor object formats

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/HDCytoData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hdcytodata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdcytodata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdcytodata/meta.yaml>`_

   Data package containing a set of publicly available high\-dimensional cytometry benchmark datasets\, formatted into SummarizedExperiment and flowSet Bioconductor object formats\, including all required metadata. Row metadata includes sample IDs\, group IDs\, patient IDs\, reference cell population or cluster labels \(where available\)\, and labels identifying \'spiked in\' cells \(where available\). Column metadata includes channel names\, protein marker names\, and protein marker classes \(cell type or cell state\).


.. conda:package:: bioconductor-hdcytodata

   |downloads_bioconductor-hdcytodata| |docker_bioconductor-hdcytodata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
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

      mamba install bioconductor-hdcytodata

   and update with::

      mamba update bioconductor-hdcytodata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hdcytodata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hdcytodata:<tag>

   (see `bioconductor-hdcytodata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hdcytodata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hdcytodata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hdcytodata
   :alt:   (downloads)
.. |docker_bioconductor-hdcytodata| image:: https://quay.io/repository/biocontainers/bioconductor-hdcytodata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hdcytodata
.. _`bioconductor-hdcytodata/tags`: https://quay.io/repository/biocontainers/bioconductor-hdcytodata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hdcytodata";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hdcytodata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hdcytodata/README.html