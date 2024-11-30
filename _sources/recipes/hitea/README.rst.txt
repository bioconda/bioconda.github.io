:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hitea'
.. highlight: bash

hitea
=====

.. conda:recipe:: hitea
   :replaces_section_title:
   :noindex:

   computational tool to identify trasposable element insertions using Hi\-C data

   :homepage: https://github.com/parklab/HiTea
   :license: MIT / MIT
   :recipe: /`hitea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hitea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hitea/meta.yaml>`_

   


.. conda:package:: hitea

   |downloads_hitea| |docker_hitea|

   :versions:
      
      

      ``0.1.5-1``,  ``0.1.5-0``,  ``0.1.4-0``

      

   
   :depends bedtools: ``2.27.1``
   :depends bioconductor-enrichedheatmap: ``>=1.16.0``
   :depends bioconductor-genomicranges: ``>=1.38.0``
   :depends bwa: ``>=0.7.17``
   :depends pairtools: ``0.3.0.*``
   :depends pandoc: 
   :depends parallel: 
   :depends perl: ``>=5.24``
   :depends python: 
   :depends r-base: ``>=3.5.0``
   :depends r-circlize: ``>=0.4.8``
   :depends r-data.table: ``>=1.12.8``
   :depends r-dt: ``>=0.13``
   :depends r-ggplot2: ``>=3.3.0``
   :depends r-kableextra: 
   :depends r-kernsmooth: ``>=2.23_17``
   :depends r-knitr: ``>=1.28``
   :depends r-mass: ``>=7.3``
   :depends r-rcolorbrewer: ``>=1.1``
   :depends r-rmarkdown: ``>=2.1``
   :depends r-xtable: ``>=1.8``
   :depends samtools: ``>=1.10``
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

      mamba install hitea

   and update with::

      mamba update hitea

  To create a new environment, run::

      mamba create --name myenvname hitea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hitea:<tag>

   (see `hitea/tags`_ for valid values for ``<tag>``)


.. |downloads_hitea| image:: https://img.shields.io/conda/dn/bioconda/hitea.svg?style=flat
   :target: https://anaconda.org/bioconda/hitea
   :alt:   (downloads)
.. |docker_hitea| image:: https://quay.io/repository/biocontainers/hitea/status
   :target: https://quay.io/repository/biocontainers/hitea
.. _`hitea/tags`: https://quay.io/repository/biocontainers/hitea?tab=tags


.. raw:: html

    <script>
        var package = "hitea";
        var versions = ["0.1.5","0.1.5","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hitea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hitea/README.html