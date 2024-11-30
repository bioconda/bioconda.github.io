:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xpressplot'
.. highlight: bash

xpressplot
==========

.. conda:recipe:: xpressplot
   :replaces_section_title:
   :noindex:

   A toolkit for navigating and analyzing gene expression datasets.

   :homepage: https://github.com/XPRESSyourself/XPRESSplot
   :license: GPL-3.0
   :recipe: /`xpressplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xpressplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xpressplot/meta.yaml>`_

   


.. conda:package:: xpressplot

   |downloads_xpressplot| |docker_xpressplot|

   :versions:
      
      

      ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.0.8b0-0``,  ``0.0.5b0-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: ``>=4``
   :depends plotly_express: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
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

      mamba install xpressplot

   and update with::

      mamba update xpressplot

  To create a new environment, run::

      mamba create --name myenvname xpressplot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/xpressplot:<tag>

   (see `xpressplot/tags`_ for valid values for ``<tag>``)


.. |downloads_xpressplot| image:: https://img.shields.io/conda/dn/bioconda/xpressplot.svg?style=flat
   :target: https://anaconda.org/bioconda/xpressplot
   :alt:   (downloads)
.. |docker_xpressplot| image:: https://quay.io/repository/biocontainers/xpressplot/status
   :target: https://quay.io/repository/biocontainers/xpressplot
.. _`xpressplot/tags`: https://quay.io/repository/biocontainers/xpressplot?tab=tags


.. raw:: html

    <script>
        var package = "xpressplot";
        var versions = ["0.2.5","0.2.5","0.2.3","0.2.2","0.0.8b0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xpressplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xpressplot/README.html