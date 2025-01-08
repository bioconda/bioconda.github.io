:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motifdb'
.. highlight: bash

bioconductor-motifdb
====================

.. conda:recipe:: bioconductor-motifdb
   :replaces_section_title:
   :noindex:

   An Annotated Collection of Protein\-DNA Binding Sequence Motifs

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MotifDb.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-motifdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifdb/meta.yaml>`_
   :links: biotools: :biotools:`motifdb`, doi: :doi:`10.1038/nmeth.3252`

   More than 9900 annotated position frequency matrices from 14 public sources\, for multiple organisms.


.. conda:package:: bioconductor-motifdb

   |downloads_bioconductor-motifdb| |docker_bioconductor-motifdb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.1-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-splitstackshape: 
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

      mamba install bioconductor-motifdb

   and update with::

      mamba update bioconductor-motifdb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-motifdb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-motifdb:<tag>

   (see `bioconductor-motifdb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-motifdb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motifdb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motifdb
   :alt:   (downloads)
.. |docker_bioconductor-motifdb| image:: https://quay.io/repository/biocontainers/bioconductor-motifdb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motifdb
.. _`bioconductor-motifdb/tags`: https://quay.io/repository/biocontainers/bioconductor-motifdb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-motifdb";
        var versions = ["1.48.0","1.44.0","1.42.0","1.40.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motifdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motifdb/README.html