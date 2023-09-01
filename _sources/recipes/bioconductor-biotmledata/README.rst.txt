:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biotmledata'
.. highlight: bash

bioconductor-biotmledata
========================

.. conda:recipe:: bioconductor-biotmledata
   :replaces_section_title:
   :noindex:

   Example experimental microarray data set for the \"biotmle\" R package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/biotmleData.html
   :license: file LICENSE
   :recipe: /`bioconductor-biotmledata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotmledata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotmledata/meta.yaml>`_

   Microarray data \(from the Illumina Ref\-8 BeadChips platform\) and phenotype\-level data from an epidemiological investigation of benzene exposure\, packaged using \"SummarizedExperiemnt\"\, for use as an example with the \"biotmle\" R package.


.. conda:package:: bioconductor-biotmledata

   |downloads_bioconductor-biotmledata| |docker_bioconductor-biotmledata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.21.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.13.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.21.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
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

      mamba install bioconductor-biotmledata

   and update with::

      mamba update bioconductor-biotmledata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biotmledata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biotmledata:<tag>

   (see `bioconductor-biotmledata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biotmledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biotmledata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biotmledata
   :alt:   (downloads)
.. |docker_bioconductor-biotmledata| image:: https://quay.io/repository/biocontainers/bioconductor-biotmledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biotmledata
.. _`bioconductor-biotmledata/tags`: https://quay.io/repository/biocontainers/bioconductor-biotmledata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biotmledata";
        var versions = ["1.24.0","1.21.0","1.18.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biotmledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biotmledata/README.html