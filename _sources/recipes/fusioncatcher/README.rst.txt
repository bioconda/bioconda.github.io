:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fusioncatcher'
.. highlight: bash

fusioncatcher
=============

.. conda:recipe:: fusioncatcher
   :replaces_section_title:
   :noindex:

   Finder of Somatic Fusion Genes in RNA\-seq data.

   :homepage: https://github.com/ndaniel/fusioncatcher
   :license: GPL / GPL-3.0
   :recipe: /`fusioncatcher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusioncatcher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusioncatcher/meta.yaml>`_
   :links: doi: :doi:`10.1101/011650`

   


.. conda:package:: fusioncatcher

   |downloads_fusioncatcher| |docker_fusioncatcher|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.33-4</code>,  <code>1.33-3</code>,  <code>1.33-2</code>,  <code>1.33-1</code>,  <code>1.33-0</code>,  <code>1.30-1</code>,  <code>1.30-0</code>,  <code>1.20-2</code>,  <code>1.20-1</code>,  </span></summary>
      

      ``1.33-4``,  ``1.33-3``,  ``1.33-2``,  ``1.33-1``,  ``1.33-0``,  ``1.30-1``,  ``1.30-0``,  ``1.20-2``,  ``1.20-1``,  ``1.20-0``,  ``1.10-3``,  ``1.10-2``,  ``1.10-0``,  ``1.00-1``,  ``1.00-0``

      
      .. raw:: html

         </details>
      

   
   :depends bbmap: ``38.44.*``
   :depends biopython: ``>=1.50``
   :depends blat: ``35.*``
   :depends bowtie: ``1.2.3.*``
   :depends bowtie2: ``2.3.5.*``
   :depends bwa: ``0.7.12.*``
   :depends coreutils: 
   :depends fastqtk: 
   :depends fusioncatcher-seqtk: ``1.2.*``
   :depends grep: 
   :depends gzip: 
   :depends lzo: 
   :depends lzop: 
   :depends numpy: ``1.13.1.*``
   :depends oases: 
   :depends openjdk: 
   :depends openpyxl: ``2.5.0a2.*``
   :depends parallel: ``20171222.*``
   :depends picard: ``2.10.6.*``
   :depends pigz: ``2.3.*``
   :depends python: ``<3``
   :depends samtools: ``0.1.19.*``
   :depends sra-tools: ``2.9.6.*``
   :depends star: ``2.7.2b.*``
   :depends tbb: ``2020.2.*``
   :depends ucsc-fatotwobit: 
   :depends ucsc-liftover: 
   :depends velvet: ``1.2.10.*``
   :depends xlrd: ``1.0.0.*``
   :depends zip: 
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

      mamba install fusioncatcher

   and update with::

      mamba update fusioncatcher

  To create a new environment, run::

      mamba create --name myenvname fusioncatcher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fusioncatcher:<tag>

   (see `fusioncatcher/tags`_ for valid values for ``<tag>``)


.. |downloads_fusioncatcher| image:: https://img.shields.io/conda/dn/bioconda/fusioncatcher.svg?style=flat
   :target: https://anaconda.org/bioconda/fusioncatcher
   :alt:   (downloads)
.. |docker_fusioncatcher| image:: https://quay.io/repository/biocontainers/fusioncatcher/status
   :target: https://quay.io/repository/biocontainers/fusioncatcher
.. _`fusioncatcher/tags`: https://quay.io/repository/biocontainers/fusioncatcher?tab=tags


.. raw:: html

    <script>
        var package = "fusioncatcher";
        var versions = ["1.33","1.33","1.33","1.33","1.33"];
    </script>





Notes
-----
download\-human\-db.sh should be updated when new version of FusionCatcher is released.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fusioncatcher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fusioncatcher/README.html