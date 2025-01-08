:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-koinar'
.. highlight: bash

bioconductor-koinar
===================

.. conda:recipe:: bioconductor-koinar
   :replaces_section_title:
   :noindex:

   KoinaR \- Remote machine learning inference using Koina

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/koinar.html
   :license: Apache License 2.0
   :recipe: /`bioconductor-koinar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-koinar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-koinar/meta.yaml>`_

   A client to simplify fetching predictions from the Koina web service. Koina is a model repository enabling the remote execution of models. Predictions are generated as a response to HTTP\/S requests\, the standard protocol used for nearly all web traffic.


.. conda:package:: bioconductor-koinar

   |downloads_bioconductor-koinar| |docker_bioconductor-koinar|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-httr: 
   :depends r-jsonlite: 
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

      mamba install bioconductor-koinar

   and update with::

      mamba update bioconductor-koinar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-koinar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-koinar:<tag>

   (see `bioconductor-koinar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-koinar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-koinar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-koinar
   :alt:   (downloads)
.. |docker_bioconductor-koinar| image:: https://quay.io/repository/biocontainers/bioconductor-koinar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-koinar
.. _`bioconductor-koinar/tags`: https://quay.io/repository/biocontainers/bioconductor-koinar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-koinar";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-koinar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-koinar/README.html