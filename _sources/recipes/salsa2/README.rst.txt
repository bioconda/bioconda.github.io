:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'salsa2'
.. highlight: bash

salsa2
======

.. conda:recipe:: salsa2
   :replaces_section_title:
   :noindex:

   Salsa is a tool to scaffold long read assemblies with Hi\-C.

   :homepage: https://github.com/marbl/SALSA
   :license: MIT
   :recipe: /`salsa2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salsa2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salsa2/meta.yaml>`_

   


.. conda:package:: salsa2

   |downloads_salsa2| |docker_salsa2|

   :versions:
      
      

      ``2.3-1``,  ``2.3-0``,  ``2.2-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends networkx: ``1.11.*``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install salsa2

   and update with::

      mamba update salsa2

  To create a new environment, run::

      mamba create --name myenvname salsa2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/salsa2:<tag>

   (see `salsa2/tags`_ for valid values for ``<tag>``)


.. |downloads_salsa2| image:: https://img.shields.io/conda/dn/bioconda/salsa2.svg?style=flat
   :target: https://anaconda.org/bioconda/salsa2
   :alt:   (downloads)
.. |docker_salsa2| image:: https://quay.io/repository/biocontainers/salsa2/status
   :target: https://quay.io/repository/biocontainers/salsa2
.. _`salsa2/tags`: https://quay.io/repository/biocontainers/salsa2?tab=tags


.. raw:: html

    <script>
        var package = "salsa2";
        var versions = ["2.3","2.3","2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/salsa2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/salsa2/README.html