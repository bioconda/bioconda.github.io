:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'covar'
.. highlight: bash

covar
=====

.. conda:recipe:: covar
   :replaces_section_title:
   :noindex:

   Linked\-read variant calling tool for wastewater sequencing data.

   :homepage: https://github.com/andersen-lab/covar
   :license: MIT / MIT OR Apache-2.0
   :recipe: /`covar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covar/meta.yaml>`_

   


.. conda:package:: covar

   |downloads_covar| |docker_covar|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends openssl: ``>=3.6.0,<4.0a0``
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

      mamba install covar

   and update with::

      mamba update covar

  To create a new environment, run::

      mamba create --name myenvname covar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/covar:<tag>

   (see `covar/tags`_ for valid values for ``<tag>``)


.. |downloads_covar| image:: https://img.shields.io/conda/dn/bioconda/covar.svg?style=flat
   :target: https://anaconda.org/bioconda/covar
   :alt:   (downloads)
.. |docker_covar| image:: https://quay.io/repository/biocontainers/covar/status
   :target: https://quay.io/repository/biocontainers/covar
.. _`covar/tags`: https://quay.io/repository/biocontainers/covar?tab=tags


.. raw:: html

    <script>
        var package = "covar";
        var versions = ["0.3.0","0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/covar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/covar/README.html