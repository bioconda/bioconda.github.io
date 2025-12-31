:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spacerextractor'
.. highlight: bash

spacerextractor
===============

.. conda:recipe:: spacerextractor
   :replaces_section_title:
   :noindex:

   Extract CRISPR spacers from metagenome short reads.

   :homepage: https://code.jgi.doe.gov/SRoux/spacerextractor
   :documentation: https://code.jgi.doe.gov/SRoux/spacerextractor/-/blob/0.9.8/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`spacerextractor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacerextractor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacerextractor/meta.yaml>`_

   


.. conda:package:: spacerextractor

   |downloads_spacerextractor| |docker_spacerextractor|

   :versions:
      
      

      ``0.9.8-0``,  ``0.9.7-0``,  ``0.9.6-0``,  ``0.9.5-0``

      

   
   :depends bbmap: ``>=39.06,<39.07``
   :depends biopython: ``>=1.78,<2``
   :depends blast: ``>=2,<3``
   :depends bowtie: ``>=1.3.1,<1.4``
   :depends cctyper: ``>=1.8,<2``
   :depends cd-hit: ``>=4.8,<4.9``
   :depends kcounter: ``>=0.1.1,<0.2``
   :depends pandas: ``>=2.0,<2.4``
   :depends polyleven: ``>=0.8,<0.9``
   :depends pyfaidx: ``>=0.8.1.3,<0.9``
   :depends python: ``>=3.8``
   :depends rich-click: ``>=1.4``
   :depends scipy: ``>=1.10,<=1.11``
   :depends seqkit: ``>=2.5,<2.6``
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

      mamba install spacerextractor

   and update with::

      mamba update spacerextractor

  To create a new environment, run::

      mamba create --name myenvname spacerextractor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spacerextractor:<tag>

   (see `spacerextractor/tags`_ for valid values for ``<tag>``)


.. |downloads_spacerextractor| image:: https://img.shields.io/conda/dn/bioconda/spacerextractor.svg?style=flat
   :target: https://anaconda.org/bioconda/spacerextractor
   :alt:   (downloads)
.. |docker_spacerextractor| image:: https://quay.io/repository/biocontainers/spacerextractor/status
   :target: https://quay.io/repository/biocontainers/spacerextractor
.. _`spacerextractor/tags`: https://quay.io/repository/biocontainers/spacerextractor?tab=tags


.. raw:: html

    <script>
        var package = "spacerextractor";
        var versions = ["0.9.8","0.9.7","0.9.6","0.9.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spacerextractor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spacerextractor/README.html