.. title:: Package Recipe 'yaha'
.. highlight: bash


yaha
====

.. conda:recipe:: yaha
   :replaces_section_title:

   yaha is an open source\, flexible\, sensitive and accurate DNA aligner designed for single\-end reads

   :homepage: https://github.com/GregoryFaust/yaha
   :license: GPL
   :recipe: /`yaha <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yaha>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yaha/meta.yaml>`_

   


.. conda:package:: yaha

   |downloads_yaha| |docker_yaha|

   :versions: 0.1.83

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_yaha|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install yaha

   and update with::

      conda update yaha

   or use the docker container::

      docker pull quay.io/repository/biocontainers/yaha


.. |required_by_yaha| conda:required_by:: yaha
.. |downloads_yaha| image:: https://img.shields.io/conda/dn/bioconda/yaha.svg?style=flat
   :alt:   (downloads)
.. |docker_yaha| image:: https://quay.io/repository/biocontainers/yaha/status
   :target: https://quay.io/repository/biocontainers/yaha







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yaha/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yaha/README.html

