:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'go-figure'
.. highlight: bash

go-figure
=========

.. conda:recipe:: go-figure
   :replaces_section_title:
   :noindex:

   GO\-Figure\! offers a simple solution for command\-line plotting of informative summary visualisations of lists of GO terms\, designed to support exploratory data analyses and multiple dataset comparisons.

   :homepage: https://gitlab.com/evogenlab/GO-Figure
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`go-figure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/go-figure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/go-figure/meta.yaml>`_

   GO\-Figure\! offers a simple solution for command\-line plotting of informative summary visualisations of lists of GO terms\, designed to support exploratory data analyses and multiple dataset comparisons.


.. conda:package:: go-figure

   |downloads_go-figure| |docker_go-figure|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends adjusttext: ``0.7.3.1.*``
   :depends matplotlib-base: ``3.7.1.*``
   :depends python: ``>=3``
   :depends scikit-learn: ``1.2.2.*``
   :depends seaborn: ``0.12.2.*``
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

      mamba install go-figure

   and update with::

      mamba update go-figure

  To create a new environment, run::

      mamba create --name myenvname go-figure

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/go-figure:<tag>

   (see `go-figure/tags`_ for valid values for ``<tag>``)


.. |downloads_go-figure| image:: https://img.shields.io/conda/dn/bioconda/go-figure.svg?style=flat
   :target: https://anaconda.org/bioconda/go-figure
   :alt:   (downloads)
.. |docker_go-figure| image:: https://quay.io/repository/biocontainers/go-figure/status
   :target: https://quay.io/repository/biocontainers/go-figure
.. _`go-figure/tags`: https://quay.io/repository/biocontainers/go-figure?tab=tags


.. raw:: html

    <script>
        var package = "go-figure";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/go-figure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/go-figure/README.html