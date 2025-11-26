:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'curve-curator'
.. highlight: bash

curve-curator
=============

.. conda:recipe:: curve-curator
   :replaces_section_title:
   :noindex:

   CurveCurator is an open\-source analysis platform for any dose\-dependent data. It fits a classical 4\-parameter  equation to estimate effect potency\, effect size\, and the statistical significance of the observed response.    2D\-thresholding efficiently reduces false positives in high\-throughput experiments and separates relevant from irrelevant   or insignificant hits in an automated and unbiased manner. An interactive dashboard allows users to quickly explore data locally.

   :homepage: https://github.com/kusterlab/curve_curator
   :license: Apache-2.0
   :recipe: /`curve-curator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curve-curator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curve-curator/meta.yaml>`_

   


.. conda:package:: curve-curator

   |downloads_curve-curator| |docker_curve-curator|

   :versions:
      
      

      ``0.6.0-0``

      

   
   :depends bokeh: ``>=3.4.0,<3.8.0``
   :depends numpy: ``>=1.25.0,<3.0``
   :depends pandas: ``>=2.1.0,<3.0.0``
   :depends pytest: ``>=7.4.3,<8.0.0``
   :depends python: ``>=3.11,<3.14``
   :depends scipy: ``>=1.10.1,<2.0.0``
   :depends statsmodels: ``>=0.14.0,<0.15.0``
   :depends tqdm: ``>=4.66.1,<5.0.0``
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

      mamba install curve-curator

   and update with::

      mamba update curve-curator

  To create a new environment, run::

      mamba create --name myenvname curve-curator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/curve-curator:<tag>

   (see `curve-curator/tags`_ for valid values for ``<tag>``)


.. |downloads_curve-curator| image:: https://img.shields.io/conda/dn/bioconda/curve-curator.svg?style=flat
   :target: https://anaconda.org/bioconda/curve-curator
   :alt:   (downloads)
.. |docker_curve-curator| image:: https://quay.io/repository/biocontainers/curve-curator/status
   :target: https://quay.io/repository/biocontainers/curve-curator
.. _`curve-curator/tags`: https://quay.io/repository/biocontainers/curve-curator?tab=tags


.. raw:: html

    <script>
        var package = "curve-curator";
        var versions = ["0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/curve-curator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/curve-curator/README.html