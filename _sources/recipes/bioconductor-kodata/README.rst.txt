:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kodata'
.. highlight: bash

bioconductor-kodata
===================

.. conda:recipe:: bioconductor-kodata
   :replaces_section_title:
   :noindex:

   LINCS Knock\-Out Data Package

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/KOdata.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-kodata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kodata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kodata/meta.yaml>`_

   Contains consensus genomic signatures \(CGS\) for experimental cell\-line specific gene knock\-outs as well as baseline gene expression data for a subset of experimental cell\-lines. Intended for use with package KEGGlincs.


.. conda:package:: bioconductor-kodata

   |downloads_bioconductor-kodata| |docker_bioconductor-kodata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.23.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.23.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
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

      mamba install bioconductor-kodata

   and update with::

      mamba update bioconductor-kodata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-kodata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-kodata:<tag>

   (see `bioconductor-kodata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-kodata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kodata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kodata
   :alt:   (downloads)
.. |docker_bioconductor-kodata| image:: https://quay.io/repository/biocontainers/bioconductor-kodata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kodata
.. _`bioconductor-kodata/tags`: https://quay.io/repository/biocontainers/bioconductor-kodata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-kodata";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.23.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kodata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kodata/README.html