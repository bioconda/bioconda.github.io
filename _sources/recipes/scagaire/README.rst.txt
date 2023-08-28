:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scagaire'
.. highlight: bash

scagaire
========

.. conda:recipe:: scagaire
   :replaces_section_title:
   :noindex:

   Scagaire allows you to take in gene predictions from a metagenomic sample and filter them by bacterial\/pathogenic species

   :homepage: https://github.com/quadram-institute-bioscience/scagaire
   :license: GPLv3
   :recipe: /`scagaire <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scagaire>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scagaire/meta.yaml>`_

   


.. conda:package:: scagaire

   |downloads_scagaire| |docker_scagaire|

   :versions:
      
      

      ``0.0.4-0``

      

   
   :depends biopython: ``>=1.68``
   :depends mash: 
   :depends python: ``>=3``
   :depends pyyaml: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install scagaire

   and update with::

      mamba update scagaire

  To create a new environment, run::

      mamba create --name myenvname scagaire

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scagaire:<tag>

   (see `scagaire/tags`_ for valid values for ``<tag>``)


.. |downloads_scagaire| image:: https://img.shields.io/conda/dn/bioconda/scagaire.svg?style=flat
   :target: https://anaconda.org/bioconda/scagaire
   :alt:   (downloads)
.. |docker_scagaire| image:: https://quay.io/repository/biocontainers/scagaire/status
   :target: https://quay.io/repository/biocontainers/scagaire
.. _`scagaire/tags`: https://quay.io/repository/biocontainers/scagaire?tab=tags


.. raw:: html

    <script>
        var package = "scagaire";
        var versions = ["0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scagaire/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scagaire/README.html