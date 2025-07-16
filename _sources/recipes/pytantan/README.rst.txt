:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytantan'
.. highlight: bash

pytantan
========

.. conda:recipe:: pytantan
   :replaces_section_title:
   :noindex:

   Cython bindings and Python interface to Tantan\, a fast method for identifying repeats in DNA and protein sequences.

   :homepage: https://github.com/althonos/pytantan
   :documentation: https://pytantan.readthedocs.io/en/latest
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pytantan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytantan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytantan/meta.yaml>`_

   


.. conda:package:: pytantan

   |downloads_pytantan| |docker_pytantan|

   :versions:
      
      

      ``0.1.3-1``,  ``0.1.3-0``

      

   
   :depends archspec: ``>=0.2``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scoring-matrices: ``>=0.3.2``
   :depends scoring-matrices: ``>=0.3.2,<0.4.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pytantan

   and update with::

      mamba update pytantan

  To create a new environment, run::

      mamba create --name myenvname pytantan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pytantan:<tag>

   (see `pytantan/tags`_ for valid values for ``<tag>``)


.. |downloads_pytantan| image:: https://img.shields.io/conda/dn/bioconda/pytantan.svg?style=flat
   :target: https://anaconda.org/bioconda/pytantan
   :alt:   (downloads)
.. |docker_pytantan| image:: https://quay.io/repository/biocontainers/pytantan/status
   :target: https://quay.io/repository/biocontainers/pytantan
.. _`pytantan/tags`: https://quay.io/repository/biocontainers/pytantan?tab=tags


.. raw:: html

    <script>
        var package = "pytantan";
        var versions = ["0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytantan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytantan/README.html