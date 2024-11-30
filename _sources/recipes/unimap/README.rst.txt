:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unimap'
.. highlight: bash

unimap
======

.. conda:recipe:: unimap
   :replaces_section_title:
   :noindex:

   Unimap is a fork of minimap2 optimized for assembly\-to\-reference alignment.

   :homepage: https://github.com/lh3/unimap
   :license: MIT
   :recipe: /`unimap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unimap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unimap/meta.yaml>`_

   Unimap is a fork of minimap2 optimized for assembly\-to\-reference alignment. It integrates the minigraph chaining algorithm and can align through long INDELs \(up to 100kb by default\) much faster than minimap2. Unimap is a better fit for resolving segmental duplications and is recommended over minimap2 for alignment between high\-quality assemblies.

   Unimap does not replace minimap2 for other types of alignment. It drops the support of multi\-part index and short\-read mapping. Its long\-read alignment is different from minimap2 but is not necessarily better. Unimap is more of a specialized minimap2 at the moment.


.. conda:package:: unimap

   |downloads_unimap| |docker_unimap|

   :versions:
      
      

      ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install unimap

   and update with::

      mamba update unimap

  To create a new environment, run::

      mamba create --name myenvname unimap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/unimap:<tag>

   (see `unimap/tags`_ for valid values for ``<tag>``)


.. |downloads_unimap| image:: https://img.shields.io/conda/dn/bioconda/unimap.svg?style=flat
   :target: https://anaconda.org/bioconda/unimap
   :alt:   (downloads)
.. |docker_unimap| image:: https://quay.io/repository/biocontainers/unimap/status
   :target: https://quay.io/repository/biocontainers/unimap
.. _`unimap/tags`: https://quay.io/repository/biocontainers/unimap?tab=tags


.. raw:: html

    <script>
        var package = "unimap";
        var versions = ["0.1","0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unimap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unimap/README.html