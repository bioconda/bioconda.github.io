:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ipddb'
.. highlight: bash

bioconductor-ipddb
==================

.. conda:recipe:: bioconductor-ipddb
   :replaces_section_title:
   :noindex:

   IPD IMGT\/HLA and IPD KIR database for Homo sapiens

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ipdDb.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ipddb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ipddb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ipddb/meta.yaml>`_

   All alleles from the IPD IMGT\/HLA \<https\:\/\/www.ebi.ac.uk\/ipd\/imgt\/hla\/\> and IPD KIR \<https\:\/\/www.ebi.ac.uk\/ipd\/kir\/\> database for Homo sapiens. Reference\: Robinson J\, Maccari G\, Marsh SGE\, Walter L\, Blokhuis J\, Bimber B\, Parham P\, De Groot NG\, Bontrop RE\, Guethlein LA\, and Hammond JA KIR Nomenclature in non\-human species Immunogenetics \(2018\)\, in preparation.


.. conda:package:: bioconductor-ipddb

   |downloads_bioconductor-ipddb| |docker_bioconductor-ipddb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbi: 
   :depends r-rsqlite: 
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

      mamba install bioconductor-ipddb

   and update with::

      mamba update bioconductor-ipddb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ipddb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ipddb:<tag>

   (see `bioconductor-ipddb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ipddb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ipddb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ipddb
   :alt:   (downloads)
.. |docker_bioconductor-ipddb| image:: https://quay.io/repository/biocontainers/bioconductor-ipddb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ipddb
.. _`bioconductor-ipddb/tags`: https://quay.io/repository/biocontainers/bioconductor-ipddb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ipddb";
        var versions = ["1.24.0","1.20.0","1.18.0","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ipddb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ipddb/README.html