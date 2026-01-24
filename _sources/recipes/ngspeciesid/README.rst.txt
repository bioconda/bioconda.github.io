:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngspeciesid'
.. highlight: bash

ngspeciesid
===========

.. conda:recipe:: ngspeciesid
   :replaces_section_title:
   :noindex:

   Reference\-free clustering and consensus forming of long\-read amplicon sequencing

   :homepage: https://github.com/ksahlin/NGSpeciesID
   :license: GPL-3.0-or-later
   :recipe: /`ngspeciesid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngspeciesid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngspeciesid/meta.yaml>`_

   NGSpeciesID is a tool for clustering and consensus forming of long\-read
   amplicon sequencing data \(has been used with both PacBio and Oxford Nanopore
   data\). The repository is a modified version of isONclust\, where consensus\,
   primer\-removal\, and polishing feautures have been added.


.. conda:package:: ngspeciesid

   |downloads_ngspeciesid| |docker_ngspeciesid|

   :versions:
      
      

      ``0.3.1-0``

      

   
   :depends edlib: ``>=1.1.2``
   :depends medaka: ``>=2.0.1``
   :depends minimap2: 
   :depends parasail-python: ``>=1.2.4``
   :depends python: ``>=3.10``
   :depends racon: 
   :depends samtools: 
   :depends spoa: 
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

      mamba install ngspeciesid

   and update with::

      mamba update ngspeciesid

  To create a new environment, run::

      mamba create --name myenvname ngspeciesid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngspeciesid:<tag>

   (see `ngspeciesid/tags`_ for valid values for ``<tag>``)


.. |downloads_ngspeciesid| image:: https://img.shields.io/conda/dn/bioconda/ngspeciesid.svg?style=flat
   :target: https://anaconda.org/bioconda/ngspeciesid
   :alt:   (downloads)
.. |docker_ngspeciesid| image:: https://quay.io/repository/biocontainers/ngspeciesid/status
   :target: https://quay.io/repository/biocontainers/ngspeciesid
.. _`ngspeciesid/tags`: https://quay.io/repository/biocontainers/ngspeciesid?tab=tags


.. raw:: html

    <script>
        var package = "ngspeciesid";
        var versions = ["0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngspeciesid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngspeciesid/README.html