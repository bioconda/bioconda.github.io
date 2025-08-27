:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-genepredtoprot'
.. highlight: bash

ucsc-genepredtoprot
===================

.. conda:recipe:: ucsc-genepredtoprot
   :replaces_section_title:
   :noindex:

   Create protein sequences by translating gene annotations.

   :homepage: https://hgdownload.cse.ucsc.edu/admin/exe
   :documentation: https://github.com/ucscGenomeBrowser/kent/blob/v482_base/README
   
   :developer docs: https://github.com/ucscGenomeBrowser/kent
   :license: Varies; see https://genome.ucsc.edu/license
   :recipe: /`ucsc-genepredtoprot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredtoprot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredtoprot/meta.yaml>`_
   :links: biotools: :biotools:`UCSC_Genome_Browser_Utilities`, doi: :doi:`10.1093/bib/bbs038`

   


.. conda:package:: ucsc-genepredtoprot

   |downloads_ucsc-genepredtoprot| |docker_ucsc-genepredtoprot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>482-0</code>,  <code>469-1</code>,  <code>469-0</code>,  <code>377-3</code>,  <code>377-2</code>,  <code>377-1</code>,  <code>377-0</code>,  <code>366-0</code>,  <code>357-2</code>,  </span></summary>
      

      ``482-0``,  ``469-1``,  ``469-0``,  ``377-3``,  ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcxx: ``>=18``
   :depends libiconv: ``>=1.18,<2.0a0``
   :depends liblzma: ``>=5.8.1,<6.0a0``
   :depends libopenssl-static: 
   :depends libpng: ``>=1.6.49,<1.7.0a0``
   :depends libuuid: ``>=2.38.1,<3.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
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

      mamba install ucsc-genepredtoprot

   and update with::

      mamba update ucsc-genepredtoprot

  To create a new environment, run::

      mamba create --name myenvname ucsc-genepredtoprot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ucsc-genepredtoprot:<tag>

   (see `ucsc-genepredtoprot/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-genepredtoprot| image:: https://img.shields.io/conda/dn/bioconda/ucsc-genepredtoprot.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-genepredtoprot
   :alt:   (downloads)
.. |docker_ucsc-genepredtoprot| image:: https://quay.io/repository/biocontainers/ucsc-genepredtoprot/status
   :target: https://quay.io/repository/biocontainers/ucsc-genepredtoprot
.. _`ucsc-genepredtoprot/tags`: https://quay.io/repository/biocontainers/ucsc-genepredtoprot?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-genepredtoprot";
        var versions = ["482","469","469","377","377"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-genepredtoprot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-genepredtoprot/README.html