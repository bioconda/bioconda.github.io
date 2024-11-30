:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xhmm'
.. highlight: bash

xhmm
====

.. conda:recipe:: xhmm
   :replaces_section_title:
   :noindex:

   XHMM \(eXome\-Hidden Markov Model\).

   :homepage: http://atgu.mgh.harvard.edu/xhmm/index.shtml
   :license: GPL3
   :recipe: /`xhmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xhmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xhmm/meta.yaml>`_
   :links: biotools: :biotools:`xhmm`, doi: :doi:`10.1016/j.ajhg.2012.08.005`, doi: :doi:`10.1002/0471142905.hg0723s81`

   


.. conda:package:: xhmm

   |downloads_xhmm| |docker_xhmm|

   :versions:
      
      

      ``0.0.0.2016_01_04.cc14e52-5``,  ``0.0.0.2016_01_04.cc14e52-4``,  ``0.0.0.2016_01_04.cc14e52-3``,  ``0.0.0.2016_01_04.cc14e52-2``,  ``0.0.0.2016_01_04.cc14e52-1``,  ``0.0.0.2016_01_04.cc14e52-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=10.4.0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install xhmm

   and update with::

      mamba update xhmm

  To create a new environment, run::

      mamba create --name myenvname xhmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/xhmm:<tag>

   (see `xhmm/tags`_ for valid values for ``<tag>``)


.. |downloads_xhmm| image:: https://img.shields.io/conda/dn/bioconda/xhmm.svg?style=flat
   :target: https://anaconda.org/bioconda/xhmm
   :alt:   (downloads)
.. |docker_xhmm| image:: https://quay.io/repository/biocontainers/xhmm/status
   :target: https://quay.io/repository/biocontainers/xhmm
.. _`xhmm/tags`: https://quay.io/repository/biocontainers/xhmm?tab=tags


.. raw:: html

    <script>
        var package = "xhmm";
        var versions = ["0.0.0.2016_01_04.cc14e52","0.0.0.2016_01_04.cc14e52","0.0.0.2016_01_04.cc14e52","0.0.0.2016_01_04.cc14e52","0.0.0.2016_01_04.cc14e52"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xhmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xhmm/README.html