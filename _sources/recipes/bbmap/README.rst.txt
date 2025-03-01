:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bbmap'
.. highlight: bash

bbmap
=====

.. conda:recipe:: bbmap
   :replaces_section_title:
   :noindex:

   BBMap is a short read aligner\, as well as various other bioinformatic tools.

   :homepage: https://sourceforge.net/projects/bbmap
   :documentation: https://jgi.doe.gov/data-and-tools/bbtools/bb-tools-user-guide
   
   :license: UC-LBL license (see package)
   :recipe: /`bbmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbmap/meta.yaml>`_
   :links: biotools: :biotools:`bbmap`, usegalaxy-eu: :usegalaxy-eu:`bbtools_bbmap`, usegalaxy-eu: :usegalaxy-eu:`bbtools_callvariants`, usegalaxy-eu: :usegalaxy-eu:`bbtools_bbmerge`, usegalaxy-eu: :usegalaxy-eu:`bbtools_tadpole`, usegalaxy-eu: :usegalaxy-eu:`bbtools_bbduk`, usegalaxy-eu: :usegalaxy-eu:`bbtools_bbnorm`, doi: :doi:`10.1371/journal.pone.0185056`

   


.. conda:package:: bbmap

   |downloads_bbmap| |docker_bbmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>39.18-0</code>,  <code>39.17-0</code>,  <code>39.15-0</code>,  <code>39.13-1</code>,  <code>39.13-0</code>,  <code>39.11-0</code>,  <code>39.10-0</code>,  <code>39.09-0</code>,  <code>39.08-0</code>,  </span></summary>
      

      ``39.18-0``,  ``39.17-0``,  ``39.15-0``,  ``39.13-1``,  ``39.13-0``,  ``39.11-0``,  ``39.10-0``,  ``39.09-0``,  ``39.08-0``,  ``39.06-1``,  ``39.06-0``,  ``39.01-1``,  ``39.01-0``,  ``39.00-0``,  ``38.99-0``,  ``38.98-1``,  ``38.98-0``,  ``38.97-1``,  ``38.97-0``,  ``38.96-1``,  ``38.96-0``,  ``38.95-1``,  ``38.95-0``,  ``38.93-0``,  ``38.92-0``,  ``38.91-1``,  ``38.91-0``,  ``38.90-3``,  ``38.90-2``,  ``38.90-1``,  ``38.90-0``,  ``38.89-0``,  ``38.88-0``,  ``38.87-0``,  ``38.86-0``,  ``38.84-1``,  ``38.84-0``,  ``38.79-0``,  ``38.76-0``,  ``38.75-0``,  ``38.73-0``,  ``38.72-0``,  ``38.71-0``,  ``38.70-0``,  ``38.69-0``,  ``38.68-0``,  ``38.67-0``,  ``38.65-0``,  ``38.63-0``,  ``38.62-0``,  ``38.61b-0``,  ``38.58-0``,  ``38.57-0``,  ``38.56-0``,  ``38.51-0``,  ``38.49-0``,  ``38.46-0``,  ``38.45-0``,  ``38.44-0``,  ``38.22-1``,  ``38.22-0``,  ``38.20-0``,  ``38.19-0``,  ``38.18-0``,  ``38.16-0``,  ``38.06-2``,  ``38.06-0``,  ``37.99-1``,  ``37.99-0``,  ``37.96-0``,  ``37.95-0``,  ``37.90-0``,  ``37.78-0``,  ``37.77-0``,  ``37.75-0``,  ``37.66-0``,  ``37.62-2``,  ``37.62-1``,  ``37.62-0``,  ``37.52-1``,  ``37.52-0``,  ``37.17-1``,  ``37.17-0``,  ``37.10-1``,  ``37.10-0``,  ``37.02-0``,  ``36.84-0``,  ``36.32-0``,  ``35.85-2``,  ``35.85-1``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc: ``>=13``
   :depends openjdk: ``>=11.0.1``
   :depends samtools: ``>=1.21,<2.0a0``
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

      mamba install bbmap

   and update with::

      mamba update bbmap

  To create a new environment, run::

      mamba create --name myenvname bbmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bbmap:<tag>

   (see `bbmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bbmap| image:: https://img.shields.io/conda/dn/bioconda/bbmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bbmap
   :alt:   (downloads)
.. |docker_bbmap| image:: https://quay.io/repository/biocontainers/bbmap/status
   :target: https://quay.io/repository/biocontainers/bbmap
.. _`bbmap/tags`: https://quay.io/repository/biocontainers/bbmap?tab=tags


.. raw:: html

    <script>
        var package = "bbmap";
        var versions = ["39.18","39.17","39.15","39.13","39.13"];
    </script>





Notes
-----
BBMap is a series of Java programs\, but they come with a number of custom
wrapper shell scripts. Each of these is symlinked to the conda bin directory
during install.



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bbmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bbmap/README.html