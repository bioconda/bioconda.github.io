.. title:: Package Recipe 'cage'
.. highlight: bash


cage
====

.. conda:recipe:: cage
   :replaces_section_title:

   Changepoint Analysis for Efficient Variant Calling

   :homepage: https://github.com/adambloniarz/CAGe
   :license: Apache v2
   :recipe: /`cage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cage/meta.yaml>`_

   


.. conda:package:: cage

   |downloads_cage| |docker_cage|

   :versions: 2016.05.13, 2016.01.24

   :depends: :conda:package:`bamtools` >=2.4.1,<2.4.2.0a0 :conda:package:`python`  :conda:package:`sqlite` >=3.24.0,<4.0a0 

   :required~by: |required_by_cage|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cage

   and update with::

      conda update cage

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cage


.. |required_by_cage| conda:required_by:: cage
.. |downloads_cage| image:: https://img.shields.io/conda/dn/bioconda/cage.svg?style=flat
   :alt:   (downloads)
.. |docker_cage| image:: https://quay.io/repository/biocontainers/cage/status
   :target: https://quay.io/repository/biocontainers/cage







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cage/README.html

