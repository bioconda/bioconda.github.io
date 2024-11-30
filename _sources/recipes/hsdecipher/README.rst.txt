:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hsdecipher'
.. highlight: bash

hsdecipher
==========

.. conda:recipe:: hsdecipher
   :replaces_section_title:
   :noindex:

   Pipeline for the downstream analysis of highly similar duplicate genes

   :homepage: https://github.com/zx0223winner/HSDecipher
   :license: GPL-3.0-or-later
   :recipe: /`hsdecipher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hsdecipher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hsdecipher/meta.yaml>`_

   Many tools have been developed to measure the degree of similarity between gene duplicates within and between species.Here\, we present HSDecipher\, a bioinformatics pipeline to assist users in the analysis and visualization of highly similar duplicate genes \(HSDs\). We describe the steps for analysis of HSDs statistics\, expanding HSD gene set\, and visualizing the results of comparative genomic analyses. HSDecipher represents a useful tool for researchers exploring the evolution of duplicate genes in select eukaryotic species.


.. conda:package:: hsdecipher

   |downloads_hsdecipher| |docker_hsdecipher|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends matplotlib-base: 
   :depends pandas: 
   :depends python: ``>=3.7``
   :depends seaborn: 
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

      mamba install hsdecipher

   and update with::

      mamba update hsdecipher

  To create a new environment, run::

      mamba create --name myenvname hsdecipher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hsdecipher:<tag>

   (see `hsdecipher/tags`_ for valid values for ``<tag>``)


.. |downloads_hsdecipher| image:: https://img.shields.io/conda/dn/bioconda/hsdecipher.svg?style=flat
   :target: https://anaconda.org/bioconda/hsdecipher
   :alt:   (downloads)
.. |docker_hsdecipher| image:: https://quay.io/repository/biocontainers/hsdecipher/status
   :target: https://quay.io/repository/biocontainers/hsdecipher
.. _`hsdecipher/tags`: https://quay.io/repository/biocontainers/hsdecipher?tab=tags


.. raw:: html

    <script>
        var package = "hsdecipher";
        var versions = ["1.1.2","1.1.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hsdecipher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hsdecipher/README.html