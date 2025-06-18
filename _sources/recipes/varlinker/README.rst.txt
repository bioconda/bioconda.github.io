:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varlinker'
.. highlight: bash

varlinker
=========

.. conda:recipe:: varlinker
   :replaces_section_title:
   :noindex:

   Parallel threaded variant linker.


   :homepage: https://github.com/IBCHgenomic/varlinker
   :license: MIT / MIT
   :recipe: /`varlinker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varlinker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varlinker/meta.yaml>`_

   


.. conda:package:: varlinker

   |downloads_varlinker| |docker_varlinker|

   :versions:
      
      

      ``0.1.0-0``

      

   
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

      mamba install varlinker

   and update with::

      mamba update varlinker

  To create a new environment, run::

      mamba create --name myenvname varlinker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/varlinker:<tag>

   (see `varlinker/tags`_ for valid values for ``<tag>``)


.. |downloads_varlinker| image:: https://img.shields.io/conda/dn/bioconda/varlinker.svg?style=flat
   :target: https://anaconda.org/bioconda/varlinker
   :alt:   (downloads)
.. |docker_varlinker| image:: https://quay.io/repository/biocontainers/varlinker/status
   :target: https://quay.io/repository/biocontainers/varlinker
.. _`varlinker/tags`: https://quay.io/repository/biocontainers/varlinker?tab=tags


.. raw:: html

    <script>
        var package = "varlinker";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varlinker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varlinker/README.html