:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pandaseq'
.. highlight: bash

pandaseq
========

.. conda:recipe:: pandaseq
   :replaces_section_title:
   :noindex:

   PANDASEQ is a program to align Illumina reads\, optionally with PCR primers embedded in the sequence\, and reconstruct an overlapping sequence.

   :homepage: https://github.com/neufeld/pandaseq
   :license: GPL3
   :recipe: /`pandaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pandaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pandaseq/meta.yaml>`_

   


.. conda:package:: pandaseq

   |downloads_pandaseq| |docker_pandaseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.11-8</code>,  <code>2.11-7</code>,  <code>2.11-6</code>,  <code>2.11-5</code>,  <code>2.11-4</code>,  <code>2.11-3</code>,  <code>2.11-2</code>,  <code>2.11-1</code>,  <code>2.10-0</code>,  </span></summary>
      

      ``2.11-8``,  ``2.11-7``,  ``2.11-6``,  ``2.11-5``,  ``2.11-4``,  ``2.11-3``,  ``2.11-2``,  ``2.11-1``,  ``2.10-0``,  ``2.8.1-7``,  ``2.8.1-6``,  ``2.8.1-5``,  ``2.8.1-4``,  ``2.8.1-3``,  ``2.8.1-2``,  ``2.8.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pandaseq

   and update with::

      mamba update pandaseq

  To create a new environment, run::

      mamba create --name myenvname pandaseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pandaseq:<tag>

   (see `pandaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_pandaseq| image:: https://img.shields.io/conda/dn/bioconda/pandaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/pandaseq
   :alt:   (downloads)
.. |docker_pandaseq| image:: https://quay.io/repository/biocontainers/pandaseq/status
   :target: https://quay.io/repository/biocontainers/pandaseq
.. _`pandaseq/tags`: https://quay.io/repository/biocontainers/pandaseq?tab=tags


.. raw:: html

    <script>
        var package = "pandaseq";
        var versions = ["2.11","2.11","2.11","2.11","2.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pandaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pandaseq/README.html