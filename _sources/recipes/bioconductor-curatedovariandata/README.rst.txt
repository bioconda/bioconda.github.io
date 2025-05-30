:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-curatedovariandata'
.. highlight: bash

bioconductor-curatedovariandata
===============================

.. conda:recipe:: bioconductor-curatedovariandata
   :replaces_section_title:
   :noindex:

   Clinically Annotated Data for the Ovarian Cancer Transcriptome

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/curatedOvarianData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-curatedovariandata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedovariandata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedovariandata/meta.yaml>`_

   The curatedOvarianData package provides data for gene expression analysis in patients with ovarian cancer.


.. conda:package:: bioconductor-curatedovariandata

   |downloads_bioconductor-curatedovariandata| |docker_bioconductor-curatedovariandata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.1-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.1-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
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

      mamba install bioconductor-curatedovariandata

   and update with::

      mamba update bioconductor-curatedovariandata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-curatedovariandata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-curatedovariandata:<tag>

   (see `bioconductor-curatedovariandata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-curatedovariandata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-curatedovariandata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-curatedovariandata
   :alt:   (downloads)
.. |docker_bioconductor-curatedovariandata| image:: https://quay.io/repository/biocontainers/bioconductor-curatedovariandata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-curatedovariandata
.. _`bioconductor-curatedovariandata/tags`: https://quay.io/repository/biocontainers/bioconductor-curatedovariandata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-curatedovariandata";
        var versions = ["1.44.0","1.40.1","1.38.0","1.36.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-curatedovariandata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-curatedovariandata/README.html