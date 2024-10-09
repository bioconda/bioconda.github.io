:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'delly'
.. highlight: bash

delly
=====

.. conda:recipe:: delly
   :replaces_section_title:
   :noindex:

   Structural variant discovery by integrated paired\-end and split\-read analysis

   :homepage: https://github.com/dellytools/delly
   :license: BSD / BSD-3-Clause
   :recipe: /`delly <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/delly>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/delly/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bts378`, biotools: :biotools:`Delly2`

   


.. conda:package:: delly

   |downloads_delly| |docker_delly|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-0</code>,  <code>1.2.9-0</code>,  <code>1.2.8-0</code>,  <code>1.2.6-4</code>,  <code>1.2.6-3</code>,  <code>1.2.6-2</code>,  <code>1.2.6-1</code>,  <code>1.2.6-0</code>,  <code>1.1.8-0</code>,  </span></summary>
      

      ``1.3.1-0``,  ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.6-4``,  ``1.2.6-3``,  ``1.2.6-2``,  ``1.2.6-1``,  ``1.2.6-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.6-2``,  ``1.1.6-1``,  ``1.1.6-0``,  ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``0.9.1-4``,  ``0.9.1-3``,  ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.8.7-1``,  ``0.8.7-0``,  ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.3-1``,  ``0.8.3-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-3``,  ``0.8.1-2``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.7.9-4``,  ``0.7.8-4``,  ``0.7.8-3``,  ``0.7.8-2``,  ``0.7.8-1``,  ``0.7.8-0``,  ``0.7.7-1``,  ``0.7.6-0``,  ``0.7.2-1``,  ``0.7.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.21,<1.22.0a0``
   :depends libdeflate: ``>=1.20,<1.21.0a0``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install delly

   and update with::

      mamba update delly

  To create a new environment, run::

      mamba create --name myenvname delly

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/delly:<tag>

   (see `delly/tags`_ for valid values for ``<tag>``)


.. |downloads_delly| image:: https://img.shields.io/conda/dn/bioconda/delly.svg?style=flat
   :target: https://anaconda.org/bioconda/delly
   :alt:   (downloads)
.. |docker_delly| image:: https://quay.io/repository/biocontainers/delly/status
   :target: https://quay.io/repository/biocontainers/delly
.. _`delly/tags`: https://quay.io/repository/biocontainers/delly?tab=tags


.. raw:: html

    <script>
        var package = "delly";
        var versions = ["1.3.1","1.2.9","1.2.8","1.2.6","1.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/delly/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/delly/README.html