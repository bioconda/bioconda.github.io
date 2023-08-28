:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bigmelon'
.. highlight: bash

bioconductor-bigmelon
=====================

.. conda:recipe:: bioconductor-bigmelon
   :replaces_section_title:
   :noindex:

   Illumina methylation array analysis for large experiments

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/bigmelon.html
   :license: GPL-3
   :recipe: /`bioconductor-bigmelon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bigmelon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bigmelon/meta.yaml>`_

   Methods for working with Illumina arrays using gdsfmt.


.. conda:package:: bioconductor-bigmelon

   |downloads_bioconductor-bigmelon| |docker_bioconductor-bigmelon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-gdsfmt: ``>=1.36.0,<1.37.0``
   :depends bioconductor-geoquery: ``>=2.68.0,<2.69.0``
   :depends bioconductor-illuminaio: ``>=0.42.0,<0.43.0``
   :depends bioconductor-methylumi: ``>=2.46.0,<2.47.0``
   :depends bioconductor-minfi: ``>=1.46.0,<1.47.0``
   :depends bioconductor-watermelon: ``>=2.6.0,<2.7.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-bigmelon

   and update with::

      mamba update bioconductor-bigmelon

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bigmelon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bigmelon:<tag>

   (see `bioconductor-bigmelon/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bigmelon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bigmelon.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bigmelon
   :alt:   (downloads)
.. |docker_bioconductor-bigmelon| image:: https://quay.io/repository/biocontainers/bioconductor-bigmelon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bigmelon
.. _`bioconductor-bigmelon/tags`: https://quay.io/repository/biocontainers/bioconductor-bigmelon?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bigmelon";
        var versions = ["1.26.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bigmelon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bigmelon/README.html