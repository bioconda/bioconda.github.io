:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panaln'
.. highlight: bash

panaln
======

.. conda:recipe:: panaln
   :replaces_section_title:
   :noindex:

   Indexing pangenome for read alignment.

   :homepage: https://github.com/Lilu-guo/Panaln
   :license: MIT
   :recipe: /`panaln <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panaln>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panaln/meta.yaml>`_

   


.. conda:package:: panaln

   |downloads_panaln| |docker_panaln|

   :versions:
      
      

      ``2.09-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install panaln

   and update with::

      mamba update panaln

  To create a new environment, run::

      mamba create --name myenvname panaln

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/panaln:<tag>

   (see `panaln/tags`_ for valid values for ``<tag>``)


.. |downloads_panaln| image:: https://img.shields.io/conda/dn/bioconda/panaln.svg?style=flat
   :target: https://anaconda.org/bioconda/panaln
   :alt:   (downloads)
.. |docker_panaln| image:: https://quay.io/repository/biocontainers/panaln/status
   :target: https://quay.io/repository/biocontainers/panaln
.. _`panaln/tags`: https://quay.io/repository/biocontainers/panaln?tab=tags


.. raw:: html

    <script>
        var package = "panaln";
        var versions = ["2.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panaln/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panaln/README.html