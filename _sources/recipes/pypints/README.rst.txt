:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypints'
.. highlight: bash

pypints
=======

.. conda:recipe:: pypints
   :replaces_section_title:
   :noindex:

   Peak Identifier for Nascent Transcripts Starts \(PINTS\)

   :homepage: https://pints.yulab.org
   :developer docs: https://github.com/hyulab/PINTS
   :license: GPL3 / GPL-3.0-only
   :recipe: /`pypints <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypints>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypints/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-022-01211-7`

   


.. conda:package:: pypints

   |downloads_pypints| |docker_pypints|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.14-0</code>,  <code>1.1.13-0</code>,  <code>1.1.10-0</code>,  <code>1.1.9-0</code>,  <code>1.1.8-0</code>,  <code>1.1.7-0</code>,  <code>1.1.6-1</code>,  <code>1.1.6-0</code>,  <code>1.1.4-0</code>,  </span></summary>
      

      ``1.1.14-0``,  ``1.1.13-0``,  ``1.1.10-0``,  ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.6-1``,  ``1.1.6-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends biopython: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pysam: 
   :depends python: 
   :depends requests: 
   :depends samtools: 
   :depends scipy: 
   :depends statsmodels: 
   :depends tabix: 
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

      mamba install pypints

   and update with::

      mamba update pypints

  To create a new environment, run::

      mamba create --name myenvname pypints

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pypints:<tag>

   (see `pypints/tags`_ for valid values for ``<tag>``)


.. |downloads_pypints| image:: https://img.shields.io/conda/dn/bioconda/pypints.svg?style=flat
   :target: https://anaconda.org/bioconda/pypints
   :alt:   (downloads)
.. |docker_pypints| image:: https://quay.io/repository/biocontainers/pypints/status
   :target: https://quay.io/repository/biocontainers/pypints
.. _`pypints/tags`: https://quay.io/repository/biocontainers/pypints?tab=tags


.. raw:: html

    <script>
        var package = "pypints";
        var versions = ["1.1.14","1.1.13","1.1.10","1.1.9","1.1.8"];
    </script>





Notes
-----
The tool provides a set of executable files\: 
\`pints\_caller\` \(for peak calling\, the main program\)\, 
\`pints\_visualizer\` \(for generating bigwig files from bam files\)\, 
\`pints\_normalizer\` \(for normalizing bigwig files by spikein counts\)\, 
and \`pints\_boundary\_extender\`.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypints/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypints/README.html