:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xbioc'
.. highlight: bash

xbioc
=====

.. conda:recipe:: xbioc
   :replaces_section_title:
   :noindex:

   Extra Base Functions for Bioconductor

   :homepage: https://github.com/renozao/xbioc
   :license: GPL (>= 3)
   :recipe: /`xbioc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xbioc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xbioc/meta.yaml>`_

   


.. conda:package:: xbioc

   |downloads_xbioc| |docker_xbioc|

   :versions:
      
      

      ``0.1.19-3``,  ``0.1.19-2``,  ``0.1.19-1``,  ``0.1.19-0``,  ``0.1.18-2``,  ``0.1.18-1``,  ``0.1.18-0``,  ``0.1.16-0``

      

   
   :depends bioconductor-annotationdbi: 
   :depends bioconductor-biobase: 
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-checkmate: 
   :depends r-digest: 
   :depends r-pkgmaker: ``>=0.26.6``
   :depends r-plyr: 
   :depends r-reshape2: 
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

      mamba install xbioc

   and update with::

      mamba update xbioc

  To create a new environment, run::

      mamba create --name myenvname xbioc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/xbioc:<tag>

   (see `xbioc/tags`_ for valid values for ``<tag>``)


.. |downloads_xbioc| image:: https://img.shields.io/conda/dn/bioconda/xbioc.svg?style=flat
   :target: https://anaconda.org/bioconda/xbioc
   :alt:   (downloads)
.. |docker_xbioc| image:: https://quay.io/repository/biocontainers/xbioc/status
   :target: https://quay.io/repository/biocontainers/xbioc
.. _`xbioc/tags`: https://quay.io/repository/biocontainers/xbioc?tab=tags


.. raw:: html

    <script>
        var package = "xbioc";
        var versions = ["0.1.19","0.1.19","0.1.19","0.1.19","0.1.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xbioc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xbioc/README.html