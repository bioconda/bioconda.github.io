:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treerecs'
.. highlight: bash

treerecs
========

.. conda:recipe:: treerecs
   :replaces_section_title:
   :noindex:

   correct\, rearrange and \(re\-\)root gene trees with regard to a given species tree

   :homepage: https://project.inria.fr/treerecs/
   :license: AGPL
   :recipe: /`treerecs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treerecs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treerecs/meta.yaml>`_

   


.. conda:package:: treerecs

   |downloads_treerecs| |docker_treerecs|

   :versions:
      
      

      ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends libcxx: ``>=15.0.7``
   :depends llvm-openmp: ``>=15.0.7``
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

      mamba install treerecs

   and update with::

      mamba update treerecs

  To create a new environment, run::

      mamba create --name myenvname treerecs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/treerecs:<tag>

   (see `treerecs/tags`_ for valid values for ``<tag>``)


.. |downloads_treerecs| image:: https://img.shields.io/conda/dn/bioconda/treerecs.svg?style=flat
   :target: https://anaconda.org/bioconda/treerecs
   :alt:   (downloads)
.. |docker_treerecs| image:: https://quay.io/repository/biocontainers/treerecs/status
   :target: https://quay.io/repository/biocontainers/treerecs
.. _`treerecs/tags`: https://quay.io/repository/biocontainers/treerecs?tab=tags


.. raw:: html

    <script>
        var package = "treerecs";
        var versions = ["1.2","1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treerecs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treerecs/README.html