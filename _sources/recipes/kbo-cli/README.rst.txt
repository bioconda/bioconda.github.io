:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kbo-cli'
.. highlight: bash

kbo-cli
=======

.. conda:recipe:: kbo-cli
   :replaces_section_title:
   :noindex:

   Command\-line interface for the kbo local aligner

   :homepage: https://docs.rs/kbo
   :developer docs: https://github.com/tmaklin/kbo-cli
   :license: Dual-licensed under the MIT and Apache 2.0 licenses.
   :recipe: /`kbo-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kbo-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kbo-cli/meta.yaml>`_

   kbo is an aligner that can do variant calling\, reference\-based alignment and
   find sequences of interest in a query\, without a separate indexing step or
   any temporary disk space usage. kbo\-cli provides a command\-line interface to
   the call\, map\, find\, and build functions from kbo.



.. conda:package:: kbo-cli

   |downloads_kbo-cli| |docker_kbo-cli|

   :versions:
      
      

      ``0.2.1-0``,  ``0.1.1-0``

      

   
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install kbo-cli

   and update with::

      mamba update kbo-cli

  To create a new environment, run::

      mamba create --name myenvname kbo-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kbo-cli:<tag>

   (see `kbo-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_kbo-cli| image:: https://img.shields.io/conda/dn/bioconda/kbo-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/kbo-cli
   :alt:   (downloads)
.. |docker_kbo-cli| image:: https://quay.io/repository/biocontainers/kbo-cli/status
   :target: https://quay.io/repository/biocontainers/kbo-cli
.. _`kbo-cli/tags`: https://quay.io/repository/biocontainers/kbo-cli?tab=tags


.. raw:: html

    <script>
        var package = "kbo-cli";
        var versions = ["0.2.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kbo-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kbo-cli/README.html