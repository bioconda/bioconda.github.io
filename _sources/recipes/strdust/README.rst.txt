:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strdust'
.. highlight: bash

strdust
=======

.. conda:recipe:: strdust
   :replaces_section_title:
   :noindex:

   Tandem repeat genotyper for long reads.

   :homepage: https://github.com/wdecoster/STRdust
   :documentation: https://github.com/wdecoster/STRdust/blob/v0.14.0/README.md
   
   :license: MIT / MIT
   :recipe: /`strdust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strdust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strdust/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.279265.124`

   


.. conda:package:: strdust

   |downloads_strdust| |docker_strdust|

   :versions:
      
      

      ``0.14.0-0``,  ``0.13.0-0``,  ``0.11.4-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.8.2-0``,  ``0.8.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install strdust

   and update with::

      mamba update strdust

  To create a new environment, run::

      mamba create --name myenvname strdust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/strdust:<tag>

   (see `strdust/tags`_ for valid values for ``<tag>``)


.. |downloads_strdust| image:: https://img.shields.io/conda/dn/bioconda/strdust.svg?style=flat
   :target: https://anaconda.org/bioconda/strdust
   :alt:   (downloads)
.. |docker_strdust| image:: https://quay.io/repository/biocontainers/strdust/status
   :target: https://quay.io/repository/biocontainers/strdust
.. _`strdust/tags`: https://quay.io/repository/biocontainers/strdust?tab=tags


.. raw:: html

    <script>
        var package = "strdust";
        var versions = ["0.14.0","0.13.0","0.11.4","0.11.1","0.11.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strdust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strdust/README.html