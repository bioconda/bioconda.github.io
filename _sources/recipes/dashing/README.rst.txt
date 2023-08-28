:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dashing'
.. highlight: bash

dashing
=======

.. conda:recipe:: dashing
   :replaces_section_title:
   :noindex:

   Fast and accurate genomic distances using HyperLogLog

   :homepage: https://github.com/dnbaker/dashing
   :license: GPL-3
   :recipe: /`dashing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dashing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dashing/meta.yaml>`_
   :links: doi: :doi:`10.1101/501726`

   


.. conda:package:: dashing

   |downloads_dashing| |docker_dashing|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``,  ``0.4.0-3``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
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

      mamba install dashing

   and update with::

      mamba update dashing

  To create a new environment, run::

      mamba create --name myenvname dashing

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dashing:<tag>

   (see `dashing/tags`_ for valid values for ``<tag>``)


.. |downloads_dashing| image:: https://img.shields.io/conda/dn/bioconda/dashing.svg?style=flat
   :target: https://anaconda.org/bioconda/dashing
   :alt:   (downloads)
.. |docker_dashing| image:: https://quay.io/repository/biocontainers/dashing/status
   :target: https://quay.io/repository/biocontainers/dashing
.. _`dashing/tags`: https://quay.io/repository/biocontainers/dashing?tab=tags


.. raw:: html

    <script>
        var package = "dashing";
        var versions = ["1.0","1.0","1.0","0.4.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dashing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dashing/README.html