:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'corset'
.. highlight: bash

corset
======

.. conda:recipe:: corset
   :replaces_section_title:
   :noindex:

   Software for clustering de novo assembled transcripts and counting overlapping reads.

   :homepage: https://github.com/Oshlack/Corset
   :documentation: https://github.com/Oshlack/Corset/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`corset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corset/meta.yaml>`_
   :links: biotools: :biotools:`corset`, doi: :doi:`10.1186/s13059-014-0410-6`

   


.. conda:package:: corset

   |downloads_corset| |docker_corset|

   :versions:
      
      

      ``1.09-6``,  ``1.09-4``,  ``1.09-3``,  ``1.09-2``,  ``1.09-1``,  ``1.09-0``,  ``1.07-0``,  ``1.06-1``,  ``1.06-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends samtools: ``0.1.19.*``
   :depends samtools: ``>=0.1.19,<0.2.0a0``
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

      mamba install corset

   and update with::

      mamba update corset

  To create a new environment, run::

      mamba create --name myenvname corset

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/corset:<tag>

   (see `corset/tags`_ for valid values for ``<tag>``)


.. |downloads_corset| image:: https://img.shields.io/conda/dn/bioconda/corset.svg?style=flat
   :target: https://anaconda.org/bioconda/corset
   :alt:   (downloads)
.. |docker_corset| image:: https://quay.io/repository/biocontainers/corset/status
   :target: https://quay.io/repository/biocontainers/corset
.. _`corset/tags`: https://quay.io/repository/biocontainers/corset?tab=tags


.. raw:: html

    <script>
        var package = "corset";
        var versions = ["1.09","1.09","1.09","1.09","1.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/corset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/corset/README.html