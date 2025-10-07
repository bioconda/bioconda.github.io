:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bifidoannotator'
.. highlight: bash

bifidoannotator
===============

.. conda:recipe:: bifidoannotator
   :replaces_section_title:
   :noindex:

   Fine\-grained annotation of bifidobacterial enzymes involved in human\-milk glycan \(HMG\) utilization

   :homepage: https://github.com/nicholaspucci/bifidoAnnotator
   :license: MIT
   :recipe: /`bifidoannotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bifidoannotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bifidoannotator/meta.yaml>`_

   bifidoAnnotator performs hierarchical annotation of enzymes involved in human\-milk glycan \(HMG\) utilization using MMseqs2\,
   generates data matrices\, and creates publication\-ready heatmaps.



.. conda:package:: bifidoannotator

   |downloads_bifidoannotator| |docker_bifidoannotator|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends matplotlib-base: ``>=3.3.0``
   :depends mmseqs2: 
   :depends numpy: ``>=1.18.0``
   :depends pandas: ``>=1.0.0``
   :depends python: ``>=3.8``
   :depends scipy: ``>=1.5.0``
   :depends seaborn: ``>=0.11.0``
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

      mamba install bifidoannotator

   and update with::

      mamba update bifidoannotator

  To create a new environment, run::

      mamba create --name myenvname bifidoannotator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bifidoannotator:<tag>

   (see `bifidoannotator/tags`_ for valid values for ``<tag>``)


.. |downloads_bifidoannotator| image:: https://img.shields.io/conda/dn/bioconda/bifidoannotator.svg?style=flat
   :target: https://anaconda.org/bioconda/bifidoannotator
   :alt:   (downloads)
.. |docker_bifidoannotator| image:: https://quay.io/repository/biocontainers/bifidoannotator/status
   :target: https://quay.io/repository/biocontainers/bifidoannotator
.. _`bifidoannotator/tags`: https://quay.io/repository/biocontainers/bifidoannotator?tab=tags


.. raw:: html

    <script>
        var package = "bifidoannotator";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bifidoannotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bifidoannotator/README.html