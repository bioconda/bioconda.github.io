:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dorothea'
.. highlight: bash

bioconductor-dorothea
=====================

.. conda:recipe:: bioconductor-dorothea
   :replaces_section_title:
   :noindex:

   Collection Of Human And Mouse TF Regulons

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/dorothea.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-dorothea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dorothea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dorothea/meta.yaml>`_

   DoRothEA is a gene regulatory network containing signed transcription factor \(TF\) \- target gene interactions. DoRothEA regulons\, the collection of a TF and its transcriptional targets\, were curated and collected from different types of evidence for both human and mouse. A confidence level was assigned to each TF\-target interaction based on the number of supporting evidence.


.. conda:package:: bioconductor-dorothea

   |downloads_bioconductor-dorothea| |docker_bioconductor-dorothea|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-bcellviper: ``>=1.38.0,<1.39.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-decoupler: ``>=2.8.0,<2.9.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
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

      mamba install bioconductor-dorothea

   and update with::

      mamba update bioconductor-dorothea

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dorothea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dorothea:<tag>

   (see `bioconductor-dorothea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dorothea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dorothea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dorothea
   :alt:   (downloads)
.. |docker_bioconductor-dorothea| image:: https://quay.io/repository/biocontainers/bioconductor-dorothea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dorothea
.. _`bioconductor-dorothea/tags`: https://quay.io/repository/biocontainers/bioconductor-dorothea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dorothea";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dorothea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dorothea/README.html