:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastplong'
.. highlight: bash

fastplong
=========

.. conda:recipe:: fastplong
   :replaces_section_title:
   :noindex:

   Ultra\-fast preprocessing and quality control for long\-read sequencing data.

   :homepage: https://github.com/OpenGene/fastplong
   :documentation: https://github.com/OpenGene/fastplong/blob/v0.3.0/README.md
   
   :license: MIT / MIT
   :recipe: /`fastplong <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastplong>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastplong/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty560`, doi: :doi:`10.1002/imt2.107`

   


.. conda:package:: fastplong

   |downloads_fastplong| |docker_fastplong|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends isa-l: ``>=2.31.1,<3.0a0``
   :depends libdeflate: ``>=1.22,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends libhwy: ``>=1.1.0,<1.2.0a0``
   :depends libstdcxx: ``>=13``
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

      mamba install fastplong

   and update with::

      mamba update fastplong

  To create a new environment, run::

      mamba create --name myenvname fastplong

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastplong:<tag>

   (see `fastplong/tags`_ for valid values for ``<tag>``)


.. |downloads_fastplong| image:: https://img.shields.io/conda/dn/bioconda/fastplong.svg?style=flat
   :target: https://anaconda.org/bioconda/fastplong
   :alt:   (downloads)
.. |docker_fastplong| image:: https://quay.io/repository/biocontainers/fastplong/status
   :target: https://quay.io/repository/biocontainers/fastplong
.. _`fastplong/tags`: https://quay.io/repository/biocontainers/fastplong?tab=tags


.. raw:: html

    <script>
        var package = "fastplong";
        var versions = ["0.3.0","0.2.2","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastplong/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastplong/README.html