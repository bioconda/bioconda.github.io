:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-hmm'
.. highlight: bash

r-hmm
=====

.. conda:recipe:: r-hmm
   :replaces_section_title:
   :noindex:

   Functions for hidden Markov Models \(HMM\).

   :homepage: https://cran.r-project.org/package=HMM
   :license: GPL-3
   :recipe: /`r-hmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hmm/meta.yaml>`_

   


.. conda:package:: r-hmm

   |downloads_r-hmm| |docker_r-hmm|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install r-hmm

   and update with::

      mamba update r-hmm

  To create a new environment, run::

      mamba create --name myenvname r-hmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-hmm:<tag>

   (see `r-hmm/tags`_ for valid values for ``<tag>``)


.. |downloads_r-hmm| image:: https://img.shields.io/conda/dn/bioconda/r-hmm.svg?style=flat
   :target: https://anaconda.org/bioconda/r-hmm
   :alt:   (downloads)
.. |docker_r-hmm| image:: https://quay.io/repository/biocontainers/r-hmm/status
   :target: https://quay.io/repository/biocontainers/r-hmm
.. _`r-hmm/tags`: https://quay.io/repository/biocontainers/r-hmm?tab=tags


.. raw:: html

    <script>
        var package = "r-hmm";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-hmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-hmm/README.html