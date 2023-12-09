:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hdo.db'
.. highlight: bash

bioconductor-hdo.db
===================

.. conda:recipe:: bioconductor-hdo.db
   :replaces_section_title:
   :noindex:

   A set of annotation maps describing the entire Human Disease Ontology

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/HDO.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hdo.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdo.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdo.db/meta.yaml>`_

   A set of annotation maps describing the entire Human Disease Ontology assembled using data from DO. Its annotation data comes from https\:\/\/github.com\/DiseaseOntology\/HumanDiseaseOntology\/tree\/main\/src\/ontology.


.. conda:package:: bioconductor-hdo.db

   |downloads_bioconductor-hdo.db| |docker_bioconductor-hdo.db|

   :versions:
      
      

      ``0.99.1-2``,  ``0.99.1-1``,  ``0.99.1-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-hdo.db

   and update with::

      mamba update bioconductor-hdo.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hdo.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hdo.db:<tag>

   (see `bioconductor-hdo.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hdo.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hdo.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hdo.db
   :alt:   (downloads)
.. |docker_bioconductor-hdo.db| image:: https://quay.io/repository/biocontainers/bioconductor-hdo.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hdo.db
.. _`bioconductor-hdo.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hdo.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hdo.db";
        var versions = ["0.99.1","0.99.1","0.99.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hdo.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hdo.db/README.html