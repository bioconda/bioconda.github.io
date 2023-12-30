:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tdbasedufeadv'
.. highlight: bash

bioconductor-tdbasedufeadv
==========================

.. conda:recipe:: bioconductor-tdbasedufeadv
   :replaces_section_title:
   :noindex:

   Advanced package of tensor decomposition based unsupervised feature extraction

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TDbasedUFEadv.html
   :license: GPL-3
   :recipe: /`bioconductor-tdbasedufeadv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tdbasedufeadv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tdbasedufeadv/meta.yaml>`_

   This is an advanced version of TDbasedUFE\, which is a comprehensive package to perform Tensor decomposition based unsupervised feature extraction. In contrast to TDbasedUFE which can perform simple the feature selection and the multiomics analyses\, this package can perform more complicated and advanced features\, but they are not so popularly required. Only users who require more specific features can make use of its functionality.


.. conda:package:: bioconductor-tdbasedufeadv

   |downloads_bioconductor-tdbasedufeadv| |docker_bioconductor-tdbasedufeadv|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-dose: ``>=3.28.0,<3.29.0``
   :depends bioconductor-enrichplot: ``>=1.22.0,<1.23.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-rtcga: ``>=1.32.0,<1.33.0``
   :depends bioconductor-stringdb: ``>=2.14.0,<2.15.0``
   :depends bioconductor-tdbasedufe: ``>=1.2.0,<1.3.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-enrichr: 
   :depends r-hash: 
   :depends r-rtensor: 
   :depends r-shiny: 
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

      mamba install bioconductor-tdbasedufeadv

   and update with::

      mamba update bioconductor-tdbasedufeadv

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tdbasedufeadv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tdbasedufeadv:<tag>

   (see `bioconductor-tdbasedufeadv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tdbasedufeadv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tdbasedufeadv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tdbasedufeadv
   :alt:   (downloads)
.. |docker_bioconductor-tdbasedufeadv| image:: https://quay.io/repository/biocontainers/bioconductor-tdbasedufeadv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tdbasedufeadv
.. _`bioconductor-tdbasedufeadv/tags`: https://quay.io/repository/biocontainers/bioconductor-tdbasedufeadv?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tdbasedufeadv";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tdbasedufeadv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tdbasedufeadv/README.html