:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bambamc'
.. highlight: bash

bambamc
=======

.. conda:recipe:: bambamc
   :replaces_section_title:
   :noindex:

   lightweight C implementation of name collating BAM file input and BAM file output

   :homepage: https://github.com/gt1/bambamc
   :license: GPLv3
   :recipe: /`bambamc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bambamc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bambamc/meta.yaml>`_

   


.. conda:package:: bambamc

   |downloads_bambamc| |docker_bambamc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.50-9</code>,  <code>0.0.50-8</code>,  <code>0.0.50-7</code>,  <code>0.0.50-6</code>,  <code>0.0.50-5</code>,  <code>0.0.50-4</code>,  <code>0.0.50-3</code>,  <code>0.0.50-2</code>,  <code>0.0.50-1</code>,  </span></summary>
      

      ``0.0.50-9``,  ``0.0.50-8``,  ``0.0.50-7``,  ``0.0.50-6``,  ``0.0.50-5``,  ``0.0.50-4``,  ``0.0.50-3``,  ``0.0.50-2``,  ``0.0.50-1``,  ``0.0.50-0``

      
      .. raw:: html

         </details>
      

   
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install bambamc

   and update with::

      mamba update bambamc

  To create a new environment, run::

      mamba create --name myenvname bambamc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bambamc:<tag>

   (see `bambamc/tags`_ for valid values for ``<tag>``)


.. |downloads_bambamc| image:: https://img.shields.io/conda/dn/bioconda/bambamc.svg?style=flat
   :target: https://anaconda.org/bioconda/bambamc
   :alt:   (downloads)
.. |docker_bambamc| image:: https://quay.io/repository/biocontainers/bambamc/status
   :target: https://quay.io/repository/biocontainers/bambamc
.. _`bambamc/tags`: https://quay.io/repository/biocontainers/bambamc?tab=tags


.. raw:: html

    <script>
        var package = "bambamc";
        var versions = ["0.0.50","0.0.50","0.0.50","0.0.50","0.0.50"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bambamc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bambamc/README.html