:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mtnucratio'
.. highlight: bash

mtnucratio
==========

.. conda:recipe:: mtnucratio
   :replaces_section_title:
   :noindex:

   A small tool to determine MT to Nuclear ratios for NGS data.

   :homepage: https://github.com/apeltzer/MTNucRatioCalculator
   :license: GPLv3
   :recipe: /`mtnucratio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtnucratio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtnucratio/meta.yaml>`_

   


.. conda:package:: mtnucratio

   |downloads_mtnucratio| |docker_mtnucratio|

   :versions:
      
      

      ``0.7.1-0``,  ``0.7-2``,  ``0.7-1``,  ``0.7-0``,  ``0.6-1``,  ``0.6-0``,  ``0.5-1``

      

   
   :depends openjdk: 
   :depends python: 
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

      mamba install mtnucratio

   and update with::

      mamba update mtnucratio

  To create a new environment, run::

      mamba create --name myenvname mtnucratio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mtnucratio:<tag>

   (see `mtnucratio/tags`_ for valid values for ``<tag>``)


.. |downloads_mtnucratio| image:: https://img.shields.io/conda/dn/bioconda/mtnucratio.svg?style=flat
   :target: https://anaconda.org/bioconda/mtnucratio
   :alt:   (downloads)
.. |docker_mtnucratio| image:: https://quay.io/repository/biocontainers/mtnucratio/status
   :target: https://quay.io/repository/biocontainers/mtnucratio
.. _`mtnucratio/tags`: https://quay.io/repository/biocontainers/mtnucratio?tab=tags


.. raw:: html

    <script>
        var package = "mtnucratio";
        var versions = ["0.7.1","0.7","0.7","0.7","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mtnucratio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mtnucratio/README.html