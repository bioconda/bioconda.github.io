:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kallisto'
.. highlight: bash

kallisto
========

.. conda:recipe:: kallisto
   :replaces_section_title:
   :noindex:

   Quantifying abundances of transcripts from RNA\-Seq data\, or more generally of target sequences using high\-throughput sequencing reads.

   :homepage: https://pachterlab.github.io/kallisto
   :documentation: https://pachterlab.github.io/kallisto/manual.html
   
   :developer docs: https://github.com/pachterlab/kallisto
   :license: BSD / BSD-2-Clause
   :recipe: /`kallisto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kallisto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kallisto/meta.yaml>`_
   :links: biotools: :biotools:`kallisto`, doi: :doi:`10.1038/nbt.3519`, usegalaxy-eu: :usegalaxy-eu:`kallisto_pseudo`, usegalaxy-eu: :usegalaxy-eu:`kallisto_quant`

   


.. conda:package:: kallisto

   |downloads_kallisto| |docker_kallisto|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.51.1-1</code>,  <code>0.51.1-0</code>,  <code>0.51.0-0</code>,  <code>0.50.1-2</code>,  <code>0.50.1-1</code>,  <code>0.50.1-0</code>,  <code>0.50.0-0</code>,  <code>0.48.0-2</code>,  <code>0.48.0-1</code>,  </span></summary>
      

      ``0.51.1-1``,  ``0.51.1-0``,  ``0.51.0-0``,  ``0.50.1-2``,  ``0.50.1-1``,  ``0.50.1-0``,  ``0.50.0-0``,  ``0.48.0-2``,  ``0.48.0-1``,  ``0.48.0-0``,  ``0.46.2-2``,  ``0.46.2-1``,  ``0.46.2-0``,  ``0.46.1-0``,  ``0.46.0-1``,  ``0.46.0-0``,  ``0.45.1-0``,  ``0.45.0-0``,  ``0.44.0-2``,  ``0.44.0-1``,  ``0.43.1-1``,  ``0.43.1-0``,  ``0.43.0-2``,  ``0.43.0-1``,  ``0.42.4-2``,  ``0.42.4-1``,  ``0.42.3-1``,  ``0.42.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends libcurl: ``>=8.11.1,<9.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.6.3,<6.0a0``
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

      mamba install kallisto

   and update with::

      mamba update kallisto

  To create a new environment, run::

      mamba create --name myenvname kallisto

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kallisto:<tag>

   (see `kallisto/tags`_ for valid values for ``<tag>``)


.. |downloads_kallisto| image:: https://img.shields.io/conda/dn/bioconda/kallisto.svg?style=flat
   :target: https://anaconda.org/bioconda/kallisto
   :alt:   (downloads)
.. |docker_kallisto| image:: https://quay.io/repository/biocontainers/kallisto/status
   :target: https://quay.io/repository/biocontainers/kallisto
.. _`kallisto/tags`: https://quay.io/repository/biocontainers/kallisto?tab=tags


.. raw:: html

    <script>
        var package = "kallisto";
        var versions = ["0.51.1","0.51.1","0.51.0","0.50.1","0.50.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kallisto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kallisto/README.html