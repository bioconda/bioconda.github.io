:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastphylo'
.. highlight: bash

fastphylo
=========

.. conda:recipe:: fastphylo
   :replaces_section_title:
   :noindex:

   Fastphylo is software project containing the implementations of the algorithms \"Fast Computation of Distance Estimators\" and \"Fast Neighbor Joining\".

   :homepage: https://github.com/arvestad/FastPhylo
   :license: MIT
   :recipe: /`fastphylo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastphylo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastphylo/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-14-334`

   


.. conda:package:: fastphylo

   |downloads_fastphylo| |docker_fastphylo|

   :versions:
      
      

      ``1.0.3-8``,  ``1.0.3-7``,  ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libxml2: ``>=2.11.4,<2.12.0a0``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends openmpi: ``<4.0.2``
   :depends openmpi: ``>=4.0.1,<4.1.0a0``
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

      mamba install fastphylo

   and update with::

      mamba update fastphylo

  To create a new environment, run::

      mamba create --name myenvname fastphylo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastphylo:<tag>

   (see `fastphylo/tags`_ for valid values for ``<tag>``)


.. |downloads_fastphylo| image:: https://img.shields.io/conda/dn/bioconda/fastphylo.svg?style=flat
   :target: https://anaconda.org/bioconda/fastphylo
   :alt:   (downloads)
.. |docker_fastphylo| image:: https://quay.io/repository/biocontainers/fastphylo/status
   :target: https://quay.io/repository/biocontainers/fastphylo
.. _`fastphylo/tags`: https://quay.io/repository/biocontainers/fastphylo?tab=tags


.. raw:: html

    <script>
        var package = "fastphylo";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastphylo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastphylo/README.html