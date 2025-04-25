:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasmidcommunity'
.. highlight: bash

plasmidcommunity
================

.. conda:recipe:: plasmidcommunity
   :replaces_section_title:
   :noindex:

   Klebsiella pneumoniae Plasmid Classification\, Assignment\, and Transmission Risk Prediction

   :homepage: https://github.com/wuxinmiao5/PlasmidCommunity
   :documentation: https://github.com/wuxinmiao5/PlasmidCommunity/blob/main/README.md
   
   :license: GPL-3.0
   :recipe: /`plasmidcommunity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidcommunity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidcommunity/meta.yaml>`_

   


.. conda:package:: plasmidcommunity

   |downloads_plasmidcommunity| |docker_plasmidcommunity|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends bash: 
   :depends bioconductor-biostrings: ``>=2.70.3``
   :depends blast: ``>=2.1.2``
   :depends fastani: ``>=1.33``
   :depends prodigal: ``>=2.6.3``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-readr: ``>=2.1.5``
   :depends r-readxl: ``>=1.4.3``
   :depends r-seqinr: ``>=4.2.36``
   :depends r-tidyverse: ``>=2.0.0``
   :depends util-linux: 
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

      mamba install plasmidcommunity

   and update with::

      mamba update plasmidcommunity

  To create a new environment, run::

      mamba create --name myenvname plasmidcommunity

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plasmidcommunity:<tag>

   (see `plasmidcommunity/tags`_ for valid values for ``<tag>``)


.. |downloads_plasmidcommunity| image:: https://img.shields.io/conda/dn/bioconda/plasmidcommunity.svg?style=flat
   :target: https://anaconda.org/bioconda/plasmidcommunity
   :alt:   (downloads)
.. |docker_plasmidcommunity| image:: https://quay.io/repository/biocontainers/plasmidcommunity/status
   :target: https://quay.io/repository/biocontainers/plasmidcommunity
.. _`plasmidcommunity/tags`: https://quay.io/repository/biocontainers/plasmidcommunity?tab=tags


.. raw:: html

    <script>
        var package = "plasmidcommunity";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasmidcommunity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasmidcommunity/README.html