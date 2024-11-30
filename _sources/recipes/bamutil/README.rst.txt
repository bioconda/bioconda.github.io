:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamutil'
.. highlight: bash

bamutil
=======

.. conda:recipe:: bamutil
   :replaces_section_title:
   :noindex:

   Programs that perform operations on SAM\/BAM files\, all built into a single executable\, bam.

   :homepage: http://genome.sph.umich.edu/wiki/BamUtil
   :license: GPLv3
   :recipe: /`bamutil <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamutil>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamutil/meta.yaml>`_
   :links: biotools: :biotools:`Bamutil`

   


.. conda:package:: bamutil

   |downloads_bamutil| |docker_bamutil|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.15-5</code>,  <code>1.0.15-4</code>,  <code>1.0.15-3</code>,  <code>1.0.15-2</code>,  <code>1.0.15-1</code>,  <code>1.0.15-0</code>,  <code>1.0.14-5</code>,  <code>1.0.14-4</code>,  <code>1.0.14-3</code>,  </span></summary>
      

      ``1.0.15-5``,  ``1.0.15-4``,  ``1.0.15-3``,  ``1.0.15-2``,  ``1.0.15-1``,  ``1.0.15-0``,  ``1.0.14-5``,  ``1.0.14-4``,  ``1.0.14-3``,  ``1.0.14-2``,  ``1.0.14-1``,  ``1.0.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends zlib: 
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

      mamba install bamutil

   and update with::

      mamba update bamutil

  To create a new environment, run::

      mamba create --name myenvname bamutil

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bamutil:<tag>

   (see `bamutil/tags`_ for valid values for ``<tag>``)


.. |downloads_bamutil| image:: https://img.shields.io/conda/dn/bioconda/bamutil.svg?style=flat
   :target: https://anaconda.org/bioconda/bamutil
   :alt:   (downloads)
.. |docker_bamutil| image:: https://quay.io/repository/biocontainers/bamutil/status
   :target: https://quay.io/repository/biocontainers/bamutil
.. _`bamutil/tags`: https://quay.io/repository/biocontainers/bamutil?tab=tags


.. raw:: html

    <script>
        var package = "bamutil";
        var versions = ["1.0.15","1.0.15","1.0.15","1.0.15","1.0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamutil/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamutil/README.html