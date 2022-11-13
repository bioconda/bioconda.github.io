:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hdo.db'
.. highlight: bash

bioconductor-hdo.db
===================

.. conda:recipe:: bioconductor-hdo.db
   :replaces_section_title:
   :noindex:

   A set of annotation maps describing the entire Human Disease Ontology

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/HDO.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hdo.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdo.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdo.db/meta.yaml>`_

   A set of annotation maps describing the entire Human Disease Ontology assembled using data from DO. Its annotation data comes from https\:\/\/github.com\/DiseaseOntology\/HumanDiseaseOntology\/tree\/main\/src\/ontology.


.. conda:package:: bioconductor-hdo.db

   |downloads_bioconductor-hdo.db| |docker_bioconductor-hdo.db|

   :versions:
      
      

      ``0.99.1-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221102``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hdo.db

   and update with::

      conda update bioconductor-hdo.db

   or use the docker container::

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
        var versions = ["0.99.1"];
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