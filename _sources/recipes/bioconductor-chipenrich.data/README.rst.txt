:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipenrich.data'
.. highlight: bash

bioconductor-chipenrich.data
============================

.. conda:recipe:: bioconductor-chipenrich.data
   :replaces_section_title:
   :noindex:

   Companion package to chipenrich

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/chipenrich.data.html
   :license: GPL-3
   :recipe: /`bioconductor-chipenrich.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipenrich.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipenrich.data/meta.yaml>`_

   Supporting data for the chipenrich package. Includes pre\-defined gene sets\, gene locus definitions\, and mappability estimates.


.. conda:package:: bioconductor-chipenrich.data

   |downloads_bioconductor-chipenrich.data| |docker_bioconductor-chipenrich.data|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.18.0-1</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  </span></summary>
      

      ``2.24.0-0``,  ``2.22.0-0``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-readr: 
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

      mamba install bioconductor-chipenrich.data

   and update with::

      mamba update bioconductor-chipenrich.data

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chipenrich.data

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chipenrich.data:<tag>

   (see `bioconductor-chipenrich.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipenrich.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipenrich.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipenrich.data
   :alt:   (downloads)
.. |docker_bioconductor-chipenrich.data| image:: https://quay.io/repository/biocontainers/bioconductor-chipenrich.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipenrich.data
.. _`bioconductor-chipenrich.data/tags`: https://quay.io/repository/biocontainers/bioconductor-chipenrich.data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chipenrich.data";
        var versions = ["2.24.0","2.22.0","2.18.0","2.18.0","2.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipenrich.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipenrich.data/README.html