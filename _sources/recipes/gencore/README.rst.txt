:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gencore'
.. highlight: bash

gencore
=======

.. conda:recipe:: gencore
   :replaces_section_title:
   :noindex:

   Generate consensus reads to reduce sequencing noises and remove duplications

   :homepage: https://github.com/OpenGene/gencore
   :license: MIT
   :recipe: /`gencore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gencore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gencore/meta.yaml>`_

   


.. conda:package:: gencore

   |downloads_gencore| |docker_gencore|

   :versions:
      
      

      ``0.17.2-3``,  ``0.17.2-2``,  ``0.17.2-1``,  ``0.17.2-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.13.0-1``,  ``0.13.0-0``

      

   
   :depends htslib: ``>=1.10.2,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends zlib: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gencore

   and update with::

      mamba update gencore

  To create a new environment, run::

      mamba create --name myenvname gencore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gencore:<tag>

   (see `gencore/tags`_ for valid values for ``<tag>``)


.. |downloads_gencore| image:: https://img.shields.io/conda/dn/bioconda/gencore.svg?style=flat
   :target: https://anaconda.org/bioconda/gencore
   :alt:   (downloads)
.. |docker_gencore| image:: https://quay.io/repository/biocontainers/gencore/status
   :target: https://quay.io/repository/biocontainers/gencore
.. _`gencore/tags`: https://quay.io/repository/biocontainers/gencore?tab=tags


.. raw:: html

    <script>
        var package = "gencore";
        var versions = ["0.17.2","0.17.2","0.17.2","0.17.2","0.17.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gencore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gencore/README.html