:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genin2'
.. highlight: bash

genin2
======

.. conda:recipe:: genin2
   :replaces_section_title:
   :noindex:

   Genin2 is a lightining\-fast bioinformatic tool to predict genotypes for H5 viruses belonging to the European clade 2.3.4.4b.

   :homepage: https://github.com/izsvenezie-virology/genin2
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`genin2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genin2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genin2/meta.yaml>`_

   


.. conda:package:: genin2

   |downloads_genin2| |docker_genin2|

   :versions:
      
      

      ``2.1.5-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.0.1-0``

      

   
   :depends biopython: ``>=1.85``
   :depends click: ``>=8.1.0``
   :depends importlib-resources: ``>=6.5.2``
   :depends joblib: ``>=1.4.0``
   :depends numpy: ``>=2.0.2``
   :depends python: ``>=3.9``
   :depends requests: ``>=2.32.3``
   :depends scikit-learn: ``>=1.6.1``
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

      mamba install genin2

   and update with::

      mamba update genin2

  To create a new environment, run::

      mamba create --name myenvname genin2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genin2:<tag>

   (see `genin2/tags`_ for valid values for ``<tag>``)


.. |downloads_genin2| image:: https://img.shields.io/conda/dn/bioconda/genin2.svg?style=flat
   :target: https://anaconda.org/bioconda/genin2
   :alt:   (downloads)
.. |docker_genin2| image:: https://quay.io/repository/biocontainers/genin2/status
   :target: https://quay.io/repository/biocontainers/genin2
.. _`genin2/tags`: https://quay.io/repository/biocontainers/genin2?tab=tags


.. raw:: html

    <script>
        var package = "genin2";
        var versions = ["2.1.5","2.1.3","2.1.2","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genin2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genin2/README.html