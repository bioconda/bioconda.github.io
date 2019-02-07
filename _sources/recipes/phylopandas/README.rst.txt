.. title:: Package Recipe 'phylopandas'
.. highlight: bash


phylopandas
===========

.. conda:recipe:: phylopandas
   :replaces_section_title:

   Pandas for phylogenetics

   :homepage: https://github.com/Zsailer/phylopandas
   :license: MIT / MIT
   :recipe: /`phylopandas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylopandas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylopandas/meta.yaml>`_

   


.. conda:package:: phylopandas

   |downloads_phylopandas| |docker_phylopandas|

   :versions: 0.7.2, 0.7.1, 0.1.4, 0.1.3

   :depends: :conda:package:`biopython`  :conda:package:`dendropy`  :conda:package:`pandas`  :conda:package:`pandas-flavor`  :conda:package:`python` >3 

   :required~by: |required_by_phylopandas|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylopandas

   and update with::

      conda update phylopandas

   or use the docker container::

      docker pull quay.io/repository/biocontainers/phylopandas


.. |required_by_phylopandas| conda:required_by:: phylopandas
.. |downloads_phylopandas| image:: https://img.shields.io/conda/dn/bioconda/phylopandas.svg?style=flat
   :alt:   (downloads)
.. |docker_phylopandas| image:: https://quay.io/repository/biocontainers/phylopandas/status
   :target: https://quay.io/repository/biocontainers/phylopandas







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylopandas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylopandas/README.html

