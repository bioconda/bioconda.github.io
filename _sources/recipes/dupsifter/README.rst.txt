:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dupsifter'
.. highlight: bash

dupsifter
=========

.. conda:recipe:: dupsifter
   :replaces_section_title:
   :noindex:

   A tool for PCR duplicate marking of WGBS \(and WGS\) data.

   :homepage: https://github.com/huishenlab/dupsifter
   :license: MIT / MIT
   :recipe: /`dupsifter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dupsifter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dupsifter/meta.yaml>`_

   


.. conda:package:: dupsifter

   |downloads_dupsifter| |docker_dupsifter|

   :versions:
      
      

      ``1.3.0.20241113-1``,  ``1.3.0.20241113-0``,  ``1.2.1.20240119-1``,  ``1.2.1.20240119-0``,  ``1.2.0.20230926-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcurl: ``>=8.11.1,<9.0a0``
   :depends libdeflate: ``>=1.22,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.6.3,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openssl: ``>=3.4.0,<4.0a0``
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

      mamba install dupsifter

   and update with::

      mamba update dupsifter

  To create a new environment, run::

      mamba create --name myenvname dupsifter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dupsifter:<tag>

   (see `dupsifter/tags`_ for valid values for ``<tag>``)


.. |downloads_dupsifter| image:: https://img.shields.io/conda/dn/bioconda/dupsifter.svg?style=flat
   :target: https://anaconda.org/bioconda/dupsifter
   :alt:   (downloads)
.. |docker_dupsifter| image:: https://quay.io/repository/biocontainers/dupsifter/status
   :target: https://quay.io/repository/biocontainers/dupsifter
.. _`dupsifter/tags`: https://quay.io/repository/biocontainers/dupsifter?tab=tags


.. raw:: html

    <script>
        var package = "dupsifter";
        var versions = ["1.3.0.20241113","1.3.0.20241113","1.2.1.20240119","1.2.1.20240119","1.2.0.20230926"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dupsifter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dupsifter/README.html