:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genmap'
.. highlight: bash

genmap
======

.. conda:recipe:: genmap
   :replaces_section_title:
   :noindex:

   Ultra\-fast computation of genome mappability.

   :homepage: https://github.com/cpockrandt/genmap
   :license: BSD
   :recipe: /`genmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genmap/meta.yaml>`_

   


.. conda:package:: genmap

   |downloads_genmap| |docker_genmap|

   :versions:
      
      

      ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends openmp: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install genmap

   and update with::

      mamba update genmap

  To create a new environment, run::

      mamba create --name myenvname genmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genmap:<tag>

   (see `genmap/tags`_ for valid values for ``<tag>``)


.. |downloads_genmap| image:: https://img.shields.io/conda/dn/bioconda/genmap.svg?style=flat
   :target: https://anaconda.org/bioconda/genmap
   :alt:   (downloads)
.. |docker_genmap| image:: https://quay.io/repository/biocontainers/genmap/status
   :target: https://quay.io/repository/biocontainers/genmap
.. _`genmap/tags`: https://quay.io/repository/biocontainers/genmap?tab=tags


.. raw:: html

    <script>
        var package = "genmap";
        var versions = ["1.3.0","1.3.0","1.3.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genmap/README.html