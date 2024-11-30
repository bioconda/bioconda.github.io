:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pullseq'
.. highlight: bash

pullseq
=======

.. conda:recipe:: pullseq
   :replaces_section_title:
   :noindex:

   Utility program for extracting sequences from a fasta\/fastq file.

   :homepage: https://github.com/bcthomas/pullseq
   :license: MIT
   :recipe: /`pullseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pullseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pullseq/meta.yaml>`_

   


.. conda:package:: pullseq

   |downloads_pullseq| |docker_pullseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.2-9</code>,  <code>1.0.2-8</code>,  <code>1.0.2-7</code>,  <code>1.0.2-6</code>,  <code>1.0.2-5</code>,  <code>1.0.2-4</code>,  <code>1.0.2-3</code>,  <code>1.0.2-2</code>,  <code>1.0.2-1</code>,  </span></summary>
      

      ``1.0.2-9``,  ``1.0.2-8``,  ``1.0.2-7``,  ``1.0.2-6``,  ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends pcre: ``>=8.45,<9.0a0``
   :depends zlib: 
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

      mamba install pullseq

   and update with::

      mamba update pullseq

  To create a new environment, run::

      mamba create --name myenvname pullseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pullseq:<tag>

   (see `pullseq/tags`_ for valid values for ``<tag>``)


.. |downloads_pullseq| image:: https://img.shields.io/conda/dn/bioconda/pullseq.svg?style=flat
   :target: https://anaconda.org/bioconda/pullseq
   :alt:   (downloads)
.. |docker_pullseq| image:: https://quay.io/repository/biocontainers/pullseq/status
   :target: https://quay.io/repository/biocontainers/pullseq
.. _`pullseq/tags`: https://quay.io/repository/biocontainers/pullseq?tab=tags


.. raw:: html

    <script>
        var package = "pullseq";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pullseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pullseq/README.html