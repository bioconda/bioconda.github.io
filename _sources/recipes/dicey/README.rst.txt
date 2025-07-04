:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dicey'
.. highlight: bash

dicey
=====

.. conda:recipe:: dicey
   :replaces_section_title:
   :noindex:

   In\-silico PCR and variant primer design.

   :homepage: https://github.com/gear-genomics/dicey
   :documentation: https://github.com/gear-genomics/dicey/blob/v0.3.4/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`dicey <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dicey>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dicey/meta.yaml>`_
   :links: biotools: :biotools:`Gear-Genomics`, doi: :doi:`10.1186/s12864-020-6635-8`

   


.. conda:package:: dicey

   |downloads_dicey| |docker_dicey|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.4-0</code>,  <code>0.3.3-1</code>,  <code>0.3.3-0</code>,  <code>0.3.1-0</code>,  <code>0.2.8-0</code>,  <code>0.2.6-0</code>,  <code>0.2.3-2</code>,  <code>0.2.3-1</code>,  <code>0.2.3-0</code>,  </span></summary>
      

      ``0.3.4-0``,  ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.2.8-0``,  ``0.2.6-0``,  ``0.2.3-2``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.1-0``,  ``0.1.8-3``,  ``0.1.8-2``,  ``0.1.8-1``,  ``0.1.8-0``,  ``0.1.7-2``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.6-2``,  ``0.1.6-1``,  ``0.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.22,<1.23.0a0``
   :depends libdeflate: ``>=1.22,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install dicey

   and update with::

      mamba update dicey

  To create a new environment, run::

      mamba create --name myenvname dicey

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dicey:<tag>

   (see `dicey/tags`_ for valid values for ``<tag>``)


.. |downloads_dicey| image:: https://img.shields.io/conda/dn/bioconda/dicey.svg?style=flat
   :target: https://anaconda.org/bioconda/dicey
   :alt:   (downloads)
.. |docker_dicey| image:: https://quay.io/repository/biocontainers/dicey/status
   :target: https://quay.io/repository/biocontainers/dicey
.. _`dicey/tags`: https://quay.io/repository/biocontainers/dicey?tab=tags


.. raw:: html

    <script>
        var package = "dicey";
        var versions = ["0.3.4","0.3.3","0.3.3","0.3.1","0.2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dicey/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dicey/README.html