:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strobealign'
.. highlight: bash

strobealign
===========

.. conda:recipe:: strobealign
   :replaces_section_title:
   :noindex:

   Align short reads using dynamic seed size with strobemers

   :homepage: https://github.com/ksahlin/strobealign
   :license: MIT
   :recipe: /`strobealign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strobealign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strobealign/meta.yaml>`_

   


.. conda:package:: strobealign

   |downloads_strobealign| |docker_strobealign|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.14.0-1</code>,  <code>0.14.0-0</code>,  <code>0.13.0-1</code>,  <code>0.13.0-0</code>,  <code>0.12.0-0</code>,  <code>0.11.0-0</code>,  <code>0.10.0-2</code>,  <code>0.10.0-0</code>,  <code>0.9.0-2</code>,  </span></summary>
      

      ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.0-1``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-2``,  ``0.10.0-0``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.1-1``,  ``0.7.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends isa-l: ``>=2.31.0,<3.0a0``
   :depends libcxx: ``>=18``
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

      mamba install strobealign

   and update with::

      mamba update strobealign

  To create a new environment, run::

      mamba create --name myenvname strobealign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/strobealign:<tag>

   (see `strobealign/tags`_ for valid values for ``<tag>``)


.. |downloads_strobealign| image:: https://img.shields.io/conda/dn/bioconda/strobealign.svg?style=flat
   :target: https://anaconda.org/bioconda/strobealign
   :alt:   (downloads)
.. |docker_strobealign| image:: https://quay.io/repository/biocontainers/strobealign/status
   :target: https://quay.io/repository/biocontainers/strobealign
.. _`strobealign/tags`: https://quay.io/repository/biocontainers/strobealign?tab=tags


.. raw:: html

    <script>
        var package = "strobealign";
        var versions = ["0.14.0","0.14.0","0.13.0","0.13.0","0.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strobealign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strobealign/README.html