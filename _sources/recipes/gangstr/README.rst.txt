:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gangstr'
.. highlight: bash

gangstr
=======

.. conda:recipe:: gangstr
   :replaces_section_title:
   :noindex:

   GangSTR is a tool for genome\-wide profiling tandem repeats from short reads.

   :homepage: https://github.com/gymreklab/GangSTR
   :license: GPL-3.0-or-later
   :recipe: /`gangstr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gangstr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gangstr/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkz501`

   


.. conda:package:: gangstr

   |downloads_gangstr| |docker_gangstr|

   :versions:
      
      

      ``2.5.0-6``,  ``2.5.0-5``,  ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends htslib: ``>=1.17,<1.20.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends nlopt: ``>=2.7.1,<2.8.0a0``
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

      mamba install gangstr

   and update with::

      mamba update gangstr

  To create a new environment, run::

      mamba create --name myenvname gangstr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gangstr:<tag>

   (see `gangstr/tags`_ for valid values for ``<tag>``)


.. |downloads_gangstr| image:: https://img.shields.io/conda/dn/bioconda/gangstr.svg?style=flat
   :target: https://anaconda.org/bioconda/gangstr
   :alt:   (downloads)
.. |docker_gangstr| image:: https://quay.io/repository/biocontainers/gangstr/status
   :target: https://quay.io/repository/biocontainers/gangstr
.. _`gangstr/tags`: https://quay.io/repository/biocontainers/gangstr?tab=tags


.. raw:: html

    <script>
        var package = "gangstr";
        var versions = ["2.5.0","2.5.0","2.5.0","2.5.0","2.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gangstr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gangstr/README.html