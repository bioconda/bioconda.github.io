:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lotus3'
.. highlight: bash

lotus3
======

.. conda:recipe:: lotus3
   :replaces_section_title:
   :noindex:

   LotuS3 is a lightweight amplicon sequencing pipeline supporting 16S\/18S\/ITS

   :homepage: https://lotus3.earlham.ac.uk/
   :developer docs: https://github.com/hildebra/LotuS3/
   :license: GPL-3.0-or-later
   :recipe: /`lotus3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lotus3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lotus3/meta.yaml>`_
   :links: doi: :doi:`10.1186/s40168-022-01365-1`, biotools: :biotools:`lotus3`

   


.. conda:package:: lotus3

   |downloads_lotus3| |docker_lotus3|

   :versions:
      
      

      ``3.03-0``

      

   
   :depends bioconductor-dada2: 
   :depends bioconductor-phyloseq: 
   :depends blast: 
   :depends cd-hit: 
   :depends clustalo: 
   :depends fasttree: 
   :depends hmmer: ``>=3.1``
   :depends infernal: 
   :depends iqtree: 
   :depends itsx: 
   :depends lambda: ``>=3,<4``
   :depends lca: ``>=0.25``
   :depends mafft: 
   :depends minimap2: 
   :depends perl: 
   :depends perl-getopt-long: 
   :depends pigz: 
   :depends r-base: 
   :depends r-dplyr: 
   :depends rdp_classifier: 
   :depends rtk: 
   :depends sdm: ``2.18``
   :depends swarm: 
   :depends unzip: 
   :depends usearch: ``>=12.0_beta,<13``
   :depends vsearch: 
   :depends wget: 
   :depends zip: 
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

      mamba install lotus3

   and update with::

      mamba update lotus3

  To create a new environment, run::

      mamba create --name myenvname lotus3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lotus3:<tag>

   (see `lotus3/tags`_ for valid values for ``<tag>``)


.. |downloads_lotus3| image:: https://img.shields.io/conda/dn/bioconda/lotus3.svg?style=flat
   :target: https://anaconda.org/bioconda/lotus3
   :alt:   (downloads)
.. |docker_lotus3| image:: https://quay.io/repository/biocontainers/lotus3/status
   :target: https://quay.io/repository/biocontainers/lotus3
.. _`lotus3/tags`: https://quay.io/repository/biocontainers/lotus3?tab=tags


.. raw:: html

    <script>
        var package = "lotus3";
        var versions = ["3.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lotus3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lotus3/README.html