:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylseekr'
.. highlight: bash

bioconductor-methylseekr
========================

.. conda:recipe:: bioconductor-methylseekr
   :replaces_section_title:
   :noindex:

   Segmentation of Bis\-seq data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MethylSeekR.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-methylseekr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylseekr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylseekr/meta.yaml>`_
   :links: biotools: :biotools:`methylseekr`

   This is a package for the discovery of regulatory regions from Bis\-seq data


.. conda:package:: bioconductor-methylseekr

   |downloads_bioconductor-methylseekr| |docker_bioconductor-methylseekr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-2``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-geneplotter: ``>=1.78.0,<1.79.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mhsmm: ``>=0.4.4``
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

      mamba install bioconductor-methylseekr

   and update with::

      mamba update bioconductor-methylseekr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-methylseekr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylseekr:<tag>

   (see `bioconductor-methylseekr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylseekr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylseekr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylseekr
   :alt:   (downloads)
.. |docker_bioconductor-methylseekr| image:: https://quay.io/repository/biocontainers/bioconductor-methylseekr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylseekr
.. _`bioconductor-methylseekr/tags`: https://quay.io/repository/biocontainers/bioconductor-methylseekr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylseekr";
        var versions = ["1.40.0","1.38.0","1.34.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylseekr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylseekr/README.html