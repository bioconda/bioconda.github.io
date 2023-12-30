:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plasmut'
.. highlight: bash

bioconductor-plasmut
====================

.. conda:recipe:: bioconductor-plasmut
   :replaces_section_title:
   :noindex:

   Stratifying mutations observed in cell\-free DNA and white blood cells as germline\, hematopoietic\, or somatic

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/plasmut.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-plasmut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plasmut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plasmut/meta.yaml>`_

   A Bayesian method for quantifying the liklihood that a given plasma mutation arises from clonal hematopoesis or the underlying tumor. It requires sequencing data of the mutation in plasma and white blood cells with the number of distinct and mutant reads in both tissues. We implement a Monte Carlo importance sampling method to assess the likelihood that a mutation arises from the tumor relative to non\-tumor origin.


.. conda:package:: bioconductor-plasmut

   |downloads_bioconductor-plasmut| |docker_bioconductor-plasmut|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-tibble: 
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

      mamba install bioconductor-plasmut

   and update with::

      mamba update bioconductor-plasmut

  To create a new environment, run::

      mamba create --name myenvname bioconductor-plasmut

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-plasmut:<tag>

   (see `bioconductor-plasmut/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-plasmut| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plasmut.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plasmut
   :alt:   (downloads)
.. |docker_bioconductor-plasmut| image:: https://quay.io/repository/biocontainers/bioconductor-plasmut/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plasmut
.. _`bioconductor-plasmut/tags`: https://quay.io/repository/biocontainers/bioconductor-plasmut?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-plasmut";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plasmut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plasmut/README.html