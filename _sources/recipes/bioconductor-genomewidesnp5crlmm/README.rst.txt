:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomewidesnp5crlmm'
.. highlight: bash

bioconductor-genomewidesnp5crlmm
================================

.. conda:recipe:: bioconductor-genomewidesnp5crlmm
   :replaces_section_title:
   :noindex:

   Metadata for fast genotyping with the \'crlmm\' package

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/genomewidesnp5Crlmm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomewidesnp5crlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomewidesnp5crlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomewidesnp5crlmm/meta.yaml>`_

   Package with metadata for fast genotyping Affymetrix GenomeWideSnp\_5 arrays using the \'crlmm\' package. Annotation build is hg19.


.. conda:package:: bioconductor-genomewidesnp5crlmm

   |downloads_bioconductor-genomewidesnp5crlmm| |docker_bioconductor-genomewidesnp5crlmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.6-12</code>,  <code>1.0.6-11</code>,  <code>1.0.6-10</code>,  <code>1.0.6-9</code>,  <code>1.0.6-8</code>,  <code>1.0.6-7</code>,  <code>1.0.6-6</code>,  <code>1.0.6-5</code>,  <code>1.0.6-4</code>,  </span></summary>
      

      ``1.0.6-12``,  ``1.0.6-11``,  ``1.0.6-10``,  ``1.0.6-9``,  ``1.0.6-8``,  ``1.0.6-7``,  ``1.0.6-6``,  ``1.0.6-5``,  ``1.0.6-4``,  ``1.0.6-3``,  ``1.0.6-2``,  ``1.0.6-1``,  ``1.0.6-0``

      
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

      mamba install bioconductor-genomewidesnp5crlmm

   and update with::

      mamba update bioconductor-genomewidesnp5crlmm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genomewidesnp5crlmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomewidesnp5crlmm:<tag>

   (see `bioconductor-genomewidesnp5crlmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomewidesnp5crlmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomewidesnp5crlmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomewidesnp5crlmm
   :alt:   (downloads)
.. |docker_bioconductor-genomewidesnp5crlmm| image:: https://quay.io/repository/biocontainers/bioconductor-genomewidesnp5crlmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomewidesnp5crlmm
.. _`bioconductor-genomewidesnp5crlmm/tags`: https://quay.io/repository/biocontainers/bioconductor-genomewidesnp5crlmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomewidesnp5crlmm";
        var versions = ["1.0.6","1.0.6","1.0.6","1.0.6","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomewidesnp5crlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomewidesnp5crlmm/README.html