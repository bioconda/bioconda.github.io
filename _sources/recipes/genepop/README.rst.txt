:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genepop'
.. highlight: bash

genepop
=======

.. conda:recipe:: genepop
   :replaces_section_title:
   :noindex:

   Population Genetic Data Analysis package.

   :homepage: https://f-rousset.r-universe.dev/genepop
   :developer docs: https://github.com/cran/genepop
   :license: CeCILL-2
   :recipe: /`genepop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genepop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genepop/meta.yaml>`_

   


.. conda:package:: genepop

   |downloads_genepop| |docker_genepop|

   :versions:
      
      

      ``4.8.2-0``,  ``4.6-0``,  ``4.5.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install genepop

   and update with::

      mamba update genepop

  To create a new environment, run::

      mamba create --name myenvname genepop

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genepop:<tag>

   (see `genepop/tags`_ for valid values for ``<tag>``)


.. |downloads_genepop| image:: https://img.shields.io/conda/dn/bioconda/genepop.svg?style=flat
   :target: https://anaconda.org/bioconda/genepop
   :alt:   (downloads)
.. |docker_genepop| image:: https://quay.io/repository/biocontainers/genepop/status
   :target: https://quay.io/repository/biocontainers/genepop
.. _`genepop/tags`: https://quay.io/repository/biocontainers/genepop?tab=tags


.. raw:: html

    <script>
        var package = "genepop";
        var versions = ["4.8.2","4.6","4.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genepop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genepop/README.html