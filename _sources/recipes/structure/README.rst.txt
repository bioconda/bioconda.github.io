:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'structure'
.. highlight: bash

structure
=========

.. conda:recipe:: structure
   :replaces_section_title:
   :noindex:

   The program structure is a free software package for using multi\-locus genotype data to investigate population structure. Its uses include inferring the presence of distinct populations\, assigning individuals to populations\, studying hybrid zones\, identifying migrants and admixed individuals\, and estimating population allele frequencies in situations where many individuals are migrants or admixed. It can be applied to most of the commonly\-used genetic markers\, including SNPS\, microsatellites\, RFLPs and AFLPs.

   :homepage: https://web.stanford.edu/group/pritchardlab/structure.html
   :license: MIT
   :recipe: /`structure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/structure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/structure/meta.yaml>`_
   :links: biotools: :biotools:`Structure`

   


.. conda:package:: structure

   |downloads_structure| |docker_structure|

   :versions:
      
      

      ``2.3.4-7``,  ``2.3.4-6``,  ``2.3.4-5``,  ``2.3.4-4``,  ``2.3.4-3``,  ``2.3.4-2``,  ``2.3.4-1``,  ``2.3.4-0``

      

   
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

      mamba install structure

   and update with::

      mamba update structure

  To create a new environment, run::

      mamba create --name myenvname structure

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/structure:<tag>

   (see `structure/tags`_ for valid values for ``<tag>``)


.. |downloads_structure| image:: https://img.shields.io/conda/dn/bioconda/structure.svg?style=flat
   :target: https://anaconda.org/bioconda/structure
   :alt:   (downloads)
.. |docker_structure| image:: https://quay.io/repository/biocontainers/structure/status
   :target: https://quay.io/repository/biocontainers/structure
.. _`structure/tags`: https://quay.io/repository/biocontainers/structure?tab=tags


.. raw:: html

    <script>
        var package = "structure";
        var versions = ["2.3.4","2.3.4","2.3.4","2.3.4","2.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/structure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/structure/README.html