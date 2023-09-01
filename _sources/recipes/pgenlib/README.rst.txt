:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgenlib'
.. highlight: bash

pgenlib
=======

.. conda:recipe:: pgenlib
   :replaces_section_title:
   :noindex:

   Python wrapper for pgenlib\'s basic reader and writer.

   :homepage: https://github.com/chrchang/plink-ng
   :documentation: https://github.com/chrchang/plink-ng/blob/master/2.0/Python/README.md
   
   :developer docs: https://github.com/chrchang/plink-ng/tree/master/2.0/Python
   :license: LGPL / GNU Lesser General Public v3 (LGPLv3)
   :recipe: /`pgenlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgenlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgenlib/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13742-015-0047-8`

   


.. conda:package:: pgenlib

   |downloads_pgenlib| |docker_pgenlib|

   :versions:
      
      

      ``0.90.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends zlib: 
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

      mamba install pgenlib

   and update with::

      mamba update pgenlib

  To create a new environment, run::

      mamba create --name myenvname pgenlib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pgenlib:<tag>

   (see `pgenlib/tags`_ for valid values for ``<tag>``)


.. |downloads_pgenlib| image:: https://img.shields.io/conda/dn/bioconda/pgenlib.svg?style=flat
   :target: https://anaconda.org/bioconda/pgenlib
   :alt:   (downloads)
.. |docker_pgenlib| image:: https://quay.io/repository/biocontainers/pgenlib/status
   :target: https://quay.io/repository/biocontainers/pgenlib
.. _`pgenlib/tags`: https://quay.io/repository/biocontainers/pgenlib?tab=tags


.. raw:: html

    <script>
        var package = "pgenlib";
        var versions = ["0.90.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgenlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgenlib/README.html