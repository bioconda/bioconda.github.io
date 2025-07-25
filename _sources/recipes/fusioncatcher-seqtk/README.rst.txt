:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fusioncatcher-seqtk'
.. highlight: bash

fusioncatcher-seqtk
===================

.. conda:recipe:: fusioncatcher-seqtk
   :replaces_section_title:
   :noindex:

   This is modified Seqtk version required for FusionCatcher.

   :homepage: https://github.com/ndaniel/seqtk
   :license: MIT / MIT
   :recipe: /`fusioncatcher-seqtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusioncatcher-seqtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusioncatcher-seqtk/meta.yaml>`_

   


.. conda:package:: fusioncatcher-seqtk

   |downloads_fusioncatcher-seqtk| |docker_fusioncatcher-seqtk|

   :versions:
      
      

      ``1.2-7``,  ``1.2-6``,  ``1.2-5``,  ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install fusioncatcher-seqtk

   and update with::

      mamba update fusioncatcher-seqtk

  To create a new environment, run::

      mamba create --name myenvname fusioncatcher-seqtk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fusioncatcher-seqtk:<tag>

   (see `fusioncatcher-seqtk/tags`_ for valid values for ``<tag>``)


.. |downloads_fusioncatcher-seqtk| image:: https://img.shields.io/conda/dn/bioconda/fusioncatcher-seqtk.svg?style=flat
   :target: https://anaconda.org/bioconda/fusioncatcher-seqtk
   :alt:   (downloads)
.. |docker_fusioncatcher-seqtk| image:: https://quay.io/repository/biocontainers/fusioncatcher-seqtk/status
   :target: https://quay.io/repository/biocontainers/fusioncatcher-seqtk
.. _`fusioncatcher-seqtk/tags`: https://quay.io/repository/biocontainers/fusioncatcher-seqtk?tab=tags


.. raw:: html

    <script>
        var package = "fusioncatcher-seqtk";
        var versions = ["1.2","1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fusioncatcher-seqtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fusioncatcher-seqtk/README.html