:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panman'
.. highlight: bash

panman
======

.. conda:recipe:: panman
   :replaces_section_title:
   :noindex:

   PanMAN

   :homepage: https://github.com/TurakhiaLab/panman
   :documentation: https://turakhia.ucsd.edu/panman/
   
   :license: MIT / MIT
   :recipe: /`panman <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panman>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panman/meta.yaml>`_

   


.. conda:package:: panman

   |downloads_panman| |docker_panman|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends boost-cpp: 
   :depends capnproto: ``1.1.0.*``
   :depends capnproto: ``>=1.1.0,<1.1.1.0a0``
   :depends jsoncpp: ``>=1.9.6,<1.9.7.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends protobuf: ``3.20.3.*``
   :depends tbb: ``2019.9.*``
   :depends tbb: ``>=2019.9``
   :depends tbb-devel: ``2019.9.*``
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

      mamba install panman

   and update with::

      mamba update panman

  To create a new environment, run::

      mamba create --name myenvname panman

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/panman:<tag>

   (see `panman/tags`_ for valid values for ``<tag>``)


.. |downloads_panman| image:: https://img.shields.io/conda/dn/bioconda/panman.svg?style=flat
   :target: https://anaconda.org/bioconda/panman
   :alt:   (downloads)
.. |docker_panman| image:: https://quay.io/repository/biocontainers/panman/status
   :target: https://quay.io/repository/biocontainers/panman
.. _`panman/tags`: https://quay.io/repository/biocontainers/panman?tab=tags


.. raw:: html

    <script>
        var package = "panman";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panman/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panman/README.html