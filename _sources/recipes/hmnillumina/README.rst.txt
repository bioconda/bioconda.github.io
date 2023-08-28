:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmnillumina'
.. highlight: bash

hmnillumina
===========

.. conda:recipe:: hmnillumina
   :replaces_section_title:
   :noindex:

   A parser for Illumina run

   :homepage: https://github.com/guillaume-gricourt/HmnIllumina
   :license: MIT
   :recipe: /`hmnillumina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnillumina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnillumina/meta.yaml>`_

   HmnIllumina\: parsing Illumina InterOp folder to keep useful information


.. conda:package:: hmnillumina

   |downloads_hmnillumina| |docker_hmnillumina|

   :versions:
      
      

      ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.3-0``

      

   
   :depends illumina-interop: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends pytest: 
   :depends python: 
   :depends rapidjson: 
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

      mamba install hmnillumina

   and update with::

      mamba update hmnillumina

  To create a new environment, run::

      mamba create --name myenvname hmnillumina

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmnillumina:<tag>

   (see `hmnillumina/tags`_ for valid values for ``<tag>``)


.. |downloads_hmnillumina| image:: https://img.shields.io/conda/dn/bioconda/hmnillumina.svg?style=flat
   :target: https://anaconda.org/bioconda/hmnillumina
   :alt:   (downloads)
.. |docker_hmnillumina| image:: https://quay.io/repository/biocontainers/hmnillumina/status
   :target: https://quay.io/repository/biocontainers/hmnillumina
.. _`hmnillumina/tags`: https://quay.io/repository/biocontainers/hmnillumina?tab=tags


.. raw:: html

    <script>
        var package = "hmnillumina";
        var versions = ["1.5.0","1.5.0","1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmnillumina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmnillumina/README.html