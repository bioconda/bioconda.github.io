.. title:: Package Recipe 'spotyping'
.. highlight: bash


spotyping
=========

.. conda:recipe:: spotyping
   :replaces_section_title:

   SpoTyping\: fast and accurate in silico Mycobacterium spoligotyping from sequence reads

   :homepage: https://github.com/xiaeryu/SpoTyping
   :license: GPL / GPL-3
   :recipe: /`spotyping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spotyping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spotyping/meta.yaml>`_
   :links: DOI: :DOI:`10.1186/s13073-016-0270-7`

   


.. conda:package:: spotyping

   |downloads_spotyping| |docker_spotyping|

   :versions: 2.1

   :depends: :conda:package:`blast`  :conda:package:`python` 2.7* 

   :required~by: |required_by_spotyping|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spotyping

   and update with::

      conda update spotyping

   or use the docker container::

      docker pull quay.io/repository/biocontainers/spotyping


.. |required_by_spotyping| conda:required_by:: spotyping
.. |downloads_spotyping| image:: https://img.shields.io/conda/dn/bioconda/spotyping.svg?style=flat
   :alt:   (downloads)
.. |docker_spotyping| image:: https://quay.io/repository/biocontainers/spotyping/status
   :target: https://quay.io/repository/biocontainers/spotyping







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spotyping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spotyping/README.html

