:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'centrifuger'
.. highlight: bash

centrifuger
===========

.. conda:recipe:: centrifuger
   :replaces_section_title:
   :noindex:

   Lossless compression of microbial genomes for efficient and accurate metagenomic sequence classification.

   :homepage: https://github.com/mourisl/centrifuger
   :license: MIT
   :recipe: /`centrifuger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centrifuger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centrifuger/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.11.15.567129`

   


.. conda:package:: centrifuger

   |downloads_centrifuger| |docker_centrifuger|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.10-0</code>,  <code>1.0.9-0</code>,  <code>1.0.8-0</code>,  <code>1.0.7-0</code>,  <code>1.0.6-2</code>,  <code>1.0.6-1</code>,  <code>1.0.6-0</code>,  <code>1.0.5-1</code>,  <code>1.0.5-0</code>,  </span></summary>
      

      ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-2``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends perl: 
   :depends python: 
   :depends tar: 
   :depends wget: 
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

      mamba install centrifuger

   and update with::

      mamba update centrifuger

  To create a new environment, run::

      mamba create --name myenvname centrifuger

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/centrifuger:<tag>

   (see `centrifuger/tags`_ for valid values for ``<tag>``)


.. |downloads_centrifuger| image:: https://img.shields.io/conda/dn/bioconda/centrifuger.svg?style=flat
   :target: https://anaconda.org/bioconda/centrifuger
   :alt:   (downloads)
.. |docker_centrifuger| image:: https://quay.io/repository/biocontainers/centrifuger/status
   :target: https://quay.io/repository/biocontainers/centrifuger
.. _`centrifuger/tags`: https://quay.io/repository/biocontainers/centrifuger?tab=tags


.. raw:: html

    <script>
        var package = "centrifuger";
        var versions = ["1.0.10","1.0.9","1.0.8","1.0.7","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/centrifuger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/centrifuger/README.html