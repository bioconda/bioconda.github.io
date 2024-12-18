:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msqc1'
.. highlight: bash

bioconductor-msqc1
==================

.. conda:recipe:: bioconductor-msqc1
   :replaces_section_title:
   :noindex:

   Sigma mix MSQC1 data

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/msqc1.html
   :license: GPL
   :recipe: /`bioconductor-msqc1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msqc1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msqc1/meta.yaml>`_

   contains eight technical replicate data set and a three replicate dilution series of the MS Qual\/Quant Quality Control Mix standard sample \(Sigma\-Aldrich\, Buchs\, Switzerland\) measured on five different mass spectrometer platforms at the Functional Genomics Center Zurich.


.. conda:package:: bioconductor-msqc1

   |downloads_bioconductor-msqc1| |docker_bioconductor-msqc1|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.25.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.25.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-lattice: 
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

      mamba install bioconductor-msqc1

   and update with::

      mamba update bioconductor-msqc1

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msqc1

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msqc1:<tag>

   (see `bioconductor-msqc1/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msqc1| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msqc1.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msqc1
   :alt:   (downloads)
.. |docker_bioconductor-msqc1| image:: https://quay.io/repository/biocontainers/bioconductor-msqc1/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msqc1
.. _`bioconductor-msqc1/tags`: https://quay.io/repository/biocontainers/bioconductor-msqc1?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msqc1";
        var versions = ["1.34.0","1.30.0","1.28.0","1.25.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msqc1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msqc1/README.html