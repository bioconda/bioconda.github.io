:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phastcons7way.ucsc.hg38'
.. highlight: bash

bioconductor-phastcons7way.ucsc.hg38
====================================

.. conda:recipe:: bioconductor-phastcons7way.ucsc.hg38
   :replaces_section_title:
   :noindex:

   UCSC phastCons conservation scores for hg38

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/phastCons7way.UCSC.hg38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-phastcons7way.ucsc.hg38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phastcons7way.ucsc.hg38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phastcons7way.ucsc.hg38/meta.yaml>`_

   Store UCSC phastCons conservation scores for the human genome \(hg38\) calculated from multiple alignments with other 6 vertebrate species.


.. conda:package:: bioconductor-phastcons7way.ucsc.hg38

   |downloads_bioconductor-phastcons7way.ucsc.hg38| |docker_bioconductor-phastcons7way.ucsc.hg38|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.7.1-13</code>,  <code>3.7.1-12</code>,  <code>3.7.1-11</code>,  <code>3.7.1-10</code>,  <code>3.7.1-9</code>,  <code>3.7.1-8</code>,  <code>3.7.1-7</code>,  <code>3.7.1-6</code>,  <code>3.7.1-5</code>,  </span></summary>
      

      ``3.7.1-13``,  ``3.7.1-12``,  ``3.7.1-11``,  ``3.7.1-10``,  ``3.7.1-9``,  ``3.7.1-8``,  ``3.7.1-7``,  ``3.7.1-6``,  ``3.7.1-5``,  ``3.7.1-4``,  ``3.7.1-3``,  ``3.7.1-2``,  ``3.7.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicscores: ``>=2.18.0,<2.19.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
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

      mamba install bioconductor-phastcons7way.ucsc.hg38

   and update with::

      mamba update bioconductor-phastcons7way.ucsc.hg38

  To create a new environment, run::

      mamba create --name myenvname bioconductor-phastcons7way.ucsc.hg38

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phastcons7way.ucsc.hg38:<tag>

   (see `bioconductor-phastcons7way.ucsc.hg38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phastcons7way.ucsc.hg38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phastcons7way.ucsc.hg38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phastcons7way.ucsc.hg38
   :alt:   (downloads)
.. |docker_bioconductor-phastcons7way.ucsc.hg38| image:: https://quay.io/repository/biocontainers/bioconductor-phastcons7way.ucsc.hg38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phastcons7way.ucsc.hg38
.. _`bioconductor-phastcons7way.ucsc.hg38/tags`: https://quay.io/repository/biocontainers/bioconductor-phastcons7way.ucsc.hg38?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phastcons7way.ucsc.hg38";
        var versions = ["3.7.1","3.7.1","3.7.1","3.7.1","3.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phastcons7way.ucsc.hg38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phastcons7way.ucsc.hg38/README.html