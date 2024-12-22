:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mpo.db'
.. highlight: bash

bioconductor-mpo.db
===================

.. conda:recipe:: bioconductor-mpo.db
   :replaces_section_title:
   :noindex:

   A set of annotation maps describing the Mouse Phenotype Ontology

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/MPO.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mpo.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mpo.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mpo.db/meta.yaml>`_

   We have developed the human disease ontology R package HDO.db\, which provides the semantic relationship between human diseases. Relying on the DOSE and GOSemSim packages we developed\, we can carry out disease enrichment and semantic similarity analyses. Many biological studies are achieved through mouse models\, and a large number of data indicate the association between genotypes and phenotypes or diseases.  The study of model organisms can be transformed into useful knowledge about normal human biology and disease to facilitate treatment and early screening for diseases. Organism\-specific genotype\-phenotypic associations can be applied to cross\-species phenotypic studies to clarify previously unknown phenotypic connections in other species. Using the same principle to diseases can identify genetic associations and even help to identify disease associations that are not obvious. Therefore\, as a supplement to HDO.db and DOSE\, we developed mouse phenotypic ontology R package MPO.db.


.. conda:package:: bioconductor-mpo.db

   |downloads_bioconductor-mpo.db| |docker_bioconductor-mpo.db|

   :versions:
      
      

      ``0.99.8-0``,  ``0.99.7-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-mpo.db

   and update with::

      mamba update bioconductor-mpo.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mpo.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mpo.db:<tag>

   (see `bioconductor-mpo.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mpo.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mpo.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mpo.db
   :alt:   (downloads)
.. |docker_bioconductor-mpo.db| image:: https://quay.io/repository/biocontainers/bioconductor-mpo.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mpo.db
.. _`bioconductor-mpo.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mpo.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mpo.db";
        var versions = ["0.99.8","0.99.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mpo.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mpo.db/README.html