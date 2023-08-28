:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biotip'
.. highlight: bash

bioconductor-biotip
===================

.. conda:recipe:: bioconductor-biotip
   :replaces_section_title:
   :noindex:

   BioTIP\: An R package for characterization of Biological Tipping\-Point

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BioTIP.html
   :license: GPL-2
   :recipe: /`bioconductor-biotip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotip/meta.yaml>`_

   Adopting tipping\-point theory to transcriptome profiles to unravel disease regulatory trajectory.


.. conda:package:: bioconductor-biotip

   |downloads_bioconductor-biotip| |docker_bioconductor-biotip|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-scran: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-psych: 
   :depends r-stringr: 
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

      mamba install bioconductor-biotip

   and update with::

      mamba update bioconductor-biotip

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biotip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biotip:<tag>

   (see `bioconductor-biotip/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biotip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biotip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biotip
   :alt:   (downloads)
.. |docker_bioconductor-biotip| image:: https://quay.io/repository/biocontainers/bioconductor-biotip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biotip
.. _`bioconductor-biotip/tags`: https://quay.io/repository/biocontainers/bioconductor-biotip?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biotip";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biotip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biotip/README.html