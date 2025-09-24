:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'carp'
.. highlight: bash

carp
====

.. conda:recipe:: carp
   :replaces_section_title:
   :noindex:

   carp \- quantify the rearrangement complexity of pangenomes and their graphs.

   :homepage: https://github.com/gi-bielefeld/scj-carp
   :license: MIT / MIT
   :recipe: /`carp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/carp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/carp/meta.yaml>`_

   Carp is a software based on the rearrangement problem of the same name. Version 0.1.0 supports only the SCJ \(Single\-Cut or Join\) model.



.. conda:package:: carp

   |downloads_carp| |docker_carp|

   :versions:
      
      

      ``0.1.0-0``

      

   
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

      mamba install carp

   and update with::

      mamba update carp

  To create a new environment, run::

      mamba create --name myenvname carp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/carp:<tag>

   (see `carp/tags`_ for valid values for ``<tag>``)


.. |downloads_carp| image:: https://img.shields.io/conda/dn/bioconda/carp.svg?style=flat
   :target: https://anaconda.org/bioconda/carp
   :alt:   (downloads)
.. |docker_carp| image:: https://quay.io/repository/biocontainers/carp/status
   :target: https://quay.io/repository/biocontainers/carp
.. _`carp/tags`: https://quay.io/repository/biocontainers/carp?tab=tags


.. raw:: html

    <script>
        var package = "carp";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/carp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/carp/README.html