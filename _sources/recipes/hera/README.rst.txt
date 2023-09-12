:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hera'
.. highlight: bash

hera
====

.. conda:recipe:: hera
   :replaces_section_title:
   :noindex:

   hera is a bioinformatics tool that helps analyze RNA\-seq data\, providing base\-to\-base alignment BAM files\, transcript abundance estimation\, and fusion gene detection.

   :homepage: https://github.com/bioturing/hera
   :license: MIT
   :recipe: /`hera <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hera>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hera/meta.yaml>`_

   


.. conda:package:: hera

   |downloads_hera| |docker_hera|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1-10</code>,  <code>1.1-9</code>,  <code>1.1-8</code>,  <code>1.1-7</code>,  <code>1.1-6</code>,  <code>1.1-5</code>,  <code>1.1-4</code>,  <code>1.1-3</code>,  <code>1.1-2</code>,  </span></summary>
      

      ``1.1-10``,  ``1.1-9``,  ``1.1-8``,  ``1.1-7``,  ``1.1-6``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0.1-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends hdf5: ``>=1.12.2,<1.12.3.0a0``
   :depends htslib: ``>=1.17,<1.19.0a0``
   :depends libdivsufsort: ``>=2.0.2,<2.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: 
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

      mamba install hera

   and update with::

      mamba update hera

  To create a new environment, run::

      mamba create --name myenvname hera

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hera:<tag>

   (see `hera/tags`_ for valid values for ``<tag>``)


.. |downloads_hera| image:: https://img.shields.io/conda/dn/bioconda/hera.svg?style=flat
   :target: https://anaconda.org/bioconda/hera
   :alt:   (downloads)
.. |docker_hera| image:: https://quay.io/repository/biocontainers/hera/status
   :target: https://quay.io/repository/biocontainers/hera
.. _`hera/tags`: https://quay.io/repository/biocontainers/hera?tab=tags


.. raw:: html

    <script>
        var package = "hera";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hera/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hera/README.html