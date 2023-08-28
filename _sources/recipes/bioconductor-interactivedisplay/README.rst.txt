:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-interactivedisplay'
.. highlight: bash

bioconductor-interactivedisplay
===============================

.. conda:recipe:: bioconductor-interactivedisplay
   :replaces_section_title:
   :noindex:

   Package for enabling powerful shiny web displays of Bioconductor objects

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/interactiveDisplay.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-interactivedisplay <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interactivedisplay>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interactivedisplay/meta.yaml>`_
   :links: biotools: :biotools:`interactivedisplay`, doi: :doi:`10.1038/nmeth.3252`

   The interactiveDisplay package contains the methods needed to generate interactive Shiny based display methods for Bioconductor objects.


.. conda:package:: bioconductor-interactivedisplay

   |downloads_bioconductor-interactivedisplay| |docker_bioconductor-interactivedisplay|

   :versions:
      
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-category: ``>=2.66.0,<2.67.0``
   :depends bioconductor-interactivedisplaybase: ``>=1.38.0,<1.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-ggplot2: 
   :depends r-gridsvg: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :depends r-xml: 
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

      mamba install bioconductor-interactivedisplay

   and update with::

      mamba update bioconductor-interactivedisplay

  To create a new environment, run::

      mamba create --name myenvname bioconductor-interactivedisplay

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-interactivedisplay:<tag>

   (see `bioconductor-interactivedisplay/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-interactivedisplay| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-interactivedisplay.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-interactivedisplay
   :alt:   (downloads)
.. |docker_bioconductor-interactivedisplay| image:: https://quay.io/repository/biocontainers/bioconductor-interactivedisplay/status
   :target: https://quay.io/repository/biocontainers/bioconductor-interactivedisplay
.. _`bioconductor-interactivedisplay/tags`: https://quay.io/repository/biocontainers/bioconductor-interactivedisplay?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-interactivedisplay";
        var versions = ["1.38.0","1.36.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-interactivedisplay/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-interactivedisplay/README.html