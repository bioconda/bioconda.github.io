:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-shinymethyldata'
.. highlight: bash

bioconductor-shinymethyldata
============================

.. conda:recipe:: bioconductor-shinymethyldata
   :replaces_section_title:
   :noindex:

   Example dataset of input data for shinyMethyl

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/shinyMethylData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-shinymethyldata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shinymethyldata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shinymethyldata/meta.yaml>`_

   Extracted data from 369 TCGA Head and Neck Cancer DNA methylation samples. The extracted data serve as an example dataset for the package shinyMethyl. Original samples are from 450k methylation arrays\, and were obtained from The Cancer Genome Atlas \(TCGA\). 310 samples are from tumor\, 50 are matched normals and 9 are technical replicates of a control cell line.


.. conda:package:: bioconductor-shinymethyldata

   |downloads_bioconductor-shinymethyldata| |docker_bioconductor-shinymethyldata|

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

      mamba install bioconductor-shinymethyldata

   and update with::

      mamba update bioconductor-shinymethyldata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-shinymethyldata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-shinymethyldata:<tag>

   (see `bioconductor-shinymethyldata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-shinymethyldata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-shinymethyldata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-shinymethyldata
   :alt:   (downloads)
.. |docker_bioconductor-shinymethyldata| image:: https://quay.io/repository/biocontainers/bioconductor-shinymethyldata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-shinymethyldata
.. _`bioconductor-shinymethyldata/tags`: https://quay.io/repository/biocontainers/bioconductor-shinymethyldata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-shinymethyldata";
        var versions = ["1.26.0","1.22.0","1.20.0","1.17.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-shinymethyldata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-shinymethyldata/README.html