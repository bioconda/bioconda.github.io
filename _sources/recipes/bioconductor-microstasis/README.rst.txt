:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microstasis'
.. highlight: bash

bioconductor-microstasis
========================

.. conda:recipe:: bioconductor-microstasis
   :replaces_section_title:
   :noindex:

   Microbiota STability ASsessment via Iterative cluStering

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/microSTASIS.html
   :license: GPL-3
   :recipe: /`bioconductor-microstasis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microstasis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microstasis/meta.yaml>`_

   The toolkit \'µSTASIS\'\, or microSTASIS\, has been developed for the stability analysis of microbiota in a temporal framework by leveraging on iterative clustering. Concretely\, the core function uses Hartigan\-Wong k\-means algorithm as many times as possible for stressing out paired samples from the same individuals to test if they remain together for multiple numbers of clusters over a whole data set of individuals. Moreover\, the package includes multiple functions to subset samples from paired times\, validate the results or visualize the output.


.. conda:package:: bioconductor-microstasis

   |downloads_bioconductor-microstasis| |docker_bioconductor-microstasis|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.8.0,<2.9.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-ggside: 
   :depends r-rlang: 
   :depends r-stringr: 
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

      mamba install bioconductor-microstasis

   and update with::

      mamba update bioconductor-microstasis

  To create a new environment, run::

      mamba create --name myenvname bioconductor-microstasis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-microstasis:<tag>

   (see `bioconductor-microstasis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-microstasis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microstasis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microstasis
   :alt:   (downloads)
.. |docker_bioconductor-microstasis| image:: https://quay.io/repository/biocontainers/bioconductor-microstasis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microstasis
.. _`bioconductor-microstasis/tags`: https://quay.io/repository/biocontainers/bioconductor-microstasis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-microstasis";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microstasis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microstasis/README.html