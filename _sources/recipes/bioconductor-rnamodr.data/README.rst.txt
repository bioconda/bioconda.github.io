:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnamodr.data'
.. highlight: bash

bioconductor-rnamodr.data
=========================

.. conda:recipe:: bioconductor-rnamodr.data
   :replaces_section_title:
   :noindex:

   Example data for the RNAmodR package

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/RNAmodR.Data.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnamodr.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnamodr.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnamodr.data/meta.yaml>`_

   RNAmodR.Data contains example data\, which is used for vignettes and example workflows in the RNAmodR and dependent packages.


.. conda:package:: bioconductor-rnamodr.data

   |downloads_bioconductor-rnamodr.data| |docker_bioconductor-rnamodr.data|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-experimenthubdata: ``>=1.28.0,<1.29.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-rnamodr.data

   and update with::

      mamba update bioconductor-rnamodr.data

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rnamodr.data

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnamodr.data:<tag>

   (see `bioconductor-rnamodr.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnamodr.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnamodr.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnamodr.data
   :alt:   (downloads)
.. |docker_bioconductor-rnamodr.data| image:: https://quay.io/repository/biocontainers/bioconductor-rnamodr.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnamodr.data
.. _`bioconductor-rnamodr.data/tags`: https://quay.io/repository/biocontainers/bioconductor-rnamodr.data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnamodr.data";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnamodr.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnamodr.data/README.html