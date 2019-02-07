.. title:: Package Recipe 'cannoli'
.. highlight: bash


cannoli
=======

.. conda:recipe:: cannoli
   :replaces_section_title:

   Big Data Genomics ADAM Pipe API wrappers for bioinformatics tools

   :homepage: https://github.com/bigdatagenomics/cannoli
   :license: Apache 2
   :recipe: /`cannoli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cannoli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cannoli/meta.yaml>`_

   


.. conda:package:: cannoli

   |downloads_cannoli| |docker_cannoli|

   :versions: 0.2.0

   :depends: :conda:package:`openjdk` >=8,<9 :conda:package:`pyspark`  

   :required~by: |required_by_cannoli|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cannoli

   and update with::

      conda update cannoli

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cannoli


.. |required_by_cannoli| conda:required_by:: cannoli
.. |downloads_cannoli| image:: https://img.shields.io/conda/dn/bioconda/cannoli.svg?style=flat
   :alt:   (downloads)
.. |docker_cannoli| image:: https://quay.io/repository/biocontainers/cannoli/status
   :target: https://quay.io/repository/biocontainers/cannoli







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cannoli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cannoli/README.html

