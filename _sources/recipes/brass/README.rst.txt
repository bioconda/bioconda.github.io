:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'brass'
.. highlight: bash

brass
=====

.. conda:recipe:: brass
   :replaces_section_title:
   :noindex:

   BRASS analyses one or more related BAM files of paired\-end sequencing to determine potential rearrangement breakpoints.

   :homepage: https://github.com/cancerit/BRASS
   :license: AGPL-3-0
   :recipe: /`brass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brass/meta.yaml>`_

   


.. conda:package:: brass

   |downloads_brass| |docker_brass|

   :versions:
      
      

      ``5.1.6-7``,  ``5.1.6-2``

      

   
   :depends bedtools: 
   :depends blat: 
   :depends cansam: 
   :depends exonerate: 
   :depends libgcc: 
   :depends perl-bio-db-hts: 
   :depends perl-bio-featureio: 
   :depends perl-bioperl-core: ``==1.6.924``
   :depends perl-capture-tiny: 
   :depends perl-file-sharedir: 
   :depends perl-file-sharedir-install: 
   :depends perl-graph-readwrite: 
   :depends perl-grass: 
   :depends perl-math-combinatorics: 
   :depends perl-number-format: 
   :depends perl-pcap: 
   :depends perl-statistics-basic: 
   :depends perl-text-diff: 
   :depends velvet: 
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

      mamba install brass

   and update with::

      mamba update brass

  To create a new environment, run::

      mamba create --name myenvname brass

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/brass:<tag>

   (see `brass/tags`_ for valid values for ``<tag>``)


.. |downloads_brass| image:: https://img.shields.io/conda/dn/bioconda/brass.svg?style=flat
   :target: https://anaconda.org/bioconda/brass
   :alt:   (downloads)
.. |docker_brass| image:: https://quay.io/repository/biocontainers/brass/status
   :target: https://quay.io/repository/biocontainers/brass
.. _`brass/tags`: https://quay.io/repository/biocontainers/brass?tab=tags


.. raw:: html

    <script>
        var package = "brass";
        var versions = ["5.1.6","5.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/brass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/brass/README.html