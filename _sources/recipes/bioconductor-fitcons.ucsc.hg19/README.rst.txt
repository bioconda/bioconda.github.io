:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fitcons.ucsc.hg19'
.. highlight: bash

bioconductor-fitcons.ucsc.hg19
==============================

.. conda:recipe:: bioconductor-fitcons.ucsc.hg19
   :replaces_section_title:
   :noindex:

   UCSC fitCons fitness consequences scores for hg19

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/fitCons.UCSC.hg19.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fitcons.ucsc.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fitcons.ucsc.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fitcons.ucsc.hg19/meta.yaml>`_

   Store UCSC fitCons fitness consequences scores version 1.01 for the human genome \(hg19\).


.. conda:package:: bioconductor-fitcons.ucsc.hg19

   |downloads_bioconductor-fitcons.ucsc.hg19| |docker_bioconductor-fitcons.ucsc.hg19|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.7.1-12</code>,  <code>3.7.1-11</code>,  <code>3.7.1-10</code>,  <code>3.7.1-9</code>,  <code>3.7.1-8</code>,  <code>3.7.1-7</code>,  <code>3.7.1-6</code>,  <code>3.7.1-5</code>,  <code>3.7.1-4</code>,  </span></summary>
      

      ``3.7.1-12``,  ``3.7.1-11``,  ``3.7.1-10``,  ``3.7.1-9``,  ``3.7.1-8``,  ``3.7.1-7``,  ``3.7.1-6``,  ``3.7.1-5``,  ``3.7.1-4``,  ``3.7.1-3``,  ``3.7.1-2``,  ``3.7.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicscores: ``>=2.14.0,<2.15.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
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

      mamba install bioconductor-fitcons.ucsc.hg19

   and update with::

      mamba update bioconductor-fitcons.ucsc.hg19

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fitcons.ucsc.hg19

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fitcons.ucsc.hg19:<tag>

   (see `bioconductor-fitcons.ucsc.hg19/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fitcons.ucsc.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fitcons.ucsc.hg19.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fitcons.ucsc.hg19
   :alt:   (downloads)
.. |docker_bioconductor-fitcons.ucsc.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-fitcons.ucsc.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fitcons.ucsc.hg19
.. _`bioconductor-fitcons.ucsc.hg19/tags`: https://quay.io/repository/biocontainers/bioconductor-fitcons.ucsc.hg19?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fitcons.ucsc.hg19";
        var versions = ["3.7.1","3.7.1","3.7.1","3.7.1","3.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fitcons.ucsc.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fitcons.ucsc.hg19/README.html