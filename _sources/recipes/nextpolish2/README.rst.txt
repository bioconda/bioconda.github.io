:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextpolish2'
.. highlight: bash

nextpolish2
===========

.. conda:recipe:: nextpolish2
   :replaces_section_title:
   :noindex:

   Repeat\-aware polishing genomes assembled using HiFi long reads.

   :homepage: https://github.com/Nextomics/NextPolish2
   :documentation: https://github.com/Nextomics/NextPolish2/blob/0.2.1/README.md
   
   :license: GBPL
   :recipe: /`nextpolish2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextpolish2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextpolish2/meta.yaml>`_
   :links: doi: :doi:`10.1093/gpbjnl/qzad009`

   


.. conda:package:: nextpolish2

   |downloads_nextpolish2| |docker_nextpolish2|

   :versions:
      
      

      ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends yak: ``>=0.1``
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

      mamba install nextpolish2

   and update with::

      mamba update nextpolish2

  To create a new environment, run::

      mamba create --name myenvname nextpolish2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nextpolish2:<tag>

   (see `nextpolish2/tags`_ for valid values for ``<tag>``)


.. |downloads_nextpolish2| image:: https://img.shields.io/conda/dn/bioconda/nextpolish2.svg?style=flat
   :target: https://anaconda.org/bioconda/nextpolish2
   :alt:   (downloads)
.. |docker_nextpolish2| image:: https://quay.io/repository/biocontainers/nextpolish2/status
   :target: https://quay.io/repository/biocontainers/nextpolish2
.. _`nextpolish2/tags`: https://quay.io/repository/biocontainers/nextpolish2?tab=tags


.. raw:: html

    <script>
        var package = "nextpolish2";
        var versions = ["0.2.1","0.2.1","0.2.1","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextpolish2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextpolish2/README.html