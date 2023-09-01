:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'islandpath'
.. highlight: bash

islandpath
==========

.. conda:recipe:: islandpath
   :replaces_section_title:
   :noindex:

   IslandPath\-DIMOB is a standalone software to predict genomic islands in bacterial and archaeal genomes based on the presence of dinucleotide biases and mobility genes.

   Genomic islands \(GIs\) are clusters of genes in prokaryotic genomes of probable horizontal origin. GIs are disproportionately associated with microbial adaptations of medical or environmental interest.

   :homepage: http://www.pathogenomics.sfu.ca/islandpath/
   :license: GNU General Public License v3.0
   :recipe: /`islandpath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/islandpath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/islandpath/meta.yaml>`_

   


.. conda:package:: islandpath

   |downloads_islandpath| |docker_islandpath|

   :versions:
      
      

      ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends hmmer: 
   :depends perl: 
   :depends perl-bioperl: ``>=1.7.2``
   :depends perl-config-simple: 
   :depends perl-data-dumper: 
   :depends perl-log-log4perl: 
   :depends perl-moose: 
   :depends perl-moosex-singleton: 
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

      mamba install islandpath

   and update with::

      mamba update islandpath

  To create a new environment, run::

      mamba create --name myenvname islandpath

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/islandpath:<tag>

   (see `islandpath/tags`_ for valid values for ``<tag>``)


.. |downloads_islandpath| image:: https://img.shields.io/conda/dn/bioconda/islandpath.svg?style=flat
   :target: https://anaconda.org/bioconda/islandpath
   :alt:   (downloads)
.. |docker_islandpath| image:: https://quay.io/repository/biocontainers/islandpath/status
   :target: https://quay.io/repository/biocontainers/islandpath
.. _`islandpath/tags`: https://quay.io/repository/biocontainers/islandpath?tab=tags


.. raw:: html

    <script>
        var package = "islandpath";
        var versions = ["1.0.6","1.0.5","1.0.4","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/islandpath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/islandpath/README.html