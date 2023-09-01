:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ballgown'
.. highlight: bash

bioconductor-ballgown
=====================

.. conda:recipe:: bioconductor-ballgown
   :replaces_section_title:
   :noindex:

   Flexible\, isoform\-level differential expression analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ballgown.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ballgown <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ballgown>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ballgown/meta.yaml>`_
   :links: biotools: :biotools:`ballgown`, doi: :doi:`10.1038/nbt.3172`

   Tools for statistical analysis of assembled transcriptomes\, including flexible differential expression analysis\, visualization of transcript structures\, and matching of assembled transcripts to annotation.


.. conda:package:: bioconductor-ballgown

   |downloads_bioconductor-ballgown| |docker_bioconductor-ballgown|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-1</code>,  </span></summary>
      

      ``2.32.0-0``,  ``2.30.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.4-0``,  ``2.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-sva: ``>=3.48.0,<3.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-ballgown

   and update with::

      mamba update bioconductor-ballgown

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ballgown

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ballgown:<tag>

   (see `bioconductor-ballgown/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ballgown| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ballgown.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ballgown
   :alt:   (downloads)
.. |docker_bioconductor-ballgown| image:: https://quay.io/repository/biocontainers/bioconductor-ballgown/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ballgown
.. _`bioconductor-ballgown/tags`: https://quay.io/repository/biocontainers/bioconductor-ballgown?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ballgown";
        var versions = ["2.32.0","2.30.0","2.26.0","2.24.0","2.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ballgown/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ballgown/README.html