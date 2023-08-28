:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reseq'
.. highlight: bash

reseq
=====

.. conda:recipe:: reseq
   :replaces_section_title:
   :noindex:

   ReSeq Illumina\/BGI simulator

   :homepage: https://github.com/schmeing/ReSeq/tree/devel
   :license: MIT
   :recipe: /`reseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reseq/meta.yaml>`_

   


.. conda:package:: reseq

   |downloads_reseq| |docker_reseq|

   :versions:
      
      

      ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install reseq

   and update with::

      mamba update reseq

  To create a new environment, run::

      mamba create --name myenvname reseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/reseq:<tag>

   (see `reseq/tags`_ for valid values for ``<tag>``)


.. |downloads_reseq| image:: https://img.shields.io/conda/dn/bioconda/reseq.svg?style=flat
   :target: https://anaconda.org/bioconda/reseq
   :alt:   (downloads)
.. |docker_reseq| image:: https://quay.io/repository/biocontainers/reseq/status
   :target: https://quay.io/repository/biocontainers/reseq
.. _`reseq/tags`: https://quay.io/repository/biocontainers/reseq?tab=tags


.. raw:: html

    <script>
        var package = "reseq";
        var versions = ["1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reseq/README.html