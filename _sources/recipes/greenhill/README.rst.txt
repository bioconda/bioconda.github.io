:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'greenhill'
.. highlight: bash

greenhill
=========

.. conda:recipe:: greenhill
   :replaces_section_title:
   :noindex:

   A de novo chromosomal\-level scaffolding and phasing tool using Hi\-C

   :homepage: https://github.com/ShunOuchi/GreenHill
   :license: GPL / GPL-3.0
   :recipe: /`greenhill <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/greenhill>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/greenhill/meta.yaml>`_

   


.. conda:package:: greenhill

   |downloads_greenhill| |docker_greenhill|

   :versions:
      
      

      ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gzip: 
   :depends libgcc: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx: 
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends minimap2: 
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

      mamba install greenhill

   and update with::

      mamba update greenhill

  To create a new environment, run::

      mamba create --name myenvname greenhill

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/greenhill:<tag>

   (see `greenhill/tags`_ for valid values for ``<tag>``)


.. |downloads_greenhill| image:: https://img.shields.io/conda/dn/bioconda/greenhill.svg?style=flat
   :target: https://anaconda.org/bioconda/greenhill
   :alt:   (downloads)
.. |docker_greenhill| image:: https://quay.io/repository/biocontainers/greenhill/status
   :target: https://quay.io/repository/biocontainers/greenhill
.. _`greenhill/tags`: https://quay.io/repository/biocontainers/greenhill?tab=tags


.. raw:: html

    <script>
        var package = "greenhill";
        var versions = ["1.1.0","1.1.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/greenhill/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/greenhill/README.html