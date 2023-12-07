:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgadem'
.. highlight: bash

bioconductor-rgadem
===================

.. conda:recipe:: bioconductor-rgadem
   :replaces_section_title:
   :noindex:

   de novo motif discovery

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/rGADEM.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rgadem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgadem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgadem/meta.yaml>`_
   :links: biotools: :biotools:`rgadem`, doi: :doi:`10.1371/journal.pone.0016432`

   rGADEM is an efficient de novo motif discovery tool for large\-scale genomic sequence data. It is an open\-source R package\, which is based on the GADEM software.


.. conda:package:: bioconductor-rgadem

   |downloads_bioconductor-rgadem| |docker_bioconductor-rgadem|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.50.0-0</code>,  <code>2.48.0-0</code>,  <code>2.46.0-1</code>,  <code>2.46.0-0</code>,  <code>2.42.0-2</code>,  <code>2.42.0-1</code>,  <code>2.42.0-0</code>,  <code>2.40.0-0</code>,  <code>2.38.0-1</code>,  </span></summary>
      

      ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-1``,  ``2.46.0-0``,  ``2.42.0-2``,  ``2.42.0-1``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-1``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.1,<1.71.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-seqlogo: ``>=1.68.0,<1.69.0``
   :depends bioconductor-seqlogo: ``>=1.68.0,<1.69.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
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

      mamba install bioconductor-rgadem

   and update with::

      mamba update bioconductor-rgadem

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rgadem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgadem:<tag>

   (see `bioconductor-rgadem/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgadem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgadem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgadem
   :alt:   (downloads)
.. |docker_bioconductor-rgadem| image:: https://quay.io/repository/biocontainers/bioconductor-rgadem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgadem
.. _`bioconductor-rgadem/tags`: https://quay.io/repository/biocontainers/bioconductor-rgadem?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgadem";
        var versions = ["2.50.0","2.48.0","2.46.0","2.46.0","2.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgadem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgadem/README.html