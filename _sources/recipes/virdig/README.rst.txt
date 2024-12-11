:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virdig'
.. highlight: bash

virdig
======

.. conda:recipe:: virdig
   :replaces_section_title:
   :noindex:

   A de novo transcriptome assembler for coronavirus.

   :homepage: https://github.com/Limh616/VirDiG
   :license: MIT / MIT
   :recipe: /`virdig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virdig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virdig/meta.yaml>`_

   


.. conda:package:: virdig

   |downloads_virdig| |docker_virdig|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends boost-cpp: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install virdig

   and update with::

      mamba update virdig

  To create a new environment, run::

      mamba create --name myenvname virdig

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/virdig:<tag>

   (see `virdig/tags`_ for valid values for ``<tag>``)


.. |downloads_virdig| image:: https://img.shields.io/conda/dn/bioconda/virdig.svg?style=flat
   :target: https://anaconda.org/bioconda/virdig
   :alt:   (downloads)
.. |docker_virdig| image:: https://quay.io/repository/biocontainers/virdig/status
   :target: https://quay.io/repository/biocontainers/virdig
.. _`virdig/tags`: https://quay.io/repository/biocontainers/virdig?tab=tags


.. raw:: html

    <script>
        var package = "virdig";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virdig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virdig/README.html