:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sylph'
.. highlight: bash

sylph
=====

.. conda:recipe:: sylph
   :replaces_section_title:
   :noindex:

   sylph quickly enables querying of genomes against even low\-coverage shotgun metagenomes to find nearest neighbour ANI.

   :homepage: https://github.com/bluenote-1577/sylph
   :license: MIT / MIT
   :recipe: /`sylph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sylph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sylph/meta.yaml>`_

   


.. conda:package:: sylph

   |downloads_sylph| |docker_sylph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.0-2</code>,  <code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  </span></summary>
      

      ``0.7.0-2``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``,  ``0.0.3-0``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
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

      mamba install sylph

   and update with::

      mamba update sylph

  To create a new environment, run::

      mamba create --name myenvname sylph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sylph:<tag>

   (see `sylph/tags`_ for valid values for ``<tag>``)


.. |downloads_sylph| image:: https://img.shields.io/conda/dn/bioconda/sylph.svg?style=flat
   :target: https://anaconda.org/bioconda/sylph
   :alt:   (downloads)
.. |docker_sylph| image:: https://quay.io/repository/biocontainers/sylph/status
   :target: https://quay.io/repository/biocontainers/sylph
.. _`sylph/tags`: https://quay.io/repository/biocontainers/sylph?tab=tags


.. raw:: html

    <script>
        var package = "sylph";
        var versions = ["0.7.0","0.7.0","0.7.0","0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sylph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sylph/README.html