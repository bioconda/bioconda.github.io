:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atlas'
.. highlight: bash

atlas
=====

.. conda:recipe:: atlas
   :replaces_section_title:
   :noindex:

   ATLAS\, a suite of methods to accurately genotype and estimate genetic diversity

   :homepage: https://bitbucket.org/wegmannlab/atlas/wiki/Home
   :license: GPLv3
   :recipe: /`atlas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas/meta.yaml>`_

   


.. conda:package:: atlas

   |downloads_atlas| |docker_atlas|

   :versions:
      
      

      ``0.9.9-3``,  ``0.9.9-2``,  ``0.9.9-1``,  ``0.9.9-0``

      

   
   :depends armadillo: ``>=12.2,<13.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
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

      mamba install atlas

   and update with::

      mamba update atlas

  To create a new environment, run::

      mamba create --name myenvname atlas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/atlas:<tag>

   (see `atlas/tags`_ for valid values for ``<tag>``)


.. |downloads_atlas| image:: https://img.shields.io/conda/dn/bioconda/atlas.svg?style=flat
   :target: https://anaconda.org/bioconda/atlas
   :alt:   (downloads)
.. |docker_atlas| image:: https://quay.io/repository/biocontainers/atlas/status
   :target: https://quay.io/repository/biocontainers/atlas
.. _`atlas/tags`: https://quay.io/repository/biocontainers/atlas?tab=tags


.. raw:: html

    <script>
        var package = "atlas";
        var versions = ["0.9.9","0.9.9","0.9.9","0.9.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atlas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atlas/README.html