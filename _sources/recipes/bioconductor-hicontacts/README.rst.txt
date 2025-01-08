:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicontacts'
.. highlight: bash

bioconductor-hicontacts
=======================

.. conda:recipe:: bioconductor-hicontacts
   :replaces_section_title:
   :noindex:

   Analysing cool files in R with HiContacts

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HiContacts.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hicontacts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicontacts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicontacts/meta.yaml>`_

   HiContacts provides a collection of tools to analyse and visualize Hi\-C datasets imported in R by HiCExperiment.


.. conda:package:: bioconductor-hicontacts

   |downloads_bioconductor-hicontacts| |docker_bioconductor-hicontacts|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocio: ``>=1.16.0,<1.17.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-hicexperiment: ``>=1.6.0,<1.7.0``
   :depends bioconductor-interactionset: ``>=1.34.0,<1.35.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrastr: 
   :depends r-matrix: 
   :depends r-readr: 
   :depends r-rspectra: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-hicontacts

   and update with::

      mamba update bioconductor-hicontacts

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hicontacts

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hicontacts:<tag>

   (see `bioconductor-hicontacts/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hicontacts| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicontacts.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicontacts
   :alt:   (downloads)
.. |docker_bioconductor-hicontacts| image:: https://quay.io/repository/biocontainers/bioconductor-hicontacts/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicontacts
.. _`bioconductor-hicontacts/tags`: https://quay.io/repository/biocontainers/bioconductor-hicontacts?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hicontacts";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicontacts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicontacts/README.html