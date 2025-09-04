:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'goleft'
.. highlight: bash

goleft
======

.. conda:recipe:: goleft
   :replaces_section_title:
   :noindex:

   goleft is a collection of bioinformatics tools distributed under MIT license in a single static binary.

   :homepage: https://github.com/brentp/goleft
   :documentation: https://github.com/brentp/goleft/blob/v0.2.6/README.md
   
   :license: MIT / MIT
   :recipe: /`goleft <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goleft>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goleft/meta.yaml>`_

   


.. conda:package:: goleft

   |downloads_goleft| |docker_goleft|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.6-1</code>,  <code>0.2.6-0</code>,  <code>0.2.4-1</code>,  <code>0.2.4-0</code>,  <code>0.2.0-0</code>,  <code>0.1.18-1</code>,  <code>0.1.18-0</code>,  <code>0.1.17-0</code>,  <code>0.1.16-1</code>,  </span></summary>
      

      ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.0-0``,  ``0.1.18-1``,  ``0.1.18-0``,  ``0.1.17-0``,  ``0.1.16-1``,  ``0.1.16-0``,  ``0.1.14-0``,  ``0.1.13-1``,  ``0.1.12-1``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.6-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends samtools: 
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

      mamba install goleft

   and update with::

      mamba update goleft

  To create a new environment, run::

      mamba create --name myenvname goleft

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/goleft:<tag>

   (see `goleft/tags`_ for valid values for ``<tag>``)


.. |downloads_goleft| image:: https://img.shields.io/conda/dn/bioconda/goleft.svg?style=flat
   :target: https://anaconda.org/bioconda/goleft
   :alt:   (downloads)
.. |docker_goleft| image:: https://quay.io/repository/biocontainers/goleft/status
   :target: https://quay.io/repository/biocontainers/goleft
.. _`goleft/tags`: https://quay.io/repository/biocontainers/goleft?tab=tags


.. raw:: html

    <script>
        var package = "goleft";
        var versions = ["0.2.6","0.2.6","0.2.4","0.2.4","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/goleft/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/goleft/README.html