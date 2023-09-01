:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gemini'
.. highlight: bash

bioconductor-gemini
===================

.. conda:recipe:: bioconductor-gemini
   :replaces_section_title:
   :noindex:

   GEMINI\: Variational inference approach to infer genetic interactions from pairwise CRISPR screens

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/gemini.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-gemini <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gemini>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gemini/meta.yaml>`_

   GEMINI uses log\-fold changes to model sample\-dependent and independent effects\, and uses a variational Bayes approach to infer these effects. The inferred effects are used to score and identify genetic interactions\, such as lethality and recovery. More details can be found in Zamanighomi et al. 2019 \(in press\).


.. conda:package:: bioconductor-gemini

   |downloads_bioconductor-gemini| |docker_bioconductor-gemini|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-mixtools: 
   :depends r-pbmcapply: 
   :depends r-scales: 
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

      mamba install bioconductor-gemini

   and update with::

      mamba update bioconductor-gemini

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gemini

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gemini:<tag>

   (see `bioconductor-gemini/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gemini| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gemini.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gemini
   :alt:   (downloads)
.. |docker_bioconductor-gemini| image:: https://quay.io/repository/biocontainers/bioconductor-gemini/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gemini
.. _`bioconductor-gemini/tags`: https://quay.io/repository/biocontainers/bioconductor-gemini?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gemini";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gemini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gemini/README.html