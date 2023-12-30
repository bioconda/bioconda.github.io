:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adverscarial'
.. highlight: bash

bioconductor-adverscarial
=========================

.. conda:recipe:: bioconductor-adverscarial
   :replaces_section_title:
   :noindex:

   adverSCarial\, generate and analyze the vulnerability of scRNA\-seq classifiers to adversarial attacks

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/adverSCarial.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-adverscarial <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adverscarial>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adverscarial/meta.yaml>`_

   adverSCarial is an R Package designed for generating and analyzing the vulnerability of scRNA\-seq classifiers to adversarial attacks. The package is versatile and provides a format for integrating any type of classifier. It offers functions for studying and generating two types of attacks\, single gene attack and max change attack. The single gene attack involves making a small modification to the input to alter the classification. The max change attack involves making a large modification to the input without changing its classification. The package provides a comprehensive solution for evaluating the robustness of scRNA\-seq classifiers against adversarial attacks.


.. conda:package:: bioconductor-adverscarial

   |downloads_bioconductor-adverscarial| |docker_bioconductor-adverscarial|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gtools: 
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

      mamba install bioconductor-adverscarial

   and update with::

      mamba update bioconductor-adverscarial

  To create a new environment, run::

      mamba create --name myenvname bioconductor-adverscarial

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-adverscarial:<tag>

   (see `bioconductor-adverscarial/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-adverscarial| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adverscarial.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adverscarial
   :alt:   (downloads)
.. |docker_bioconductor-adverscarial| image:: https://quay.io/repository/biocontainers/bioconductor-adverscarial/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adverscarial
.. _`bioconductor-adverscarial/tags`: https://quay.io/repository/biocontainers/bioconductor-adverscarial?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-adverscarial";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adverscarial/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adverscarial/README.html