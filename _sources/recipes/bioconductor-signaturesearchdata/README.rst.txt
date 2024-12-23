:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-signaturesearchdata'
.. highlight: bash

bioconductor-signaturesearchdata
================================

.. conda:recipe:: bioconductor-signaturesearchdata
   :replaces_section_title:
   :noindex:

   Datasets for signatureSearch package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/signatureSearchData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-signaturesearchdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signaturesearchdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signaturesearchdata/meta.yaml>`_

   CMAP\/LINCS hdf5 databases and other annotations used for signatureSearch software package.


.. conda:package:: bioconductor-signaturesearchdata

   |downloads_bioconductor-signaturesearchdata| |docker_bioconductor-signaturesearchdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.4-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.4-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``0.99.14-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-r.utils: 
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

      mamba install bioconductor-signaturesearchdata

   and update with::

      mamba update bioconductor-signaturesearchdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-signaturesearchdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-signaturesearchdata:<tag>

   (see `bioconductor-signaturesearchdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-signaturesearchdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-signaturesearchdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-signaturesearchdata
   :alt:   (downloads)
.. |docker_bioconductor-signaturesearchdata| image:: https://quay.io/repository/biocontainers/bioconductor-signaturesearchdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-signaturesearchdata
.. _`bioconductor-signaturesearchdata/tags`: https://quay.io/repository/biocontainers/bioconductor-signaturesearchdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-signaturesearchdata";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.8.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-signaturesearchdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-signaturesearchdata/README.html