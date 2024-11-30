:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ryuto'
.. highlight: bash

ryuto
=====

.. conda:recipe:: ryuto
   :replaces_section_title:
   :noindex:

   Network\-Flow based Transcriptome Reconstruction

   :homepage: https://github.com/studla/RYUTO/
   :license: BSD
   :recipe: /`ryuto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ryuto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ryuto/meta.yaml>`_

   


.. conda:package:: ryuto

   |downloads_ryuto| |docker_ryuto|

   :versions:
      
      

      ``1.6.3-2``,  ``1.6.3-1``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends htslib: ``>=1.17,<1.22.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install ryuto

   and update with::

      mamba update ryuto

  To create a new environment, run::

      mamba create --name myenvname ryuto

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ryuto:<tag>

   (see `ryuto/tags`_ for valid values for ``<tag>``)


.. |downloads_ryuto| image:: https://img.shields.io/conda/dn/bioconda/ryuto.svg?style=flat
   :target: https://anaconda.org/bioconda/ryuto
   :alt:   (downloads)
.. |docker_ryuto| image:: https://quay.io/repository/biocontainers/ryuto/status
   :target: https://quay.io/repository/biocontainers/ryuto
.. _`ryuto/tags`: https://quay.io/repository/biocontainers/ryuto?tab=tags


.. raw:: html

    <script>
        var package = "ryuto";
        var versions = ["1.6.3","1.6.3","1.6.3","1.6.2","1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ryuto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ryuto/README.html