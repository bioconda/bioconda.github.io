:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cov-lineages'
.. highlight: bash

cov-lineages
============

.. conda:recipe:: cov-lineages
   :replaces_section_title:
   :noindex:

   A dynamic nomenclature proposal for SARS\-CoV\-2 to assist genomic epidemiology

   :homepage: https://github.com/cov-lineages/lineages
   :license: GPL3 / GPL-3.0
   :recipe: /`cov-lineages <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cov-lineages>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cov-lineages/meta.yaml>`_

   


.. conda:package:: cov-lineages

   |downloads_cov-lineages| |docker_cov-lineages|

   :versions:
      
      

      ``2020.05.19.2-0``

      

   
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

      mamba install cov-lineages

   and update with::

      mamba update cov-lineages

  To create a new environment, run::

      mamba create --name myenvname cov-lineages

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cov-lineages:<tag>

   (see `cov-lineages/tags`_ for valid values for ``<tag>``)


.. |downloads_cov-lineages| image:: https://img.shields.io/conda/dn/bioconda/cov-lineages.svg?style=flat
   :target: https://anaconda.org/bioconda/cov-lineages
   :alt:   (downloads)
.. |docker_cov-lineages| image:: https://quay.io/repository/biocontainers/cov-lineages/status
   :target: https://quay.io/repository/biocontainers/cov-lineages
.. _`cov-lineages/tags`: https://quay.io/repository/biocontainers/cov-lineages?tab=tags


.. raw:: html

    <script>
        var package = "cov-lineages";
        var versions = ["2020.05.19.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cov-lineages/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cov-lineages/README.html