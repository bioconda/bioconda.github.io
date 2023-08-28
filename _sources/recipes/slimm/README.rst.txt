:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'slimm'
.. highlight: bash

slimm
=====

.. conda:recipe:: slimm
   :replaces_section_title:
   :noindex:

   SLIMM \- Species Level Identification of Microbes from Metagenomes

   :homepage: https://github.com/seqan/slimm/blob/master/README.md
   :license: https://github.com/seqan/slimm/blob/master/LICENSE
   :recipe: /`slimm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slimm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slimm/meta.yaml>`_
   :links: biotools: :biotools:`slimm`, doi: :doi:`10.7717/peerj.3138`

   


.. conda:package:: slimm

   |downloads_slimm| |docker_slimm|

   :versions:
      
      

      ``0.3.4-5``,  ``0.3.4-4``,  ``0.3.4-3``,  ``0.3.4-2``,  ``0.3.4-1``,  ``0.3.4-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install slimm

   and update with::

      mamba update slimm

  To create a new environment, run::

      mamba create --name myenvname slimm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/slimm:<tag>

   (see `slimm/tags`_ for valid values for ``<tag>``)


.. |downloads_slimm| image:: https://img.shields.io/conda/dn/bioconda/slimm.svg?style=flat
   :target: https://anaconda.org/bioconda/slimm
   :alt:   (downloads)
.. |docker_slimm| image:: https://quay.io/repository/biocontainers/slimm/status
   :target: https://quay.io/repository/biocontainers/slimm
.. _`slimm/tags`: https://quay.io/repository/biocontainers/slimm?tab=tags


.. raw:: html

    <script>
        var package = "slimm";
        var versions = ["0.3.4","0.3.4","0.3.4","0.3.4","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slimm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slimm/README.html