:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fit_nbinom'
.. highlight: bash

fit_nbinom
==========

.. conda:recipe:: fit_nbinom
   :replaces_section_title:
   :noindex:

   Script to fit negative binomial distributions via maximum likelihood estimation.

   :homepage: https://github.com/joachimwolff/fit_nbinom/
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`fit_nbinom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fit_nbinom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fit_nbinom/meta.yaml>`_

   


.. conda:package:: fit_nbinom

   |downloads_fit_nbinom| |docker_fit_nbinom|

   :versions:
      
      

      ``1.2-0``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends numpy: ``>=1.19``
   :depends python: 
   :depends scipy: ``>=1.10``
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

      mamba install fit_nbinom

   and update with::

      mamba update fit_nbinom

  To create a new environment, run::

      mamba create --name myenvname fit_nbinom

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fit_nbinom:<tag>

   (see `fit_nbinom/tags`_ for valid values for ``<tag>``)


.. |downloads_fit_nbinom| image:: https://img.shields.io/conda/dn/bioconda/fit_nbinom.svg?style=flat
   :target: https://anaconda.org/bioconda/fit_nbinom
   :alt:   (downloads)
.. |docker_fit_nbinom| image:: https://quay.io/repository/biocontainers/fit_nbinom/status
   :target: https://quay.io/repository/biocontainers/fit_nbinom
.. _`fit_nbinom/tags`: https://quay.io/repository/biocontainers/fit_nbinom?tab=tags


.. raw:: html

    <script>
        var package = "fit_nbinom";
        var versions = ["1.2","1.1","1.1","1.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fit_nbinom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fit_nbinom/README.html