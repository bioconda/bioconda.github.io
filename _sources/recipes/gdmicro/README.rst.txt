:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gdmicro'
.. highlight: bash

gdmicro
=======

.. conda:recipe:: gdmicro
   :replaces_section_title:
   :noindex:

   GDmicro \- Use GCN and Deep adaptation network to classify host disease status based on human gut microbiome data

   :homepage: https://github.com/liaoherui/GDmicro
   :license: MIT
   :recipe: /`gdmicro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gdmicro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gdmicro/meta.yaml>`_

   


.. conda:package:: gdmicro

   |downloads_gdmicro| |docker_gdmicro|

   :versions:
      
      

      ``1.0.5-0``

      

   
   :depends bioconductor-siamcat: ``1.6.0``
   :depends ipython: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``3.7.3``
   :depends pytorch: ``1.12.0``
   :depends r-base: ``3.6.1``
   :depends r-tidyverse: ``1.2.1``
   :depends r-yaml: ``2.2.1``
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install gdmicro

   and update with::

      mamba update gdmicro

  To create a new environment, run::

      mamba create --name myenvname gdmicro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gdmicro:<tag>

   (see `gdmicro/tags`_ for valid values for ``<tag>``)


.. |downloads_gdmicro| image:: https://img.shields.io/conda/dn/bioconda/gdmicro.svg?style=flat
   :target: https://anaconda.org/bioconda/gdmicro
   :alt:   (downloads)
.. |docker_gdmicro| image:: https://quay.io/repository/biocontainers/gdmicro/status
   :target: https://quay.io/repository/biocontainers/gdmicro
.. _`gdmicro/tags`: https://quay.io/repository/biocontainers/gdmicro?tab=tags


.. raw:: html

    <script>
        var package = "gdmicro";
        var versions = ["1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gdmicro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gdmicro/README.html