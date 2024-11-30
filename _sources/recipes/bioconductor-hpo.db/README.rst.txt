:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hpo.db'
.. highlight: bash

bioconductor-hpo.db
===================

.. conda:recipe:: bioconductor-hpo.db
   :replaces_section_title:
   :noindex:

   A set of annotation maps describing the entire Human Phenotype Ontology

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/HPO.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hpo.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpo.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpo.db/meta.yaml>`_

   Human Phenotype Ontology \(HPO\) was developed to create a consistent description of gene products with disease perspectives\, and is essential for supporting functional genomics in disease context. Accurate disease descriptions can discover new relationships between genes and disease\, and new functions for previous uncharacteried genes and alleles.We have developed the \[DOSE\]\(https\:\/\/bioconductor.org\/packages\/DOSE\/\) package for semantic similarity analysis and disease enrichment analysis\, and \`DOSE\` import an Bioconductor package \'DO.db\' to get the relationship\(such as parent and child\) between MPO terms. But \`DO.db\` hasn\'t been updated for years\, and a lot of semantic information is \[missing\]\(https\:\/\/github.com\/YuLab\-SMU\/DOSE\/issues\/57\). So we developed the new package \`HPO.db\` for Human Human Phenotype Ontology annotation.


.. conda:package:: bioconductor-hpo.db

   |downloads_bioconductor-hpo.db| |docker_bioconductor-hpo.db|

   :versions:
      
      

      ``0.99.2-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
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

      mamba install bioconductor-hpo.db

   and update with::

      mamba update bioconductor-hpo.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hpo.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hpo.db:<tag>

   (see `bioconductor-hpo.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hpo.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hpo.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hpo.db
   :alt:   (downloads)
.. |docker_bioconductor-hpo.db| image:: https://quay.io/repository/biocontainers/bioconductor-hpo.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hpo.db
.. _`bioconductor-hpo.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hpo.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hpo.db";
        var versions = ["0.99.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hpo.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hpo.db/README.html