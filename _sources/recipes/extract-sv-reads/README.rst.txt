:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'extract-sv-reads'
.. highlight: bash

extract-sv-reads
================

.. conda:recipe:: extract-sv-reads
   :replaces_section_title:
   :noindex:

   Tool for extracting splitter or discordant reads from a BAM or CRAM file.

   :homepage: https://github.com/hall-lab/extract_sv_reads
   :license: MIT
   :recipe: /`extract-sv-reads <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract-sv-reads>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract-sv-reads/meta.yaml>`_

   


.. conda:package:: extract-sv-reads

   |downloads_extract-sv-reads| |docker_extract-sv-reads|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.0-6</code>,  <code>1.3.0-5</code>,  <code>1.3.0-4</code>,  <code>1.3.0-3</code>,  <code>1.3.0-2</code>,  <code>1.3.0-1</code>,  <code>1.3.0-0</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  </span></summary>
      

      ``1.3.0-6``,  ``1.3.0-5``,  ``1.3.0-4``,  ``1.3.0-3``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.1.2-0``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends htslib: ``1.9.*``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install extract-sv-reads

   and update with::

      mamba update extract-sv-reads

  To create a new environment, run::

      mamba create --name myenvname extract-sv-reads

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/extract-sv-reads:<tag>

   (see `extract-sv-reads/tags`_ for valid values for ``<tag>``)


.. |downloads_extract-sv-reads| image:: https://img.shields.io/conda/dn/bioconda/extract-sv-reads.svg?style=flat
   :target: https://anaconda.org/bioconda/extract-sv-reads
   :alt:   (downloads)
.. |docker_extract-sv-reads| image:: https://quay.io/repository/biocontainers/extract-sv-reads/status
   :target: https://quay.io/repository/biocontainers/extract-sv-reads
.. _`extract-sv-reads/tags`: https://quay.io/repository/biocontainers/extract-sv-reads?tab=tags


.. raw:: html

    <script>
        var package = "extract-sv-reads";
        var versions = ["1.3.0","1.3.0","1.3.0","1.3.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/extract-sv-reads/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/extract-sv-reads/README.html