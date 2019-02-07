.. title:: Package Recipe 'airr'
.. highlight: bash


airr
====

.. conda:recipe:: airr
   :replaces_section_title:

   AIRR Community Data Representation Standard reference library for antibody and TCR sequencing data. Citations\: AIRR standards \<doi\:10.5281\/zenodo.1185414\>.

   :homepage: http://docs.airr-community.org
   :license: CC / CC BY 4.0
   :recipe: /`airr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/airr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/airr/meta.yaml>`_

   


.. conda:package:: airr

   |downloads_airr| |docker_airr|

   :versions: 1.2.1

   :depends: :conda:package:`pandas` >=0.18.0 :conda:package:`python`  :conda:package:`pyyaml` >=3.12 :conda:package:`setuptools` >=2.0 :conda:package:`yamlordereddictloader` >=0.4.0 

   :required~by: |required_by_airr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install airr

   and update with::

      conda update airr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/airr


.. |required_by_airr| conda:required_by:: airr
.. |downloads_airr| image:: https://img.shields.io/conda/dn/bioconda/airr.svg?style=flat
   :alt:   (downloads)
.. |docker_airr| image:: https://quay.io/repository/biocontainers/airr/status
   :target: https://quay.io/repository/biocontainers/airr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/airr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/airr/README.html

