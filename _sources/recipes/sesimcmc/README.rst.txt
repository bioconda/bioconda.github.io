:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sesimcmc'
.. highlight: bash

sesimcmc
========

.. conda:recipe:: sesimcmc
   :replaces_section_title:
   :noindex:

   Motif finding with modified MCMC

   :homepage: http://favorov.bioinfolab.net/SeSiMCMC/
   :license: MIT
   :recipe: /`sesimcmc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sesimcmc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sesimcmc/meta.yaml>`_

   


.. conda:package:: sesimcmc

   |downloads_sesimcmc| |docker_sesimcmc|

   :versions:
      
      

      ``4.36-4``,  ``4.36-3``,  ``4.36-2``,  ``4.36-1``,  ``4.36-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sesimcmc

   and update with::

      mamba update sesimcmc

  To create a new environment, run::

      mamba create --name myenvname sesimcmc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sesimcmc:<tag>

   (see `sesimcmc/tags`_ for valid values for ``<tag>``)


.. |downloads_sesimcmc| image:: https://img.shields.io/conda/dn/bioconda/sesimcmc.svg?style=flat
   :target: https://anaconda.org/bioconda/sesimcmc
   :alt:   (downloads)
.. |docker_sesimcmc| image:: https://quay.io/repository/biocontainers/sesimcmc/status
   :target: https://quay.io/repository/biocontainers/sesimcmc
.. _`sesimcmc/tags`: https://quay.io/repository/biocontainers/sesimcmc?tab=tags


.. raw:: html

    <script>
        var package = "sesimcmc";
        var versions = ["4.36","4.36","4.36","4.36","4.36"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sesimcmc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sesimcmc/README.html