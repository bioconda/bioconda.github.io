:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genometester4'
.. highlight: bash

genometester4
=============

.. conda:recipe:: genometester4
   :replaces_section_title:
   :noindex:

   A toolkit for performing set operations \- union\, intersection and complement \- on k\-mer lists.

   :homepage: https://github.com/bioinfo-ut/GenomeTester4
   :license: GPL3
   :recipe: /`genometester4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometester4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometester4/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13742-015-0097-y`

   


.. conda:package:: genometester4

   |downloads_genometester4| |docker_genometester4|

   :versions:
      
      

      ``4.0-6``,  ``4.0-5``,  ``4.0-4``,  ``4.0-3``,  ``4.0-2``,  ``4.0-1``,  ``4.0-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install genometester4

   and update with::

      mamba update genometester4

  To create a new environment, run::

      mamba create --name myenvname genometester4

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genometester4:<tag>

   (see `genometester4/tags`_ for valid values for ``<tag>``)


.. |downloads_genometester4| image:: https://img.shields.io/conda/dn/bioconda/genometester4.svg?style=flat
   :target: https://anaconda.org/bioconda/genometester4
   :alt:   (downloads)
.. |docker_genometester4| image:: https://quay.io/repository/biocontainers/genometester4/status
   :target: https://quay.io/repository/biocontainers/genometester4
.. _`genometester4/tags`: https://quay.io/repository/biocontainers/genometester4?tab=tags


.. raw:: html

    <script>
        var package = "genometester4";
        var versions = ["4.0","4.0","4.0","4.0","4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genometester4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genometester4/README.html