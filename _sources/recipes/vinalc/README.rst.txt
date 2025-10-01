:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vinalc'
.. highlight: bash

vinalc
======

.. conda:recipe:: vinalc
   :replaces_section_title:
   :noindex:

   VinaLC\: MPI\-accelerated molecular docking program for virtual screening.

   :homepage: https://github.com/XiaohuaZhangLLNL/VinaLC
   :license: APACHE / Apache-2.0
   :recipe: /`vinalc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vinalc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vinalc/meta.yaml>`_

   


.. conda:package:: vinalc

   |downloads_vinalc| |docker_vinalc|

   :versions:
      
      

      ``1.4.2-0``

      

   
   :depends boost-cpp: 
   :depends libboost: 
   :depends libboost-mpi: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends mpich: ``>=4.3.1,<5.0a0``
   :depends mpich-mpicxx: 
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

      mamba install vinalc

   and update with::

      mamba update vinalc

  To create a new environment, run::

      mamba create --name myenvname vinalc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vinalc:<tag>

   (see `vinalc/tags`_ for valid values for ``<tag>``)


.. |downloads_vinalc| image:: https://img.shields.io/conda/dn/bioconda/vinalc.svg?style=flat
   :target: https://anaconda.org/bioconda/vinalc
   :alt:   (downloads)
.. |docker_vinalc| image:: https://quay.io/repository/biocontainers/vinalc/status
   :target: https://quay.io/repository/biocontainers/vinalc
.. _`vinalc/tags`: https://quay.io/repository/biocontainers/vinalc?tab=tags


.. raw:: html

    <script>
        var package = "vinalc";
        var versions = ["1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vinalc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vinalc/README.html