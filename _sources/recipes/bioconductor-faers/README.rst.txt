:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-faers'
.. highlight: bash

bioconductor-faers
==================

.. conda:recipe:: bioconductor-faers
   :replaces_section_title:
   :noindex:

   R interface for FDA Adverse Event Reporting System

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/faers.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-faers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-faers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-faers/meta.yaml>`_

   The FDA Adverse Event Reporting System \(FAERS\) is a database used for the spontaneous reporting of adverse events and medication errors related to human drugs and therapeutic biological products. faers pacakge serves as the interface between the FAERS database and R. Furthermore\, faers pacakge offers a standardized approach for performing pharmacovigilance analysis.


.. conda:package:: bioconductor-faers

   |downloads_bioconductor-faers| |docker_bioconductor-faers|

   :versions:
      
      

      

      

   
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

      mamba install bioconductor-faers

   and update with::

      mamba update bioconductor-faers

  To create a new environment, run::

      mamba create --name myenvname bioconductor-faers

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-faers:<tag>

   (see `bioconductor-faers/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-faers| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-faers.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-faers
   :alt:   (downloads)
.. |docker_bioconductor-faers| image:: https://quay.io/repository/biocontainers/bioconductor-faers/status
   :target: https://quay.io/repository/biocontainers/bioconductor-faers
.. _`bioconductor-faers/tags`: https://quay.io/repository/biocontainers/bioconductor-faers?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-faers";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-faers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-faers/README.html