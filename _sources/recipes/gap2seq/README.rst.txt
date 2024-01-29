:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gap2seq'
.. highlight: bash

gap2seq
=======

.. conda:recipe:: gap2seq
   :replaces_section_title:
   :noindex:

   Gap2Seq is a tool for filling gaps between contigs in genome assemblies.

   :homepage: https://www.cs.helsinki.fi/u/lmsalmel/Gap2Seq/
   :license: GPLv3
   :recipe: /`gap2seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gap2seq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gap2seq/meta.yaml>`_

   


.. conda:package:: gap2seq

   |downloads_gap2seq| |docker_gap2seq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.1a-2</code>,  <code>3.1.1a-1</code>,  <code>3.1.1a-0</code>,  <code>3.1-3</code>,  <code>3.1-2</code>,  <code>3.1-1</code>,  <code>3.1-0</code>,  <code>2.1-4</code>,  <code>2.1-3</code>,  </span></summary>
      

      ``3.1.1a-2``,  ``3.1.1a-1``,  ``3.1.1a-0``,  ``3.1-3``,  ``3.1-2``,  ``3.1-1``,  ``3.1-0``,  ``2.1-4``,  ``2.1-3``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``,  ``2.0-8``,  ``2.0-7``,  ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install gap2seq

   and update with::

      mamba update gap2seq

  To create a new environment, run::

      mamba create --name myenvname gap2seq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gap2seq:<tag>

   (see `gap2seq/tags`_ for valid values for ``<tag>``)


.. |downloads_gap2seq| image:: https://img.shields.io/conda/dn/bioconda/gap2seq.svg?style=flat
   :target: https://anaconda.org/bioconda/gap2seq
   :alt:   (downloads)
.. |docker_gap2seq| image:: https://quay.io/repository/biocontainers/gap2seq/status
   :target: https://quay.io/repository/biocontainers/gap2seq
.. _`gap2seq/tags`: https://quay.io/repository/biocontainers/gap2seq?tab=tags


.. raw:: html

    <script>
        var package = "gap2seq";
        var versions = ["3.1.1a","3.1.1a","3.1.1a","3.1","3.1"];
    </script>





Notes
-----
Gap2Seq is only tested on Linux x86\_64 by its author.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gap2seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gap2seq/README.html