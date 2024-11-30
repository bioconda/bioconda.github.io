:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cartools'
.. highlight: bash

cartools
========

.. conda:recipe:: cartools
   :replaces_section_title:
   :noindex:

   Coverage Analysis Report tool CAR tool is a tool for assessment of per base quality of NGS data.

   :homepage: https://github.com/clinical-genomics-uppsala/CARtool
   :documentation: https://github.com/clinical-genomics-uppsala/CARtool/blob/master/README.md
   
   :license: MIT / MIT
   :recipe: /`cartools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cartools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cartools/meta.yaml>`_

   


.. conda:package:: cartools

   |downloads_cartools| |docker_cartools|

   :versions:
      
      

      ``1.1.3-0``

      

   
   :depends python: 
   :depends samtools: 
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

      mamba install cartools

   and update with::

      mamba update cartools

  To create a new environment, run::

      mamba create --name myenvname cartools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cartools:<tag>

   (see `cartools/tags`_ for valid values for ``<tag>``)


.. |downloads_cartools| image:: https://img.shields.io/conda/dn/bioconda/cartools.svg?style=flat
   :target: https://anaconda.org/bioconda/cartools
   :alt:   (downloads)
.. |docker_cartools| image:: https://quay.io/repository/biocontainers/cartools/status
   :target: https://quay.io/repository/biocontainers/cartools
.. _`cartools/tags`: https://quay.io/repository/biocontainers/cartools?tab=tags


.. raw:: html

    <script>
        var package = "cartools";
        var versions = ["1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cartools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cartools/README.html