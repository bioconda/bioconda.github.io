:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bitmapperbs'
.. highlight: bash

bitmapperbs
===========

.. conda:recipe:: bitmapperbs
   :replaces_section_title:
   :noindex:

   BitMapperBS\: a fast and accurate read aligner for whole\-genome bisulfite sequencing

   :homepage: https://github.com/chhylp123/BitMapperBS
   :license: Apache License 2
   :recipe: /`bitmapperbs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bitmapperbs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bitmapperbs/meta.yaml>`_

   


.. conda:package:: bitmapperbs

   |downloads_bitmapperbs| |docker_bitmapperbs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.2.3-5</code>,  <code>1.0.2.3-4</code>,  <code>1.0.2.3-3</code>,  <code>1.0.2.3-2</code>,  <code>1.0.2.3-1</code>,  <code>1.0.2.3-0</code>,  <code>1.0.2.1-0</code>,  <code>1.0.2.0-0</code>,  <code>1.0.1.6-0</code>,  </span></summary>
      

      ``1.0.2.3-5``,  ``1.0.2.3-4``,  ``1.0.2.3-3``,  ``1.0.2.3-2``,  ``1.0.2.3-1``,  ``1.0.2.3-0``,  ``1.0.2.1-0``,  ``1.0.2.0-0``,  ``1.0.1.6-0``,  ``1.0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libdivsufsort: ``>=2.0.2,<2.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
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

      mamba install bitmapperbs

   and update with::

      mamba update bitmapperbs

  To create a new environment, run::

      mamba create --name myenvname bitmapperbs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bitmapperbs:<tag>

   (see `bitmapperbs/tags`_ for valid values for ``<tag>``)


.. |downloads_bitmapperbs| image:: https://img.shields.io/conda/dn/bioconda/bitmapperbs.svg?style=flat
   :target: https://anaconda.org/bioconda/bitmapperbs
   :alt:   (downloads)
.. |docker_bitmapperbs| image:: https://quay.io/repository/biocontainers/bitmapperbs/status
   :target: https://quay.io/repository/biocontainers/bitmapperbs
.. _`bitmapperbs/tags`: https://quay.io/repository/biocontainers/bitmapperbs?tab=tags


.. raw:: html

    <script>
        var package = "bitmapperbs";
        var versions = ["1.0.2.3","1.0.2.3","1.0.2.3","1.0.2.3","1.0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bitmapperbs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bitmapperbs/README.html