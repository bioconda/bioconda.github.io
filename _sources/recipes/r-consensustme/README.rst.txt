:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-consensustme'
.. highlight: bash

r-consensustme
==============

.. conda:recipe:: r-consensustme
   :replaces_section_title:
   :noindex:

   ConsensusTME is a consensus based approach to generating cancer specific gene sets for multiple cell types found within the tumour microenvironment. This package allows access to these genesets and provides a wrapper for using these gene sets with various statistical frameworks to generate normalised enrichment scores. These can be used to identify relative quantities of cell types across multiple samples.

   :homepage: https://github.com/cansysbio/ConsensusTME
   :license: GPL / GPL-3
   :recipe: /`r-consensustme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-consensustme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-consensustme/meta.yaml>`_
   :links: doi: :doi:`10.1158/0008-5472.CAN-18-3560`

   


.. conda:package:: r-consensustme

   |downloads_r-consensustme| |docker_r-consensustme|

   :versions:
      
      

      ``0.0.1.9000-2``,  ``0.0.1.9000-1``,  ``0.0.1.9000-0``

      

   
   :depends bioconductor-gseabase: 
   :depends bioconductor-gsva: 
   :depends bioconductor-singscore: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install r-consensustme

   and update with::

      mamba update r-consensustme

  To create a new environment, run::

      mamba create --name myenvname r-consensustme

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-consensustme:<tag>

   (see `r-consensustme/tags`_ for valid values for ``<tag>``)


.. |downloads_r-consensustme| image:: https://img.shields.io/conda/dn/bioconda/r-consensustme.svg?style=flat
   :target: https://anaconda.org/bioconda/r-consensustme
   :alt:   (downloads)
.. |docker_r-consensustme| image:: https://quay.io/repository/biocontainers/r-consensustme/status
   :target: https://quay.io/repository/biocontainers/r-consensustme
.. _`r-consensustme/tags`: https://quay.io/repository/biocontainers/r-consensustme?tab=tags


.. raw:: html

    <script>
        var package = "r-consensustme";
        var versions = ["0.0.1.9000","0.0.1.9000","0.0.1.9000"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-consensustme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-consensustme/README.html