:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tximportdata'
.. highlight: bash

bioconductor-tximportdata
=========================

.. conda:recipe:: bioconductor-tximportdata
   :replaces_section_title:
   :noindex:

   tximportData

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/tximportData.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-tximportdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tximportdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tximportdata/meta.yaml>`_

   This package provides the output of running various transcript abundance quantifiers on a set of 6 RNA\-seq samples from the GEUVADIS project. The quantifiers were Cufflinks\, RSEM\, kallisto\, Salmon and Sailfish. alevin example output is also included. Forr details on version numbers\, sample information\, and details on calls\, see the package vignette.


.. conda:package:: bioconductor-tximportdata

   |downloads_bioconductor-tximportdata| |docker_bioconductor-tximportdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.25.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.25.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``

      
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

      mamba install bioconductor-tximportdata

   and update with::

      mamba update bioconductor-tximportdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tximportdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tximportdata:<tag>

   (see `bioconductor-tximportdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tximportdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tximportdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tximportdata
   :alt:   (downloads)
.. |docker_bioconductor-tximportdata| image:: https://quay.io/repository/biocontainers/bioconductor-tximportdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tximportdata
.. _`bioconductor-tximportdata/tags`: https://quay.io/repository/biocontainers/bioconductor-tximportdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tximportdata";
        var versions = ["1.30.0","1.28.0","1.25.0","1.22.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tximportdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tximportdata/README.html