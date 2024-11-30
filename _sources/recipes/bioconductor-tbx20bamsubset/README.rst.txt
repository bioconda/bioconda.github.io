:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tbx20bamsubset'
.. highlight: bash

bioconductor-tbx20bamsubset
===========================

.. conda:recipe:: bioconductor-tbx20bamsubset
   :replaces_section_title:
   :noindex:

   Subset of BAM files from the \"TBX20\" experiment

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/TBX20BamSubset.html
   :license: LGPL
   :recipe: /`bioconductor-tbx20bamsubset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tbx20bamsubset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tbx20bamsubset/meta.yaml>`_

   Dual transcriptional activator and repressor roles of TBX20 regulate adult cardiac structure and function. A subset of the RNA\-Seq data.


.. conda:package:: bioconductor-tbx20bamsubset

   |downloads_bioconductor-tbx20bamsubset| |docker_bioconductor-tbx20bamsubset|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-xtable: 
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

      mamba install bioconductor-tbx20bamsubset

   and update with::

      mamba update bioconductor-tbx20bamsubset

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tbx20bamsubset

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tbx20bamsubset:<tag>

   (see `bioconductor-tbx20bamsubset/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tbx20bamsubset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tbx20bamsubset.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tbx20bamsubset
   :alt:   (downloads)
.. |docker_bioconductor-tbx20bamsubset| image:: https://quay.io/repository/biocontainers/bioconductor-tbx20bamsubset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tbx20bamsubset
.. _`bioconductor-tbx20bamsubset/tags`: https://quay.io/repository/biocontainers/bioconductor-tbx20bamsubset?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tbx20bamsubset";
        var versions = ["1.38.0","1.36.0","1.34.0","1.30.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tbx20bamsubset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tbx20bamsubset/README.html