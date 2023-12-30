:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msdata'
.. highlight: bash

bioconductor-msdata
===================

.. conda:recipe:: bioconductor-msdata
   :replaces_section_title:
   :noindex:

   Various Mass Spectrometry raw data example files

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/msdata.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-msdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msdata/meta.yaml>`_

   Ion Trap positive ionization mode data in mzML file format.  Subset from 500\-850 m\/z and 1190\-1310 seconds\, incl. MS2 and MS3\, intensity threshold 100.000. Extracts from FTICR Apex III\, m\/z 400\-450.  Subset of UPLC \- Bruker micrOTOFq data\, both mzML and mz5. LC\-MSMS and MRM files from proteomics experiments. PSI mzIdentML example files for various search engines.


.. conda:package:: bioconductor-msdata

   |downloads_bioconductor-msdata| |docker_bioconductor-msdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.42.0-0</code>,  <code>0.40.0-0</code>,  <code>0.37.0-0</code>,  <code>0.34.0-1</code>,  <code>0.34.0-0</code>,  <code>0.32.0-0</code>,  <code>0.30.0-0</code>,  <code>0.29.0-0</code>,  <code>0.28.0-0</code>,  </span></summary>
      

      ``0.42.0-0``,  ``0.40.0-0``,  ``0.37.0-0``,  ``0.34.0-1``,  ``0.34.0-0``,  ``0.32.0-0``,  ``0.30.0-0``,  ``0.29.0-0``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.1-0``,  ``0.24.0-0``,  ``0.22.0-0``

      
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

      mamba install bioconductor-msdata

   and update with::

      mamba update bioconductor-msdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msdata:<tag>

   (see `bioconductor-msdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msdata
   :alt:   (downloads)
.. |docker_bioconductor-msdata| image:: https://quay.io/repository/biocontainers/bioconductor-msdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msdata
.. _`bioconductor-msdata/tags`: https://quay.io/repository/biocontainers/bioconductor-msdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msdata";
        var versions = ["0.42.0","0.40.0","0.37.0","0.34.0","0.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msdata/README.html