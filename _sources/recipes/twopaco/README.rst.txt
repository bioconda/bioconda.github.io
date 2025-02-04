:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'twopaco'
.. highlight: bash

twopaco
=======

.. conda:recipe:: twopaco
   :replaces_section_title:
   :noindex:

   A fast constructor of the compressed de Bruijn graph from many genomes.

   :homepage: https://github.com/medvedevgroup/TwoPaCo
   :license: Custom OSS
   :recipe: /`twopaco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/twopaco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/twopaco/meta.yaml>`_

   


.. conda:package:: twopaco

   |downloads_twopaco| |docker_twopaco|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.0-3</code>,  <code>1.0.0-2</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  <code>0.9.4-3</code>,  <code>0.9.4-2</code>,  <code>0.9.4-1</code>,  </span></summary>
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.9.4-3``,  ``0.9.4-2``,  ``0.9.4-1``,  ``0.9.4-0``,  ``0.9.2-3``,  ``0.9.2-2``,  ``0.9.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends tbb: ``>=2021.13.0``
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

      mamba install twopaco

   and update with::

      mamba update twopaco

  To create a new environment, run::

      mamba create --name myenvname twopaco

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/twopaco:<tag>

   (see `twopaco/tags`_ for valid values for ``<tag>``)


.. |downloads_twopaco| image:: https://img.shields.io/conda/dn/bioconda/twopaco.svg?style=flat
   :target: https://anaconda.org/bioconda/twopaco
   :alt:   (downloads)
.. |docker_twopaco| image:: https://quay.io/repository/biocontainers/twopaco/status
   :target: https://quay.io/repository/biocontainers/twopaco
.. _`twopaco/tags`: https://quay.io/repository/biocontainers/twopaco?tab=tags


.. raw:: html

    <script>
        var package = "twopaco";
        var versions = ["1.1.0","1.1.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/twopaco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/twopaco/README.html