:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqlib'
.. highlight: bash

seqlib
======

.. conda:recipe:: seqlib
   :replaces_section_title:
   :noindex:

   C\+\+ interface to HTSlib\, BWA\-MEM and Fermi.

   :homepage: https://github.com/walaj/SeqLib
   :documentation: https://github.com/walaj/SeqLib/blob/1.2.0/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`seqlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqlib/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btw741`

   


.. conda:package:: seqlib

   |downloads_seqlib| |docker_seqlib|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.21,<1.22.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.6.4,<6.0a0``
   :depends libstdcxx: ``>=13``
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

      mamba install seqlib

   and update with::

      mamba update seqlib

  To create a new environment, run::

      mamba create --name myenvname seqlib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqlib:<tag>

   (see `seqlib/tags`_ for valid values for ``<tag>``)


.. |downloads_seqlib| image:: https://img.shields.io/conda/dn/bioconda/seqlib.svg?style=flat
   :target: https://anaconda.org/bioconda/seqlib
   :alt:   (downloads)
.. |docker_seqlib| image:: https://quay.io/repository/biocontainers/seqlib/status
   :target: https://quay.io/repository/biocontainers/seqlib
.. _`seqlib/tags`: https://quay.io/repository/biocontainers/seqlib?tab=tags


.. raw:: html

    <script>
        var package = "seqlib";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqlib/README.html