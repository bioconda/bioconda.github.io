:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kractor'
.. highlight: bash

kractor
=======

.. conda:recipe:: kractor
   :replaces_section_title:
   :noindex:

   Rapidly extract reads from a FASTQ file based on taxonomic classification via Kraken2.

   :homepage: https://github.com/Sam-Sims/kractor
   :license: MIT
   :recipe: /`kractor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kractor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kractor/meta.yaml>`_

   


.. conda:package:: kractor

   |downloads_kractor| |docker_kractor|

   :versions:
      
      

      ``2.0.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
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

      mamba install kractor

   and update with::

      mamba update kractor

  To create a new environment, run::

      mamba create --name myenvname kractor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kractor:<tag>

   (see `kractor/tags`_ for valid values for ``<tag>``)


.. |downloads_kractor| image:: https://img.shields.io/conda/dn/bioconda/kractor.svg?style=flat
   :target: https://anaconda.org/bioconda/kractor
   :alt:   (downloads)
.. |docker_kractor| image:: https://quay.io/repository/biocontainers/kractor/status
   :target: https://quay.io/repository/biocontainers/kractor
.. _`kractor/tags`: https://quay.io/repository/biocontainers/kractor?tab=tags


.. raw:: html

    <script>
        var package = "kractor";
        var versions = ["2.0.0","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kractor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kractor/README.html