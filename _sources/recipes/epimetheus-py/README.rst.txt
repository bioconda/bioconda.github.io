:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'epimetheus-py'
.. highlight: bash

epimetheus-py
=============

.. conda:recipe:: epimetheus-py
   :replaces_section_title:
   :noindex:

   CLI tool for fast lookup in pileup for motif methylation.

   :homepage: https://github.com/SebastianDall/epimetheus
   :license: MIT / MIT
   :recipe: /`epimetheus-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epimetheus-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epimetheus-py/meta.yaml>`_

   


.. conda:package:: epimetheus-py

   |downloads_epimetheus-py| |docker_epimetheus-py|

   :versions:
      
      

      ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.2-0``,  ``0.6.2-0``

      

   
   :depends __glibc: ``>=2.17,<3.0.a0``
   :depends libgcc: ``>=13``
   :depends polars: 
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

      mamba install epimetheus-py

   and update with::

      mamba update epimetheus-py

  To create a new environment, run::

      mamba create --name myenvname epimetheus-py

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/epimetheus-py:<tag>

   (see `epimetheus-py/tags`_ for valid values for ``<tag>``)


.. |downloads_epimetheus-py| image:: https://img.shields.io/conda/dn/bioconda/epimetheus-py.svg?style=flat
   :target: https://anaconda.org/bioconda/epimetheus-py
   :alt:   (downloads)
.. |docker_epimetheus-py| image:: https://quay.io/repository/biocontainers/epimetheus-py/status
   :target: https://quay.io/repository/biocontainers/epimetheus-py
.. _`epimetheus-py/tags`: https://quay.io/repository/biocontainers/epimetheus-py?tab=tags


.. raw:: html

    <script>
        var package = "epimetheus-py";
        var versions = ["0.7.6","0.7.5","0.7.4","0.7.2","0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epimetheus-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epimetheus-py/README.html