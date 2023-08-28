:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lcfit'
.. highlight: bash

lcfit
=====

.. conda:recipe:: lcfit
   :replaces_section_title:
   :noindex:

   Likelihood curve fitting by nonlinear least squares.

   :homepage: https://github.com/matsengrp/lcfit
   :license: GPL / GPL-3.0
   :recipe: /`lcfit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lcfit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lcfit/meta.yaml>`_

   


.. conda:package:: lcfit

   |downloads_lcfit| |docker_lcfit|

   :versions:
      
      

      ``0.5-3``,  ``0.4-0``

      

   
   :depends bpp-core: 
   :depends bpp-phyl: 
   :depends bpp-seq: 
   :depends gsl: ``>=2.2.1,<2.3.0a0``
   :depends libgcc-ng: ``>=4.9``
   :depends libstdcxx-ng: ``>=4.9``
   :depends nlopt: 
   :depends openblas: ``>=0.2.20,<0.2.21.0a0``
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

      mamba install lcfit

   and update with::

      mamba update lcfit

  To create a new environment, run::

      mamba create --name myenvname lcfit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lcfit:<tag>

   (see `lcfit/tags`_ for valid values for ``<tag>``)


.. |downloads_lcfit| image:: https://img.shields.io/conda/dn/bioconda/lcfit.svg?style=flat
   :target: https://anaconda.org/bioconda/lcfit
   :alt:   (downloads)
.. |docker_lcfit| image:: https://quay.io/repository/biocontainers/lcfit/status
   :target: https://quay.io/repository/biocontainers/lcfit
.. _`lcfit/tags`: https://quay.io/repository/biocontainers/lcfit?tab=tags


.. raw:: html

    <script>
        var package = "lcfit";
        var versions = ["0.5","0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lcfit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lcfit/README.html