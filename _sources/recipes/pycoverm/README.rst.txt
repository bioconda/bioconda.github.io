:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pycoverm'
.. highlight: bash

pycoverm
========

.. conda:recipe:: pycoverm
   :replaces_section_title:
   :noindex:

   Python bindings for CoverM

   :homepage: https://github.com/apcamargo/pycoverm
   :license: GPL-3.0
   :recipe: /`pycoverm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycoverm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycoverm/meta.yaml>`_

   


.. conda:package:: pycoverm

   |downloads_pycoverm| |docker_pycoverm|

   :versions:
      
      

      ``0.6.2-0``

      

   
   :depends __osx: ``>=10.13``
   :depends libcxx: ``>=18``
   :depends numpy: ``>=1.16,<3``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pycoverm

   and update with::

      mamba update pycoverm

  To create a new environment, run::

      mamba create --name myenvname pycoverm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pycoverm:<tag>

   (see `pycoverm/tags`_ for valid values for ``<tag>``)


.. |downloads_pycoverm| image:: https://img.shields.io/conda/dn/bioconda/pycoverm.svg?style=flat
   :target: https://anaconda.org/bioconda/pycoverm
   :alt:   (downloads)
.. |docker_pycoverm| image:: https://quay.io/repository/biocontainers/pycoverm/status
   :target: https://quay.io/repository/biocontainers/pycoverm
.. _`pycoverm/tags`: https://quay.io/repository/biocontainers/pycoverm?tab=tags


.. raw:: html

    <script>
        var package = "pycoverm";
        var versions = ["0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pycoverm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pycoverm/README.html