:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kyber'
.. highlight: bash

kyber
=====

.. conda:recipe:: kyber
   :replaces_section_title:
   :noindex:

   Tool to create a length\-accuracy heatmap from a cram or bam file

   :homepage: https://github.com/wdecoster/kyber
   :license: MIT
   :recipe: /`kyber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kyber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kyber/meta.yaml>`_

   


.. conda:package:: kyber

   |downloads_kyber| |docker_kyber|

   :versions:
      
      

      ``0.6.0d-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install kyber

   and update with::

      mamba update kyber

  To create a new environment, run::

      mamba create --name myenvname kyber

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kyber:<tag>

   (see `kyber/tags`_ for valid values for ``<tag>``)


.. |downloads_kyber| image:: https://img.shields.io/conda/dn/bioconda/kyber.svg?style=flat
   :target: https://anaconda.org/bioconda/kyber
   :alt:   (downloads)
.. |docker_kyber| image:: https://quay.io/repository/biocontainers/kyber/status
   :target: https://quay.io/repository/biocontainers/kyber
.. _`kyber/tags`: https://quay.io/repository/biocontainers/kyber?tab=tags


.. raw:: html

    <script>
        var package = "kyber";
        var versions = ["0.6.0d"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kyber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kyber/README.html