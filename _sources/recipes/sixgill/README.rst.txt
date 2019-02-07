.. title:: Package Recipe 'sixgill'
.. highlight: bash


sixgill
=======

.. conda:recipe:: sixgill
   :replaces_section_title:

   six\-frame genome\-inferred libraries for LC\-MS\/MS

   :homepage: 
   :license: Apache / Apache Software License
   :recipe: /`sixgill <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sixgill>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sixgill/meta.yaml>`_

   


.. conda:package:: sixgill

   |downloads_sixgill| |docker_sixgill|

   :versions: 0.2.4, 0.2.3

   :depends: :conda:package:`biopython`  :conda:package:`pysam`  :conda:package:`python` 2.7* 

   :required~by: |required_by_sixgill|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sixgill

   and update with::

      conda update sixgill

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sixgill


.. |required_by_sixgill| conda:required_by:: sixgill
.. |downloads_sixgill| image:: https://img.shields.io/conda/dn/bioconda/sixgill.svg?style=flat
   :alt:   (downloads)
.. |docker_sixgill| image:: https://quay.io/repository/biocontainers/sixgill/status
   :target: https://quay.io/repository/biocontainers/sixgill







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sixgill/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sixgill/README.html

