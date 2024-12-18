:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicdatahumanimr90'
.. highlight: bash

bioconductor-hicdatahumanimr90
==============================

.. conda:recipe:: bioconductor-hicdatahumanimr90
   :replaces_section_title:
   :noindex:

   Human IMR90 Fibroblast HiC data from Dixon et al. 2012

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/HiCDataHumanIMR90.html
   :license: GPL-3
   :recipe: /`bioconductor-hicdatahumanimr90 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicdatahumanimr90>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicdatahumanimr90/meta.yaml>`_

   The HiC data from Human Fibroblast IMR90 cell line \(HindIII restriction\) was retrieved from the GEO website\, accession number GSE35156 \(http\:\/\/www.ncbi.nlm.nih.gov\/geo\/query\/acc.cgi\?acc\=GSE35156\). The raw reads were processed as explained in Dixon et al. \(Nature 2012\).


.. conda:package:: bioconductor-hicdatahumanimr90

   |downloads_bioconductor-hicdatahumanimr90| |docker_bioconductor-hicdatahumanimr90|

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

      mamba install bioconductor-hicdatahumanimr90

   and update with::

      mamba update bioconductor-hicdatahumanimr90

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hicdatahumanimr90

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hicdatahumanimr90:<tag>

   (see `bioconductor-hicdatahumanimr90/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hicdatahumanimr90| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicdatahumanimr90.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicdatahumanimr90
   :alt:   (downloads)
.. |docker_bioconductor-hicdatahumanimr90| image:: https://quay.io/repository/biocontainers/bioconductor-hicdatahumanimr90/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicdatahumanimr90
.. _`bioconductor-hicdatahumanimr90/tags`: https://quay.io/repository/biocontainers/bioconductor-hicdatahumanimr90?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hicdatahumanimr90";
        var versions = ["1.26.0","1.22.0","1.20.0","1.17.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicdatahumanimr90/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicdatahumanimr90/README.html