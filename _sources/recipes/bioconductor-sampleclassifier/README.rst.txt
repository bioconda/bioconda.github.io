:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sampleclassifier'
.. highlight: bash

bioconductor-sampleclassifier
=============================

.. conda:recipe:: bioconductor-sampleclassifier
   :replaces_section_title:
   :noindex:

   Sample Classifier

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/sampleClassifier.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sampleclassifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sampleclassifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sampleclassifier/meta.yaml>`_

   The package is designed to classify microarray RNA\-seq gene expression profiles.


.. conda:package:: bioconductor-sampleclassifier

   |downloads_bioconductor-sampleclassifier| |docker_bioconductor-sampleclassifier|

   :versions:
      
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.11.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      

   
   :depends bioconductor-annotate: ``>=1.80.0,<1.81.0``
   :depends bioconductor-mgfm: ``>=1.36.0,<1.37.0``
   :depends bioconductor-mgfr: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
   :depends r-ggplot2: 
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

      mamba install bioconductor-sampleclassifier

   and update with::

      mamba update bioconductor-sampleclassifier

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sampleclassifier

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sampleclassifier:<tag>

   (see `bioconductor-sampleclassifier/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sampleclassifier| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sampleclassifier.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sampleclassifier
   :alt:   (downloads)
.. |docker_bioconductor-sampleclassifier| image:: https://quay.io/repository/biocontainers/bioconductor-sampleclassifier/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sampleclassifier
.. _`bioconductor-sampleclassifier/tags`: https://quay.io/repository/biocontainers/bioconductor-sampleclassifier?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sampleclassifier";
        var versions = ["1.26.0","1.24.0","1.22.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sampleclassifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sampleclassifier/README.html