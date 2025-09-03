:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quip'
.. highlight: bash

quip
====

.. conda:recipe:: quip
   :replaces_section_title:
   :noindex:

   Aggressive compression of FASTQ and SAM\/BAM files.

   :homepage: http://homes.cs.washington.edu/%7Edcjones/quip
   :license: Custom
   :recipe: /`quip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quip/meta.yaml>`_
   :links: biotools: :biotools:`quip`, doi: :doi:`10.1093/nar/gks754`

   


.. conda:package:: quip

   |downloads_quip| |docker_quip|

   :versions:
      
      

      ``1.1.8-3``,  ``1.1.8-1``,  ``1.1.8-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc: ``>=13``
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

      mamba install quip

   and update with::

      mamba update quip

  To create a new environment, run::

      mamba create --name myenvname quip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/quip:<tag>

   (see `quip/tags`_ for valid values for ``<tag>``)


.. |downloads_quip| image:: https://img.shields.io/conda/dn/bioconda/quip.svg?style=flat
   :target: https://anaconda.org/bioconda/quip
   :alt:   (downloads)
.. |docker_quip| image:: https://quay.io/repository/biocontainers/quip/status
   :target: https://quay.io/repository/biocontainers/quip
.. _`quip/tags`: https://quay.io/repository/biocontainers/quip?tab=tags


.. raw:: html

    <script>
        var package = "quip";
        var versions = ["1.1.8","1.1.8","1.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quip/README.html