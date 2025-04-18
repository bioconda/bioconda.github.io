:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rsweep'
.. highlight: bash

bioconductor-rsweep
===================

.. conda:recipe:: bioconductor-rsweep
   :replaces_section_title:
   :noindex:

   Spaced Words Projection \(SWeeP\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rSWeeP.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rsweep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsweep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsweep/meta.yaml>`_

   \"Spaced Words Projection \(SWeeP\)\" is a method for representing biological sequences using vectors preserving inter\-sequence comparability.


.. conda:package:: bioconductor-rsweep

   |downloads_bioconductor-rsweep| |docker_bioconductor-rsweep|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-stringi: 
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

      mamba install bioconductor-rsweep

   and update with::

      mamba update bioconductor-rsweep

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rsweep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rsweep:<tag>

   (see `bioconductor-rsweep/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rsweep| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rsweep.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rsweep
   :alt:   (downloads)
.. |docker_bioconductor-rsweep| image:: https://quay.io/repository/biocontainers/bioconductor-rsweep/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rsweep
.. _`bioconductor-rsweep/tags`: https://quay.io/repository/biocontainers/bioconductor-rsweep?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rsweep";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rsweep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rsweep/README.html