:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqfu'
.. highlight: bash

seqfu
=====

.. conda:recipe:: seqfu
   :replaces_section_title:
   :noindex:

   DNA sequence utilities

   :homepage: https://github.com/telatin/seqfu2/
   :license: GPL-3.0-only
   :recipe: /`seqfu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqfu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqfu/meta.yaml>`_
   :links: biotools: :biotools:`seqfu`, doi: :doi:`10.3390/bioengineering8050059`

   A collection of utilities to work with FASTX \(FASTA or FASTQ\) files
   that accept gzipped input.
   Tools to interleave and deinterleave\, to calculate stats\, and extract
   portions of sequence datasets.



.. conda:package:: seqfu

   |downloads_seqfu| |docker_seqfu|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.3-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.17.1-2</code>,  <code>1.17.1-1</code>,  <code>1.17.1-0</code>,  <code>1.17.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.20.3-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.17.1-2``,  ``1.17.1-1``,  ``1.17.1-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.15.3-0``,  ``1.15.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.13.2-0``,  ``1.13.1-0``,  ``1.13.0-1``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.11.0-0``,  ``1.10.0-0``,  ``1.9.3-0``,  ``1.9.2-1``,  ``1.9.2-0``,  ``1.9.1-1``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.9-0``,  ``1.8.8-0``,  ``1.8.7-1``,  ``1.8.7-0``,  ``1.8.6-0``,  ``1.8.5-0``,  ``1.8.4-0``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.3-0``,  ``1.6.0-0``,  ``1.5.2-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.6-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.3-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.9.6-0``,  ``0.9.5-0``,  ``0.9.1-0``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.13-0``,  ``0.8.12-0``,  ``0.8.11-0``,  ``0.8.10-0``,  ``0.8.8-0``,  ``0.8.7-0``,  ``0.8.5-0``,  ``0.8.2-0``,  ``0.6.0-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends pcre: ``>=8.45,<9.0a0``
   :depends zlib: 
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

      mamba install seqfu

   and update with::

      mamba update seqfu

  To create a new environment, run::

      mamba create --name myenvname seqfu

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqfu:<tag>

   (see `seqfu/tags`_ for valid values for ``<tag>``)


.. |downloads_seqfu| image:: https://img.shields.io/conda/dn/bioconda/seqfu.svg?style=flat
   :target: https://anaconda.org/bioconda/seqfu
   :alt:   (downloads)
.. |docker_seqfu| image:: https://quay.io/repository/biocontainers/seqfu/status
   :target: https://quay.io/repository/biocontainers/seqfu
.. _`seqfu/tags`: https://quay.io/repository/biocontainers/seqfu?tab=tags


.. raw:: html

    <script>
        var package = "seqfu";
        var versions = ["1.20.3","1.20.0","1.20.0","1.18.0","1.17.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqfu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqfu/README.html