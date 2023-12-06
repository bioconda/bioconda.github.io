:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-svm2crmdata'
.. highlight: bash

bioconductor-svm2crmdata
========================

.. conda:recipe:: bioconductor-svm2crmdata
   :replaces_section_title:
   :noindex:

   An example dataset for use with the SVM2CRM package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/SVM2CRMdata.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-svm2crmdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svm2crmdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svm2crmdata/meta.yaml>`_

   An example dataset for use with the SVM2CRM package.


.. conda:package:: bioconductor-svm2crmdata

   |downloads_bioconductor-svm2crmdata| |docker_bioconductor-svm2crmdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.29.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.21.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.29.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.0-0``

      
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

      mamba install bioconductor-svm2crmdata

   and update with::

      mamba update bioconductor-svm2crmdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-svm2crmdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-svm2crmdata:<tag>

   (see `bioconductor-svm2crmdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-svm2crmdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-svm2crmdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-svm2crmdata
   :alt:   (downloads)
.. |docker_bioconductor-svm2crmdata| image:: https://quay.io/repository/biocontainers/bioconductor-svm2crmdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-svm2crmdata
.. _`bioconductor-svm2crmdata/tags`: https://quay.io/repository/biocontainers/bioconductor-svm2crmdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-svm2crmdata";
        var versions = ["1.34.0","1.32.0","1.29.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-svm2crmdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-svm2crmdata/README.html