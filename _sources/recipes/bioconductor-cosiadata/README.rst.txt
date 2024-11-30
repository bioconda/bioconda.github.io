:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cosiadata'
.. highlight: bash

bioconductor-cosiadata
======================

.. conda:recipe:: bioconductor-cosiadata
   :replaces_section_title:
   :noindex:

   VST normalized RNA\-Sequencing data with annotations for multiple species samples from Bgee

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/CoSIAdata.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-cosiadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosiadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosiadata/meta.yaml>`_

   Variance Stabilized Transformation of Read Counts derived from Bgee RNA\-Seq Expression Data. Expression Data includes annotations and is across 6 species \(Homo sapiens\, Mus musculus\, Rattus norvegicus\, Danio rerio\, Drosophila melanogaster\, and Caenorhabditis elegans\) and across more than 132 tissues. The data is represented as a RData files and is available in ExperimentHub.


.. conda:package:: bioconductor-cosiadata

   |downloads_bioconductor-cosiadata| |docker_bioconductor-cosiadata|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-cosiadata

   and update with::

      mamba update bioconductor-cosiadata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cosiadata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cosiadata:<tag>

   (see `bioconductor-cosiadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cosiadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cosiadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cosiadata
   :alt:   (downloads)
.. |docker_bioconductor-cosiadata| image:: https://quay.io/repository/biocontainers/bioconductor-cosiadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cosiadata
.. _`bioconductor-cosiadata/tags`: https://quay.io/repository/biocontainers/bioconductor-cosiadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cosiadata";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cosiadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cosiadata/README.html