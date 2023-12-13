:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ffpeexampledata'
.. highlight: bash

bioconductor-ffpeexampledata
============================

.. conda:recipe:: bioconductor-ffpeexampledata
   :replaces_section_title:
   :noindex:

   Illumina DASL example microarray data

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/ffpeExampleData.html
   :license: GPL (>2)
   :recipe: /`bioconductor-ffpeexampledata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ffpeexampledata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ffpeexampledata/meta.yaml>`_

   A subset of GSE17565 \(April et al. 2009\) containing 32 FFPE samples of Burkitts Lymphoma and Breast Adenocarcinoma\, with a dilution series in technical duplicate.


.. conda:package:: bioconductor-ffpeexampledata

   |downloads_bioconductor-ffpeexampledata| |docker_bioconductor-ffpeexampledata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-lumi: ``>=2.54.0,<2.55.0``
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

      mamba install bioconductor-ffpeexampledata

   and update with::

      mamba update bioconductor-ffpeexampledata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ffpeexampledata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ffpeexampledata:<tag>

   (see `bioconductor-ffpeexampledata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ffpeexampledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ffpeexampledata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ffpeexampledata
   :alt:   (downloads)
.. |docker_bioconductor-ffpeexampledata| image:: https://quay.io/repository/biocontainers/bioconductor-ffpeexampledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ffpeexampledata
.. _`bioconductor-ffpeexampledata/tags`: https://quay.io/repository/biocontainers/bioconductor-ffpeexampledata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ffpeexampledata";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ffpeexampledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ffpeexampledata/README.html