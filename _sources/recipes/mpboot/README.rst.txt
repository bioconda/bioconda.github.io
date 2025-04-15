:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mpboot'
.. highlight: bash

mpboot
======

.. conda:recipe:: mpboot
   :replaces_section_title:
   :noindex:

   Fast phylogenetic maximum parsimony tree inference and bootstrap approximation.

   :homepage: https://github.com/diepthihoang/mpboot
   :documentation: http://www.cibiv.at/software/mpboot
   
   :license: GPL2 / GPL-2.0-only
   :recipe: /`mpboot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpboot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpboot/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12862-018-1131-3`

   


.. conda:package:: mpboot

   |downloads_mpboot| |docker_mpboot|

   :versions:
      
      

      ``1.2-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install mpboot

   and update with::

      mamba update mpboot

  To create a new environment, run::

      mamba create --name myenvname mpboot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mpboot:<tag>

   (see `mpboot/tags`_ for valid values for ``<tag>``)


.. |downloads_mpboot| image:: https://img.shields.io/conda/dn/bioconda/mpboot.svg?style=flat
   :target: https://anaconda.org/bioconda/mpboot
   :alt:   (downloads)
.. |docker_mpboot| image:: https://quay.io/repository/biocontainers/mpboot/status
   :target: https://quay.io/repository/biocontainers/mpboot
.. _`mpboot/tags`: https://quay.io/repository/biocontainers/mpboot?tab=tags


.. raw:: html

    <script>
        var package = "mpboot";
        var versions = ["1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mpboot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mpboot/README.html