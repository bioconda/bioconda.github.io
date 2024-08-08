:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sigprofilerplotting'
.. highlight: bash

sigprofilerplotting
===================

.. conda:recipe:: sigprofilerplotting
   :replaces_section_title:
   :noindex:

   SigProfiler plotting tool.

   :homepage: https://github.com/alexandrovlab/SigProfilerPlotting
   :documentation: https://osf.io/2aj6t/wiki/home
   
   :license: BSD / BSD-2-Clause
   :recipe: /`sigprofilerplotting <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sigprofilerplotting>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sigprofilerplotting/meta.yaml>`_

   


.. conda:package:: sigprofilerplotting

   |downloads_sigprofilerplotting| |docker_sigprofilerplotting|

   :versions:
      
      

      ``1.3.24-0``,  ``1.3.23-0``,  ``1.3.22-0``,  ``1.3.21-0``

      

   
   :depends matplotlib-base: ``>=3.4.3``
   :depends pandas: ``>=1.2.4,<2.0.0``
   :depends pillow: ``>=10.0.0``
   :depends python: ``>=3.7``
   :depends scikit-learn: ``>=1.1.3``
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

      mamba install sigprofilerplotting

   and update with::

      mamba update sigprofilerplotting

  To create a new environment, run::

      mamba create --name myenvname sigprofilerplotting

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sigprofilerplotting:<tag>

   (see `sigprofilerplotting/tags`_ for valid values for ``<tag>``)


.. |downloads_sigprofilerplotting| image:: https://img.shields.io/conda/dn/bioconda/sigprofilerplotting.svg?style=flat
   :target: https://anaconda.org/bioconda/sigprofilerplotting
   :alt:   (downloads)
.. |docker_sigprofilerplotting| image:: https://quay.io/repository/biocontainers/sigprofilerplotting/status
   :target: https://quay.io/repository/biocontainers/sigprofilerplotting
.. _`sigprofilerplotting/tags`: https://quay.io/repository/biocontainers/sigprofilerplotting?tab=tags


.. raw:: html

    <script>
        var package = "sigprofilerplotting";
        var versions = ["1.3.24","1.3.23","1.3.22","1.3.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sigprofilerplotting/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sigprofilerplotting/README.html