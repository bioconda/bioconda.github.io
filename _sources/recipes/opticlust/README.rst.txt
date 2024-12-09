:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'opticlust'
.. highlight: bash

opticlust
=========

.. conda:recipe:: opticlust
   :replaces_section_title:
   :noindex:

   Single cell clustering and recommendations at a glance.

   :homepage: https://github.com/siebrenf/opticlust
   :documentation: https://github.com/siebrenf/opticlust/blob/main/tutorial.py
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`opticlust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opticlust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opticlust/meta.yaml>`_

   


.. conda:package:: opticlust

   |downloads_opticlust| |docker_opticlust|

   :versions:
      
      

      ``0.3.0-0``

      

   
   :depends leidenalg: ``>=0.10.2``
   :depends matplotlib-base: ``>=3.6``
   :depends natsort: 
   :depends networkx: ``>=2.7``
   :depends numpy: ``>=1.23``
   :depends python: ``>=3.9``
   :depends python-igraph: ``>=0.10``
   :depends scanpy: ``>=1.10``
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

      mamba install opticlust

   and update with::

      mamba update opticlust

  To create a new environment, run::

      mamba create --name myenvname opticlust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/opticlust:<tag>

   (see `opticlust/tags`_ for valid values for ``<tag>``)


.. |downloads_opticlust| image:: https://img.shields.io/conda/dn/bioconda/opticlust.svg?style=flat
   :target: https://anaconda.org/bioconda/opticlust
   :alt:   (downloads)
.. |docker_opticlust| image:: https://quay.io/repository/biocontainers/opticlust/status
   :target: https://quay.io/repository/biocontainers/opticlust
.. _`opticlust/tags`: https://quay.io/repository/biocontainers/opticlust?tab=tags


.. raw:: html

    <script>
        var package = "opticlust";
        var versions = ["0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/opticlust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/opticlust/README.html