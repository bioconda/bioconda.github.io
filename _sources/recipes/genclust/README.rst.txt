:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genclust'
.. highlight: bash

genclust
========

.. conda:recipe:: genclust
   :replaces_section_title:
   :noindex:

   A genetic algorithm for clustering gene expression data.

   :homepage: http://www.math.unipa.it/~lobosco/genclust/
   :license: GNU GPL
   :recipe: /`genclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genclust/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-6-289`

   


.. conda:package:: genclust

   |downloads_genclust| |docker_genclust|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install genclust

   and update with::

      mamba update genclust

  To create a new environment, run::

      mamba create --name myenvname genclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genclust:<tag>

   (see `genclust/tags`_ for valid values for ``<tag>``)


.. |downloads_genclust| image:: https://img.shields.io/conda/dn/bioconda/genclust.svg?style=flat
   :target: https://anaconda.org/bioconda/genclust
   :alt:   (downloads)
.. |docker_genclust| image:: https://quay.io/repository/biocontainers/genclust/status
   :target: https://quay.io/repository/biocontainers/genclust
.. _`genclust/tags`: https://quay.io/repository/biocontainers/genclust?tab=tags


.. raw:: html

    <script>
        var package = "genclust";
        var versions = ["1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genclust/README.html