:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaclassifier'
.. highlight: bash

metaclassifier
==============

.. conda:recipe:: metaclassifier
   :replaces_section_title:
   :noindex:

   MetaClassifier is an integrated pipeline for classifying and quantifying DNA metabarcoding data into taxonomy groups

   :homepage: https://github.com/ewafula/MetaClassifier
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`metaclassifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaclassifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaclassifier/meta.yaml>`_

   MetaClassifier is an integrated pipeline for identifying the floral composition of honey using DNA metabarcoding to determine the plants that honey bees visit. MetaClassifier utilizes a database of marker sequences and their corresponding taxonomy lineage information to classify high\-throughput metabarcoding sample sequencing reads data into taxonomic groups and quantify taxon abundance. MetaClassifier can also be employed in other studies that utilize barcoding\, metabarcoding\, and metagenomics techniques to characterize richness\, abundance\, relatedness\, and interactions in ecological communities.


.. conda:package:: metaclassifier

   |downloads_metaclassifier| |docker_metaclassifier|

   :versions:
      
      

      ``1.0.1-0``,  ``v1.0.1-0``

      

   
   :depends numpy: ``>=1.18.1``
   :depends pandas: ``>=1.2.2``
   :depends pear: ``>=0.9.6``
   :depends python: ``>=3.7``
   :depends seqtk: ``>=1.3``
   :depends vsearch: ``>=2.15.2``
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

      mamba install metaclassifier

   and update with::

      mamba update metaclassifier

  To create a new environment, run::

      mamba create --name myenvname metaclassifier

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metaclassifier:<tag>

   (see `metaclassifier/tags`_ for valid values for ``<tag>``)


.. |downloads_metaclassifier| image:: https://img.shields.io/conda/dn/bioconda/metaclassifier.svg?style=flat
   :target: https://anaconda.org/bioconda/metaclassifier
   :alt:   (downloads)
.. |docker_metaclassifier| image:: https://quay.io/repository/biocontainers/metaclassifier/status
   :target: https://quay.io/repository/biocontainers/metaclassifier
.. _`metaclassifier/tags`: https://quay.io/repository/biocontainers/metaclassifier?tab=tags


.. raw:: html

    <script>
        var package = "metaclassifier";
        var versions = ["1.0.1","v1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaclassifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaclassifier/README.html