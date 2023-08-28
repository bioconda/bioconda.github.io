:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lefse'
.. highlight: bash

lefse
=====

.. conda:recipe:: lefse
   :replaces_section_title:
   :noindex:

   LDA Effect Size \(LEfSe\) \(Segata et. al 2010\) is an algorithm for high\-dimensional biomarker discovery and explanation that identifies genomic features \(genes\, pathways\, or taxa\) characterizing the differences between two or more biological conditions.

   :homepage: https://github.com/SegataLab/lefse
   :license: MIT
   :recipe: /`lefse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lefse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lefse/meta.yaml>`_

   


.. conda:package:: lefse

   |downloads_lefse| |docker_lefse|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.8.post1-2``,  ``1.0.8.post1-1``,  ``1.0.8.post1-0``,  ``1.0.7.post1-0``,  ``1.0.7-2``,  ``1.0.7-1``

      

   
   :depends biom-format: 
   :depends icu: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: ``>=3.7``
   :depends r-base: 
   :depends r-coin: 
   :depends r-mass: 
   :depends r-modeltools: 
   :depends r-mvtnorm: 
   :depends r-survival: 
   :depends rpy2: 
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

      mamba install lefse

   and update with::

      mamba update lefse

  To create a new environment, run::

      mamba create --name myenvname lefse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lefse:<tag>

   (see `lefse/tags`_ for valid values for ``<tag>``)


.. |downloads_lefse| image:: https://img.shields.io/conda/dn/bioconda/lefse.svg?style=flat
   :target: https://anaconda.org/bioconda/lefse
   :alt:   (downloads)
.. |docker_lefse| image:: https://quay.io/repository/biocontainers/lefse/status
   :target: https://quay.io/repository/biocontainers/lefse
.. _`lefse/tags`: https://quay.io/repository/biocontainers/lefse?tab=tags


.. raw:: html

    <script>
        var package = "lefse";
        var versions = ["1.1.2","1.1.1","1.0.8.post1","1.0.8.post1","1.0.8.post1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lefse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lefse/README.html