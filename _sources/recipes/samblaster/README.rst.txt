:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samblaster'
.. highlight: bash

samblaster
==========

.. conda:recipe:: samblaster
   :replaces_section_title:
   :noindex:

   Mark duplicates in and extract discordant and split reads from SAM files.

   :homepage: https://github.com/GregoryFaust/samblaster
   :license: MIT
   :recipe: /`samblaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samblaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samblaster/meta.yaml>`_

   


.. conda:package:: samblaster

   |downloads_samblaster| |docker_samblaster|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.26-6</code>,  <code>0.1.26-5</code>,  <code>0.1.26-4</code>,  <code>0.1.26-3</code>,  <code>0.1.26-2</code>,  <code>0.1.26-1</code>,  <code>0.1.26-0</code>,  <code>0.1.25-0</code>,  <code>0.1.24-3</code>,  </span></summary>
      

      ``0.1.26-6``,  ``0.1.26-5``,  ``0.1.26-4``,  ``0.1.26-3``,  ``0.1.26-2``,  ``0.1.26-1``,  ``0.1.26-0``,  ``0.1.25-0``,  ``0.1.24-3``,  ``0.1.24-2``,  ``0.1.24-1``,  ``0.1.24-0``,  ``0.1.23-0``,  ``0.1.22-0``,  ``0.1.20-5``,  ``0.1.20-4``,  ``0.1.20-3``,  ``0.1.20-2``,  ``0.1.20-1``,  ``0.1.20-0``

      
      .. raw:: html

         </details>
      

   
   :depends libcxx: ``>=18``
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

      mamba install samblaster

   and update with::

      mamba update samblaster

  To create a new environment, run::

      mamba create --name myenvname samblaster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/samblaster:<tag>

   (see `samblaster/tags`_ for valid values for ``<tag>``)


.. |downloads_samblaster| image:: https://img.shields.io/conda/dn/bioconda/samblaster.svg?style=flat
   :target: https://anaconda.org/bioconda/samblaster
   :alt:   (downloads)
.. |docker_samblaster| image:: https://quay.io/repository/biocontainers/samblaster/status
   :target: https://quay.io/repository/biocontainers/samblaster
.. _`samblaster/tags`: https://quay.io/repository/biocontainers/samblaster?tab=tags


.. raw:: html

    <script>
        var package = "samblaster";
        var versions = ["0.1.26","0.1.26","0.1.26","0.1.26","0.1.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samblaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samblaster/README.html