.. title:: Package Recipe 'genomepy'
.. highlight: bash


genomepy
========

.. conda:recipe:: genomepy
   :replaces_section_title:

   Download genomes the easy way.

   :homepage: https://github.com/simonvh/genomepy
   :license: MIT / MIT License
   :recipe: /`genomepy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomepy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomepy/meta.yaml>`_

   


.. conda:package:: genomepy

   |downloads_genomepy| |docker_genomepy|

   :versions: 0.5.2, 0.5.1, 0.5.0, 0.4.0, 0.3.1

   :depends: :conda:package:`bucketcache`  :conda:package:`click`  :conda:package:`norns` >0.1.1 :conda:package:`pyfaidx` >=0.5.1 :conda:package:`pytest`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`requests`  :conda:package:`ucsc-bedtogenepred`  :conda:package:`ucsc-genepredtobed`  :conda:package:`ucsc-genepredtogtf`  :conda:package:`ucsc-gtftogenepred`  :conda:package:`xmltodict`  

   :required~by: |required_by_genomepy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genomepy

   and update with::

      conda update genomepy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/genomepy


.. |required_by_genomepy| conda:required_by:: genomepy
.. |downloads_genomepy| image:: https://img.shields.io/conda/dn/bioconda/genomepy.svg?style=flat
   :alt:   (downloads)
.. |docker_genomepy| image:: https://quay.io/repository/biocontainers/genomepy/status
   :target: https://quay.io/repository/biocontainers/genomepy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomepy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomepy/README.html

