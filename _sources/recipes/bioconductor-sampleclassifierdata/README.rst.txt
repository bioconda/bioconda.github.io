:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sampleclassifierdata'
.. highlight: bash

bioconductor-sampleclassifierdata
=================================

.. conda:recipe:: bioconductor-sampleclassifierdata
   :replaces_section_title:
   :noindex:

   Pre\-processed data for use with the sampleClassifier package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/sampleClassifierData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sampleclassifierdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sampleclassifierdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sampleclassifierdata/meta.yaml>`_

   This package contains two microarray and two RNA\-seq datasets that have been preprocessed for use with the sampleClassifier package. The RNA\-seq data are derived from Fagerberg et al. \(2014\) and the Illumina Body Map 2.0 data. The microarray data are derived from Roth et al. \(2006\) and Ge et al. \(2005\).


.. conda:package:: bioconductor-sampleclassifierdata

   |downloads_bioconductor-sampleclassifierdata| |docker_bioconductor-sampleclassifierdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.1-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
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

      mamba install bioconductor-sampleclassifierdata

   and update with::

      mamba update bioconductor-sampleclassifierdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sampleclassifierdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sampleclassifierdata:<tag>

   (see `bioconductor-sampleclassifierdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sampleclassifierdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sampleclassifierdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sampleclassifierdata
   :alt:   (downloads)
.. |docker_bioconductor-sampleclassifierdata| image:: https://quay.io/repository/biocontainers/bioconductor-sampleclassifierdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sampleclassifierdata
.. _`bioconductor-sampleclassifierdata/tags`: https://quay.io/repository/biocontainers/bioconductor-sampleclassifierdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sampleclassifierdata";
        var versions = ["1.30.0","1.26.0","1.24.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sampleclassifierdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sampleclassifierdata/README.html