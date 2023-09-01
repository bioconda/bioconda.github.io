:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomewidesnp6crlmm'
.. highlight: bash

bioconductor-genomewidesnp6crlmm
================================

.. conda:recipe:: bioconductor-genomewidesnp6crlmm
   :replaces_section_title:
   :noindex:

   Metadata for fast genotyping with the \'crlmm\' package

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/genomewidesnp6Crlmm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomewidesnp6crlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomewidesnp6crlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomewidesnp6crlmm/meta.yaml>`_

   Package with metadata for fast genotyping Affymetrix GenomeWideSnp\_6 arrays using the \'crlmm\' package.


.. conda:package:: bioconductor-genomewidesnp6crlmm

   |downloads_bioconductor-genomewidesnp6crlmm| |docker_bioconductor-genomewidesnp6crlmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.7-11</code>,  <code>1.0.7-10</code>,  <code>1.0.7-9</code>,  <code>1.0.7-8</code>,  <code>1.0.7-7</code>,  <code>1.0.7-6</code>,  <code>1.0.7-5</code>,  <code>1.0.7-4</code>,  <code>1.0.7-3</code>,  </span></summary>
      

      ``1.0.7-11``,  ``1.0.7-10``,  ``1.0.7-9``,  ``1.0.7-8``,  ``1.0.7-7``,  ``1.0.7-6``,  ``1.0.7-5``,  ``1.0.7-4``,  ``1.0.7-3``,  ``1.0.7-2``,  ``1.0.7-1``,  ``1.0.7-0``

      
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

      mamba install bioconductor-genomewidesnp6crlmm

   and update with::

      mamba update bioconductor-genomewidesnp6crlmm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genomewidesnp6crlmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomewidesnp6crlmm:<tag>

   (see `bioconductor-genomewidesnp6crlmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomewidesnp6crlmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomewidesnp6crlmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomewidesnp6crlmm
   :alt:   (downloads)
.. |docker_bioconductor-genomewidesnp6crlmm| image:: https://quay.io/repository/biocontainers/bioconductor-genomewidesnp6crlmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomewidesnp6crlmm
.. _`bioconductor-genomewidesnp6crlmm/tags`: https://quay.io/repository/biocontainers/bioconductor-genomewidesnp6crlmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomewidesnp6crlmm";
        var versions = ["1.0.7","1.0.7","1.0.7","1.0.7","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomewidesnp6crlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomewidesnp6crlmm/README.html