:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deacon'
.. highlight: bash

deacon
======

.. conda:recipe:: deacon
   :replaces_section_title:
   :noindex:

   Fast alignment\-free sequence filter

   :homepage: https://github.com/bede/deacon
   :license: MIT
   :recipe: /`deacon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deacon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deacon/meta.yaml>`_

   


.. conda:package:: deacon

   |downloads_deacon| |docker_deacon|

   :versions:
      
      

      ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
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

      mamba install deacon

   and update with::

      mamba update deacon

  To create a new environment, run::

      mamba create --name myenvname deacon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deacon:<tag>

   (see `deacon/tags`_ for valid values for ``<tag>``)


.. |downloads_deacon| image:: https://img.shields.io/conda/dn/bioconda/deacon.svg?style=flat
   :target: https://anaconda.org/bioconda/deacon
   :alt:   (downloads)
.. |docker_deacon| image:: https://quay.io/repository/biocontainers/deacon/status
   :target: https://quay.io/repository/biocontainers/deacon
.. _`deacon/tags`: https://quay.io/repository/biocontainers/deacon?tab=tags


.. raw:: html

    <script>
        var package = "deacon";
        var versions = ["0.8.0","0.7.0","0.6.0","0.5.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deacon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deacon/README.html