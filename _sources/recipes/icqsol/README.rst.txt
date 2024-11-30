:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'icqsol'
.. highlight: bash

icqsol
======

.. conda:recipe:: icqsol
   :replaces_section_title:
   :noindex:

   A collection of utilities for constructing complex geometries from primitive shapes

   :homepage: https://github.com/pletzer/icqsol
   :license: MIT
   :recipe: /`icqsol <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icqsol>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icqsol/meta.yaml>`_

   


.. conda:package:: icqsol

   |downloads_icqsol| |docker_icqsol|

   :versions:
      
      

      ``0.3.26-1``,  ``0.3.26-0``,  ``0.3.20-0``

      

   
   :depends numpy: 
   :depends pycsg: ``0.3.12``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends pytriangle: ``1.0.9``
   :depends vtk: ``6.3.0``
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

      mamba install icqsol

   and update with::

      mamba update icqsol

  To create a new environment, run::

      mamba create --name myenvname icqsol

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/icqsol:<tag>

   (see `icqsol/tags`_ for valid values for ``<tag>``)


.. |downloads_icqsol| image:: https://img.shields.io/conda/dn/bioconda/icqsol.svg?style=flat
   :target: https://anaconda.org/bioconda/icqsol
   :alt:   (downloads)
.. |docker_icqsol| image:: https://quay.io/repository/biocontainers/icqsol/status
   :target: https://quay.io/repository/biocontainers/icqsol
.. _`icqsol/tags`: https://quay.io/repository/biocontainers/icqsol?tab=tags


.. raw:: html

    <script>
        var package = "icqsol";
        var versions = ["0.3.26","0.3.26","0.3.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/icqsol/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/icqsol/README.html