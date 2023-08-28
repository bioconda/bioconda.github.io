:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-survtype'
.. highlight: bash

bioconductor-survtype
=====================

.. conda:recipe:: bioconductor-survtype
   :replaces_section_title:
   :noindex:

   Subtype Identification with Survival Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/survtype.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-survtype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-survtype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-survtype/meta.yaml>`_

   Subtypes are defined as groups of samples that have distinct molecular and clinical features. Genomic data can be analyzed for discovering patient subtypes\, associated with clinical data\, especially for survival information. This package is aimed to identify subtypes that are both clinically relevant and biologically meaningful.


.. conda:package:: bioconductor-survtype

   |downloads_bioconductor-survtype| |docker_bioconductor-survtype|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-clustvarsel: 
   :depends r-pheatmap: 
   :depends r-survival: 
   :depends r-survminer: 
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

      mamba install bioconductor-survtype

   and update with::

      mamba update bioconductor-survtype

  To create a new environment, run::

      mamba create --name myenvname bioconductor-survtype

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-survtype:<tag>

   (see `bioconductor-survtype/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-survtype| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-survtype.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-survtype
   :alt:   (downloads)
.. |docker_bioconductor-survtype| image:: https://quay.io/repository/biocontainers/bioconductor-survtype/status
   :target: https://quay.io/repository/biocontainers/bioconductor-survtype
.. _`bioconductor-survtype/tags`: https://quay.io/repository/biocontainers/bioconductor-survtype?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-survtype";
        var versions = ["1.16.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-survtype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-survtype/README.html