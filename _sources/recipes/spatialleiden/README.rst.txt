:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spatialleiden'
.. highlight: bash

spatialleiden
=============

.. conda:recipe:: spatialleiden
   :replaces_section_title:
   :noindex:

   Implementation of multiplex Leiden for analysis of spatial omics data.

   :homepage: https://github.com/HiDiHlabs/SpatialLeiden
   :documentation: https://spatialleiden.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`spatialleiden <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spatialleiden>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spatialleiden/meta.yaml>`_

   


.. conda:package:: spatialleiden

   |downloads_spatialleiden| |docker_spatialleiden|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.1-0``

      

   
   :depends anndata: 
   :depends igraph: 
   :depends leidenalg: ``>=0.10.2,<0.11.dev0``
   :depends numpy: ``>=1.21``
   :depends python: ``>=3.10``
   :depends scanpy: 
   :depends scipy: ``>=1.9``
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

      mamba install spatialleiden

   and update with::

      mamba update spatialleiden

  To create a new environment, run::

      mamba create --name myenvname spatialleiden

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spatialleiden:<tag>

   (see `spatialleiden/tags`_ for valid values for ``<tag>``)


.. |downloads_spatialleiden| image:: https://img.shields.io/conda/dn/bioconda/spatialleiden.svg?style=flat
   :target: https://anaconda.org/bioconda/spatialleiden
   :alt:   (downloads)
.. |docker_spatialleiden| image:: https://quay.io/repository/biocontainers/spatialleiden/status
   :target: https://quay.io/repository/biocontainers/spatialleiden
.. _`spatialleiden/tags`: https://quay.io/repository/biocontainers/spatialleiden?tab=tags


.. raw:: html

    <script>
        var package = "spatialleiden";
        var versions = ["0.3.0","0.2.0","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spatialleiden/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spatialleiden/README.html