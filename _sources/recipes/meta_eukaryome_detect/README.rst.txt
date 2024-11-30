:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meta_eukaryome_detect'
.. highlight: bash

meta_eukaryome_detect
=====================

.. conda:recipe:: meta_eukaryome_detect
   :replaces_section_title:
   :noindex:

   Pathogen\, Parasite\, Eukaryote and Virus detection in metagenomes.

   :homepage: https://github.com/grp-bork/meta_eukaryome_detect
   :documentation: https://grp-bork.embl-community.io/grp-microbiome-astrology/meta_eukaryome_detect/
   
   :license: MIT / MIT License
   :recipe: /`meta_eukaryome_detect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meta_eukaryome_detect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meta_eukaryome_detect/meta.yaml>`_

   


.. conda:package:: meta_eukaryome_detect

   |downloads_meta_eukaryome_detect| |docker_meta_eukaryome_detect|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends ngless: 
   :depends pandas: ``>=2.0``
   :depends python: 
   :depends requests: 
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

      mamba install meta_eukaryome_detect

   and update with::

      mamba update meta_eukaryome_detect

  To create a new environment, run::

      mamba create --name myenvname meta_eukaryome_detect

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/meta_eukaryome_detect:<tag>

   (see `meta_eukaryome_detect/tags`_ for valid values for ``<tag>``)


.. |downloads_meta_eukaryome_detect| image:: https://img.shields.io/conda/dn/bioconda/meta_eukaryome_detect.svg?style=flat
   :target: https://anaconda.org/bioconda/meta_eukaryome_detect
   :alt:   (downloads)
.. |docker_meta_eukaryome_detect| image:: https://quay.io/repository/biocontainers/meta_eukaryome_detect/status
   :target: https://quay.io/repository/biocontainers/meta_eukaryome_detect
.. _`meta_eukaryome_detect/tags`: https://quay.io/repository/biocontainers/meta_eukaryome_detect?tab=tags


.. raw:: html

    <script>
        var package = "meta_eukaryome_detect";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meta_eukaryome_detect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meta_eukaryome_detect/README.html