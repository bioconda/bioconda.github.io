:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastk'
.. highlight: bash

fastk
=====

.. conda:recipe:: fastk
   :replaces_section_title:
   :noindex:

   FastK is a k‑mer counter that is optimized for processing high quality DNA assembly data sets such as those produced with an Illumina instrument or a PacBio run in HiFi mode.

   :homepage: https://github.com/thegenemyers/FASTK
   :license: https://github.com/thegenemyers/FASTK/blob/master/LICENSE
   :recipe: /`fastk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastk/meta.yaml>`_

   


.. conda:package:: fastk

   |downloads_fastk| |docker_fastk|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0.0-1``,  ``1.0-1``,  ``1.0-0``,  ``1.0.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcurl: ``>=8.11.1,<9.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install fastk

   and update with::

      mamba update fastk

  To create a new environment, run::

      mamba create --name myenvname fastk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastk:<tag>

   (see `fastk/tags`_ for valid values for ``<tag>``)


.. |downloads_fastk| image:: https://img.shields.io/conda/dn/bioconda/fastk.svg?style=flat
   :target: https://anaconda.org/bioconda/fastk
   :alt:   (downloads)
.. |docker_fastk| image:: https://quay.io/repository/biocontainers/fastk/status
   :target: https://quay.io/repository/biocontainers/fastk
.. _`fastk/tags`: https://quay.io/repository/biocontainers/fastk?tab=tags


.. raw:: html

    <script>
        var package = "fastk";
        var versions = ["1.1.0","1.1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastk/README.html