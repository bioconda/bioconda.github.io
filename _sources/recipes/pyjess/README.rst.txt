:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyjess'
.. highlight: bash

pyjess
======

.. conda:recipe:: pyjess
   :replaces_section_title:
   :noindex:

   Cython bindings and Python interface to JESS\, a 3D template matching software.

   :homepage: https://github.com/althonos/pyjess
   :documentation: https://pyjess.readthedocs.org
   
   :license: MIT / MIT
   :recipe: /`pyjess <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyjess>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyjess/meta.yaml>`_

   


.. conda:package:: pyjess

   |downloads_pyjess| |docker_pyjess|

   :versions:
      
      

      ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.3-0``

      

   
   :depends libgcc: ``>=13``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install pyjess

   and update with::

      mamba update pyjess

  To create a new environment, run::

      mamba create --name myenvname pyjess

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyjess:<tag>

   (see `pyjess/tags`_ for valid values for ``<tag>``)


.. |downloads_pyjess| image:: https://img.shields.io/conda/dn/bioconda/pyjess.svg?style=flat
   :target: https://anaconda.org/bioconda/pyjess
   :alt:   (downloads)
.. |docker_pyjess| image:: https://quay.io/repository/biocontainers/pyjess/status
   :target: https://quay.io/repository/biocontainers/pyjess
.. _`pyjess/tags`: https://quay.io/repository/biocontainers/pyjess?tab=tags


.. raw:: html

    <script>
        var package = "pyjess";
        var versions = ["0.5.1","0.5.0","0.4.1","0.4.1","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyjess/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyjess/README.html