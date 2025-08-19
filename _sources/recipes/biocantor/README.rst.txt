:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biocantor'
.. highlight: bash

biocantor
=========

.. conda:recipe:: biocantor
   :replaces_section_title:
   :noindex:

   Coordinate Maniuplation and Genome Annotation Data Model

   :homepage: https://github.com/ifiddes/BioCantor
   :license: MIT / MIT
   :recipe: /`biocantor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biocantor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biocantor/meta.yaml>`_

   


.. conda:package:: biocantor

   |downloads_biocantor| |docker_biocantor|

   :versions:
      
      

      ``1.3.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends gffutils: 
   :depends marshmallow: 
   :depends marshmallow-dataclass: 
   :depends marshmallow-enum: 
   :depends marshmallow-union: 
   :depends methodtools: 
   :depends pysam: 
   :depends python: 
   :depends pyvcf3: 
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

      mamba install biocantor

   and update with::

      mamba update biocantor

  To create a new environment, run::

      mamba create --name myenvname biocantor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biocantor:<tag>

   (see `biocantor/tags`_ for valid values for ``<tag>``)


.. |downloads_biocantor| image:: https://img.shields.io/conda/dn/bioconda/biocantor.svg?style=flat
   :target: https://anaconda.org/bioconda/biocantor
   :alt:   (downloads)
.. |docker_biocantor| image:: https://quay.io/repository/biocontainers/biocantor/status
   :target: https://quay.io/repository/biocontainers/biocantor
.. _`biocantor/tags`: https://quay.io/repository/biocontainers/biocantor?tab=tags


.. raw:: html

    <script>
        var package = "biocantor";
        var versions = ["1.3.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biocantor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biocantor/README.html