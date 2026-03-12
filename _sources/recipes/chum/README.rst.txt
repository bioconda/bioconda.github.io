:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chum'
.. highlight: bash

chum
====

.. conda:recipe:: chum
   :replaces_section_title:
   :noindex:

   Evaluate the effectiveness of baits in a hybrid selection panel.

   :homepage: https://github.com/clintval/chum
   :documentation: https://github.com/clintval/chum/blob/0.2.0/README.md
   
   :license: MIT / MIT
   :recipe: /`chum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chum/meta.yaml>`_

   


.. conda:package:: chum

   |downloads_chum| |docker_chum|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends blast: ``>=2.0``
   :depends libgcc: ``>=14``
   :depends libstdcxx: ``>=14``
   :depends viennarna: ``>=2.0``
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

      mamba install chum

   and update with::

      mamba update chum

  To create a new environment, run::

      mamba create --name myenvname chum

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chum:<tag>

   (see `chum/tags`_ for valid values for ``<tag>``)


.. |downloads_chum| image:: https://img.shields.io/conda/dn/bioconda/chum.svg?style=flat
   :target: https://anaconda.org/bioconda/chum
   :alt:   (downloads)
.. |docker_chum| image:: https://quay.io/repository/biocontainers/chum/status
   :target: https://quay.io/repository/biocontainers/chum
.. _`chum/tags`: https://quay.io/repository/biocontainers/chum?tab=tags


.. raw:: html

    <script>
        var package = "chum";
        var versions = ["0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chum/README.html