:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pylocuszoom'
.. highlight: bash

pylocuszoom
===========

.. conda:recipe:: pylocuszoom
   :replaces_section_title:
   :noindex:

   Publication\-ready GWAS visualization library with regional association plots\, gene tracks\, eQTL\, PheWAS\, fine\-mapping\, and forest plots

   :homepage: https://github.com/michael-denyer/pylocuszoom
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pylocuszoom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pylocuszoom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pylocuszoom/meta.yaml>`_

   pyLocusZoom creates publication\-quality genetic association visualizations\:
   regional association plots with LD coloring and recombination overlays\,
   stacked multi\-GWAS comparisons\, eQTL overlays\, fine\-mapping\/SuSiE credible sets\,
   PheWAS \(phenome\-wide association\) plots\, and forest plots for meta\-analysis.
   Includes gene track visualization\, file loaders for common formats \(REGENIE\, BOLT\-LMM\,
   SAIGE\, GEMMA\, GTEx\, SuSiE\, FINEMAP\)\, and three backends\: matplotlib \(static\/publication\)\,
   plotly \(interactive\)\, and bokeh \(dashboards\).



.. conda:package:: pylocuszoom

   |downloads_pylocuszoom| |docker_pylocuszoom|

   :versions:
      
      

      ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.0.0-0``

      

   
   :depends adjusttext: ``>=0.8``
   :depends bokeh: ``>=3.8.2``
   :depends colorcet: ``>=3.0.0``
   :depends loguru: ``>=0.7.0``
   :depends matplotlib-base: ``>=3.5.0``
   :depends numpy: ``>=1.21.0``
   :depends pandas: ``>=1.4.0``
   :depends plotly: ``>=5.15.0``
   :depends pydantic: ``>=2.0.0``
   :depends pyliftover: ``>=0.4``
   :depends python: ``>=3.10``
   :depends python-kaleido: ``>=0.2.0``
   :depends requests: ``>=2.25.0``
   :depends tqdm: ``>=4.60.0``
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

      mamba install pylocuszoom

   and update with::

      mamba update pylocuszoom

  To create a new environment, run::

      mamba create --name myenvname pylocuszoom

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pylocuszoom:<tag>

   (see `pylocuszoom/tags`_ for valid values for ``<tag>``)


.. |downloads_pylocuszoom| image:: https://img.shields.io/conda/dn/bioconda/pylocuszoom.svg?style=flat
   :target: https://anaconda.org/bioconda/pylocuszoom
   :alt:   (downloads)
.. |docker_pylocuszoom| image:: https://quay.io/repository/biocontainers/pylocuszoom/status
   :target: https://quay.io/repository/biocontainers/pylocuszoom
.. _`pylocuszoom/tags`: https://quay.io/repository/biocontainers/pylocuszoom?tab=tags


.. raw:: html

    <script>
        var package = "pylocuszoom";
        var versions = ["1.3.1","1.2.0","1.1.2","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pylocuszoom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pylocuszoom/README.html