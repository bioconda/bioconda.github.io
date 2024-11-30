:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tabixpp'
.. highlight: bash

tabixpp
=======

.. conda:recipe:: tabixpp
   :replaces_section_title:
   :noindex:

   A C\+\+ wrapper around the tabix project\, a generic indexer for TAB\-delimited genome position files.

   :homepage: https://github.com/vcflib/tabixpp
   :license: MIT / MIT
   :recipe: /`tabixpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tabixpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tabixpp/meta.yaml>`_
   :links: biotools: :biotools:`tabixpp`

   


.. conda:package:: tabixpp

   |downloads_tabixpp| |docker_tabixpp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.2-3</code>,  <code>1.1.2-2</code>,  <code>1.1.2-1</code>,  <code>1.1.2-0</code>,  <code>1.1.0-13</code>,  <code>1.1.0-12</code>,  <code>1.1.0-11</code>,  <code>1.1.0-10</code>,  <code>1.1.0-9</code>,  </span></summary>
      

      ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.0-13``,  ``1.1.0-12``,  ``1.1.0-11``,  ``1.1.0-10``,  ``1.1.0-9``,  ``1.1.0-8``,  ``1.1.0-7``,  ``1.1.0-6``,  ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.20,<1.22.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends samtools: 
   :depends xz: ``>=5.2.6,<6.0a0``
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

      mamba install tabixpp

   and update with::

      mamba update tabixpp

  To create a new environment, run::

      mamba create --name myenvname tabixpp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tabixpp:<tag>

   (see `tabixpp/tags`_ for valid values for ``<tag>``)


.. |downloads_tabixpp| image:: https://img.shields.io/conda/dn/bioconda/tabixpp.svg?style=flat
   :target: https://anaconda.org/bioconda/tabixpp
   :alt:   (downloads)
.. |docker_tabixpp| image:: https://quay.io/repository/biocontainers/tabixpp/status
   :target: https://quay.io/repository/biocontainers/tabixpp
.. _`tabixpp/tags`: https://quay.io/repository/biocontainers/tabixpp?tab=tags


.. raw:: html

    <script>
        var package = "tabixpp";
        var versions = ["1.1.2","1.1.2","1.1.2","1.1.2","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tabixpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tabixpp/README.html