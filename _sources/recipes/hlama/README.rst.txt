.. title:: Package Recipe 'hlama'
.. highlight: bash


hlama
=====

.. conda:recipe:: hlama
   :replaces_section_title:

   Simple matching of HTS samples based on HLA typing

   :homepage: https://github.com/bihealth/hlama
   :license: MIT
   :recipe: /`hlama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hlama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hlama/meta.yaml>`_

   


.. conda:package:: hlama

   |downloads_hlama| |docker_hlama|

   :versions: 3.0.1, 0.3.1, 0.3

   :depends: :conda:package:`optitype` >=1.2 :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`snakemake` 3.7.1 

   :required~by: |required_by_hlama|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hlama

   and update with::

      conda update hlama

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hlama


.. |required_by_hlama| conda:required_by:: hlama
.. |downloads_hlama| image:: https://img.shields.io/conda/dn/bioconda/hlama.svg?style=flat
   :alt:   (downloads)
.. |docker_hlama| image:: https://quay.io/repository/biocontainers/hlama/status
   :target: https://quay.io/repository/biocontainers/hlama







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hlama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hlama/README.html

