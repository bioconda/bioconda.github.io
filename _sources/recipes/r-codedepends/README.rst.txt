:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-codedepends'
.. highlight: bash

r-codedepends
=============

.. conda:recipe:: r-codedepends
   :replaces_section_title:
   :noindex:

   Tools for analyzing R expressions or blocks of code and determining the dependencies between them. It focuses on R scripts\, but can be used on the bodies of functions. There are many facilities including the ability to summarize  or get a high\-level view of code\, determining dependencies between variables\,  code improvement suggestions.

   :homepage: https://github.com/duncantl/CodeDepends
   :license: GPL3 / GPL-3
   :recipe: /`r-codedepends <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-codedepends>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-codedepends/meta.yaml>`_

   


.. conda:package:: r-codedepends

   |downloads_r-codedepends| |docker_r-codedepends|

   :versions:
      
      

      ``0.6.5-4``,  ``0.6.5-3``,  ``0.6.5-2``,  ``0.6.5-1``,  ``0.6.5-0``

      

   
   :depends bioconductor-graph: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-codetools: 
   :depends r-xml: 
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

      mamba install r-codedepends

   and update with::

      mamba update r-codedepends

  To create a new environment, run::

      mamba create --name myenvname r-codedepends

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-codedepends:<tag>

   (see `r-codedepends/tags`_ for valid values for ``<tag>``)


.. |downloads_r-codedepends| image:: https://img.shields.io/conda/dn/bioconda/r-codedepends.svg?style=flat
   :target: https://anaconda.org/bioconda/r-codedepends
   :alt:   (downloads)
.. |docker_r-codedepends| image:: https://quay.io/repository/biocontainers/r-codedepends/status
   :target: https://quay.io/repository/biocontainers/r-codedepends
.. _`r-codedepends/tags`: https://quay.io/repository/biocontainers/r-codedepends?tab=tags


.. raw:: html

    <script>
        var package = "r-codedepends";
        var versions = ["0.6.5","0.6.5","0.6.5","0.6.5","0.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-codedepends/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-codedepends/README.html