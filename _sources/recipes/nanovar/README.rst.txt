:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanovar'
.. highlight: bash

nanovar
=======

.. conda:recipe:: nanovar
   :replaces_section_title:
   :noindex:

   Structural variant caller using low\-depth long reads

   :homepage: https://github.com/cytham/nanovar
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`nanovar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanovar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanovar/meta.yaml>`_

   


.. conda:package:: nanovar

   |downloads_nanovar| |docker_nanovar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.3-0</code>,  <code>1.8.2-0</code>,  <code>1.8.1-1</code>,  <code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.1-2</code>,  <code>1.4.1-1</code>,  </span></summary>
      

      ``1.8.3-0``,  ``1.8.2-0``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.9-1``,  ``1.3.9-0``,  ``1.3.8-1``,  ``1.3.8-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: ``>=2.26.0``
   :depends biopython: ``>=1.82``
   :depends bs4: ``>=0.0.2``
   :depends libgcc: ``>=13``
   :depends matplotlib-base: ``>=2.2.3``
   :depends minimap2: ``>=2.17``
   :depends natsort: ``>=6.2.0``
   :depends numpy: ``>=1.17.3,<2.0.0``
   :depends pandas: ``>=2.2.3``
   :depends pybedtools: ``>=0.8.2``
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: ``>=1.3``
   :depends scipy: ``>=1.2.1``
   :depends tensorflow-cpu: ``>=2.0.0,<=2.15.1``
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

      mamba install nanovar

   and update with::

      mamba update nanovar

  To create a new environment, run::

      mamba create --name myenvname nanovar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanovar:<tag>

   (see `nanovar/tags`_ for valid values for ``<tag>``)


.. |downloads_nanovar| image:: https://img.shields.io/conda/dn/bioconda/nanovar.svg?style=flat
   :target: https://anaconda.org/bioconda/nanovar
   :alt:   (downloads)
.. |docker_nanovar| image:: https://quay.io/repository/biocontainers/nanovar/status
   :target: https://quay.io/repository/biocontainers/nanovar
.. _`nanovar/tags`: https://quay.io/repository/biocontainers/nanovar?tab=tags


.. raw:: html

    <script>
        var package = "nanovar";
        var versions = ["1.8.3","1.8.2","1.8.1","1.8.1","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanovar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanovar/README.html