:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biostrings'
.. highlight: bash

bioconductor-biostrings
=======================

.. conda:recipe:: bioconductor-biostrings
   :replaces_section_title:
   :noindex:

   Efficient manipulation of biological strings

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Biostrings.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biostrings <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biostrings>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biostrings/meta.yaml>`_
   :links: biotools: :biotools:`biostrings`, doi: :doi:`10.1038/nmeth.3252`

   Memory efficient string containers\, string matching algorithms\, and other utilities\, for fast manipulation of large biological sequences or sets of sequences.


.. conda:package:: bioconductor-biostrings

   |downloads_bioconductor-biostrings| |docker_bioconductor-biostrings|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.68.1-0</code>,  <code>2.66.0-1</code>,  <code>2.66.0-0</code>,  <code>2.62.0-2</code>,  <code>2.62.0-1</code>,  <code>2.62.0-0</code>,  <code>2.60.0-0</code>,  <code>2.58.0-1</code>,  <code>2.58.0-0</code>,  </span></summary>
      

      ``2.68.1-0``,  ``2.66.0-1``,  ``2.66.0-0``,  ``2.62.0-2``,  ``2.62.0-1``,  ``2.62.0-0``,  ``2.60.0-0``,  ``2.58.0-1``,  ``2.58.0-0``,  ``2.56.0-0``,  ``2.54.0-0``,  ``2.52.0-1``,  ``2.50.2-0``,  ``2.50.1-0``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.2-0``,  ``2.42.1-0``,  ``2.40.2-0``,  ``2.40.0-0``,  ``2.38.4-0``,  ``2.38.3-0``,  ``2.38.2-0``,  ``2.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-xvector: ``>=0.40.0,<0.41.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-crayon: 
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

      mamba install bioconductor-biostrings

   and update with::

      mamba update bioconductor-biostrings

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biostrings

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biostrings:<tag>

   (see `bioconductor-biostrings/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biostrings| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biostrings.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biostrings
   :alt:   (downloads)
.. |docker_bioconductor-biostrings| image:: https://quay.io/repository/biocontainers/bioconductor-biostrings/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biostrings
.. _`bioconductor-biostrings/tags`: https://quay.io/repository/biocontainers/bioconductor-biostrings?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biostrings";
        var versions = ["2.68.1","2.66.0","2.66.0","2.62.0","2.62.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biostrings/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biostrings/README.html