:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphlan'
.. highlight: bash

graphlan
========

.. conda:recipe:: graphlan
   :replaces_section_title:
   :noindex:

   GraPhlAn is a software tool for producing high\-quality circular representations of taxonomic and phylogenetic trees.

   :homepage: https://github.com/biobakery/graphlan/wiki
   :license: MIT / MIT License
   :recipe: /`graphlan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphlan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphlan/meta.yaml>`_

   


.. conda:package:: graphlan

   |downloads_graphlan| |docker_graphlan|

   :versions:
      
      

      ``1.1.3-2``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends biopython: ``>=1.6``
   :depends matplotlib-base: ``>=1.1``
   :depends python: ``<3``
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

      mamba install graphlan

   and update with::

      mamba update graphlan

  To create a new environment, run::

      mamba create --name myenvname graphlan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/graphlan:<tag>

   (see `graphlan/tags`_ for valid values for ``<tag>``)


.. |downloads_graphlan| image:: https://img.shields.io/conda/dn/bioconda/graphlan.svg?style=flat
   :target: https://anaconda.org/bioconda/graphlan
   :alt:   (downloads)
.. |docker_graphlan| image:: https://quay.io/repository/biocontainers/graphlan/status
   :target: https://quay.io/repository/biocontainers/graphlan
.. _`graphlan/tags`: https://quay.io/repository/biocontainers/graphlan?tab=tags


.. raw:: html

    <script>
        var package = "graphlan";
        var versions = ["1.1.3","1.1.3","1.1.3","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphlan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphlan/README.html