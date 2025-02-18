:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-george'
.. highlight: bash

r-george
========

.. conda:recipe:: r-george
   :replaces_section_title:
   :noindex:

   geoRge\, a computational tool for stable isotope labelling detection in LC\/MS\-based untargeted metabolomics

   :homepage: https://github.com/jcapelladesto/geoRge/README.md
   :license: GPL (>= 2)
   :recipe: /`r-george <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-george>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-george/meta.yaml>`_

   


.. conda:package:: r-george

   |downloads_r-george| |docker_r-george|

   :versions:
      
      

      ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-mzr: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-xcms: ``>=4.4.0,<4.5.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-optparse: 
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

      mamba install r-george

   and update with::

      mamba update r-george

  To create a new environment, run::

      mamba create --name myenvname r-george

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-george:<tag>

   (see `r-george/tags`_ for valid values for ``<tag>``)


.. |downloads_r-george| image:: https://img.shields.io/conda/dn/bioconda/r-george.svg?style=flat
   :target: https://anaconda.org/bioconda/r-george
   :alt:   (downloads)
.. |docker_r-george| image:: https://quay.io/repository/biocontainers/r-george/status
   :target: https://quay.io/repository/biocontainers/r-george
.. _`r-george/tags`: https://quay.io/repository/biocontainers/r-george?tab=tags


.. raw:: html

    <script>
        var package = "r-george";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-george/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-george/README.html