:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'disco'
.. highlight: bash

disco
=====

.. conda:recipe:: disco
   :replaces_section_title:
   :noindex:

   Multi\-threaded Distributed Memory Overlap\-Layout\-Consensus \(OLC\) Metagenome Assembler.

   :homepage: http://disco.omicsbio.org
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`disco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/disco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/disco/meta.yaml>`_

   


.. conda:package:: disco

   |downloads_disco| |docker_disco|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2-7</code>,  <code>1.2-6</code>,  <code>1.2-5</code>,  <code>1.2-4</code>,  <code>1.2-3</code>,  <code>1.2-2</code>,  <code>1.2-1</code>,  <code>1.2-0</code>,  <code>1.0-5</code>,  </span></summary>
      

      ``1.2-7``,  ``1.2-6``,  ``1.2-5``,  ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bbmap: 
   :depends biopython: 
   :depends libcxx: ``>=18``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends llvm-openmp: ``>=18.1.8``
   :depends llvm-openmp: ``>=19.1.6``
   :depends openmpi: ``>=1.8``
   :depends openmpi: ``>=5.0.6,<6.0a0``
   :depends openssh: 
   :depends zlib: 
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

      mamba install disco

   and update with::

      mamba update disco

  To create a new environment, run::

      mamba create --name myenvname disco

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/disco:<tag>

   (see `disco/tags`_ for valid values for ``<tag>``)


.. |downloads_disco| image:: https://img.shields.io/conda/dn/bioconda/disco.svg?style=flat
   :target: https://anaconda.org/bioconda/disco
   :alt:   (downloads)
.. |docker_disco| image:: https://quay.io/repository/biocontainers/disco/status
   :target: https://quay.io/repository/biocontainers/disco
.. _`disco/tags`: https://quay.io/repository/biocontainers/disco?tab=tags


.. raw:: html

    <script>
        var package = "disco";
        var versions = ["1.2","1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/disco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/disco/README.html