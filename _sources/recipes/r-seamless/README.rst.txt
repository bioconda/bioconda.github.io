:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-seamless'
.. highlight: bash

r-seamless
==========

.. conda:recipe:: r-seamless
   :replaces_section_title:
   :noindex:

   Given a bulk transcriptomic \(RNA\-seq\) sample of an Myeloid Leukemia patient calculates immune composition and drug resistance for different small\-molecule inhibitors.

   :homepage: https://github.com/eonurk/seAMLess
   :license: GPL3 / GPL-3
   :recipe: /`r-seamless <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seamless>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seamless/meta.yaml>`_

   


.. conda:package:: r-seamless

   |downloads_r-seamless| |docker_r-seamless|

   :versions:
      
      

      ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends bioconductor-biobase: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-ggtern: 
   :depends r-music: 
   :depends r-randomforest: 
   :depends xbioc: 
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

      mamba install r-seamless

   and update with::

      mamba update r-seamless

  To create a new environment, run::

      mamba create --name myenvname r-seamless

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-seamless:<tag>

   (see `r-seamless/tags`_ for valid values for ``<tag>``)


.. |downloads_r-seamless| image:: https://img.shields.io/conda/dn/bioconda/r-seamless.svg?style=flat
   :target: https://anaconda.org/bioconda/r-seamless
   :alt:   (downloads)
.. |docker_r-seamless| image:: https://quay.io/repository/biocontainers/r-seamless/status
   :target: https://quay.io/repository/biocontainers/r-seamless
.. _`r-seamless/tags`: https://quay.io/repository/biocontainers/r-seamless?tab=tags


.. raw:: html

    <script>
        var package = "r-seamless";
        var versions = ["0.1.0","0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-seamless/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-seamless/README.html