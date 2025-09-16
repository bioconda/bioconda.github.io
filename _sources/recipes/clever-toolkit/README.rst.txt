:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clever-toolkit'
.. highlight: bash

clever-toolkit
==============

.. conda:recipe:: clever-toolkit
   :replaces_section_title:
   :noindex:

   The CLEVER Toolkit.

   :homepage: https://bitbucket.org/tobiasmarschall/clever-toolkit
   :documentation: https://bitbucket.org/tobiasmarschall/clever-toolkit/wiki/Home
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`clever-toolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clever-toolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clever-toolkit/meta.yaml>`_

   CTK is a suite of tools to analyze next\-generation sequencing data and\, in particular\, to discover and genotype insertions and deletions from paired\-end reads.


.. conda:package:: clever-toolkit

   |downloads_clever-toolkit| |docker_clever-toolkit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4-14</code>,  <code>2.4-13</code>,  <code>2.4-12</code>,  <code>2.4-11</code>,  <code>2.4-10</code>,  <code>2.4-9</code>,  <code>2.4-8</code>,  <code>2.4-7</code>,  <code>2.4-6</code>,  </span></summary>
      

      ``2.4-14``,  ``2.4-13``,  ``2.4-12``,  ``2.4-11``,  ``2.4-10``,  ``2.4-9``,  ``2.4-8``,  ``2.4-7``,  ``2.4-6``,  ``2.4-5``,  ``2.4-0``,  ``2.3-0``,  ``2.2.1-0``,  ``2.1-3``,  ``2.0rc4-3``,  ``2.0rc4-2``,  ``2.0rc3-1``,  ``2.0rc3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends bwa: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends matplotlib-base: 
   :depends python: ``3.*``
   :depends samtools: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install clever-toolkit

   and update with::

      mamba update clever-toolkit

  To create a new environment, run::

      mamba create --name myenvname clever-toolkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clever-toolkit:<tag>

   (see `clever-toolkit/tags`_ for valid values for ``<tag>``)


.. |downloads_clever-toolkit| image:: https://img.shields.io/conda/dn/bioconda/clever-toolkit.svg?style=flat
   :target: https://anaconda.org/bioconda/clever-toolkit
   :alt:   (downloads)
.. |docker_clever-toolkit| image:: https://quay.io/repository/biocontainers/clever-toolkit/status
   :target: https://quay.io/repository/biocontainers/clever-toolkit
.. _`clever-toolkit/tags`: https://quay.io/repository/biocontainers/clever-toolkit?tab=tags


.. raw:: html

    <script>
        var package = "clever-toolkit";
        var versions = ["2.4","2.4","2.4","2.4","2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clever-toolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clever-toolkit/README.html