:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'megadepth'
.. highlight: bash

megadepth
=========

.. conda:recipe:: megadepth
   :replaces_section_title:
   :noindex:

   Megadepth is an efficient tool for extracting coverage related information from RNA and DNA\-seq BAM and BigWig files. It supports reading whole\-genome coverage from BAM files and writing either indexed TSV or BigWig files\, as well as efficient region coverage summary over intervals from both types of files.

   :homepage: https://github.com/ChristopherWilks/megadepth
   :license: MIT / MIT
   :recipe: /`megadepth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megadepth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megadepth/meta.yaml>`_

   


.. conda:package:: megadepth

   |downloads_megadepth| |docker_megadepth|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0-7</code>,  <code>1.2.0-6</code>,  <code>1.2.0-5</code>,  <code>1.2.0-4</code>,  <code>1.2.0-3</code>,  <code>1.2.0-2</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.3-1</code>,  </span></summary>
      

      ``1.2.0-7``,  ``1.2.0-6``,  ``1.2.0-5``,  ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.9b-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.21,<1.24.0a0``
   :depends libbigwig: ``>=0.4.7,<0.5.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install megadepth

   and update with::

      mamba update megadepth

  To create a new environment, run::

      mamba create --name myenvname megadepth

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/megadepth:<tag>

   (see `megadepth/tags`_ for valid values for ``<tag>``)


.. |downloads_megadepth| image:: https://img.shields.io/conda/dn/bioconda/megadepth.svg?style=flat
   :target: https://anaconda.org/bioconda/megadepth
   :alt:   (downloads)
.. |docker_megadepth| image:: https://quay.io/repository/biocontainers/megadepth/status
   :target: https://quay.io/repository/biocontainers/megadepth
.. _`megadepth/tags`: https://quay.io/repository/biocontainers/megadepth?tab=tags


.. raw:: html

    <script>
        var package = "megadepth";
        var versions = ["1.2.0","1.2.0","1.2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/megadepth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/megadepth/README.html