.. title:: Package Recipe 'beagle-lib'
.. highlight: bash


beagle-lib
==========

.. conda:recipe:: beagle-lib
   :replaces_section_title:

   general purpose library for evaluating the likelihood of sequence evolution on trees

   :homepage: https://github.com/beagle-dev/beagle-lib
   :license: GPL / GPL-3.0+
   :recipe: /`beagle-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beagle-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beagle-lib/meta.yaml>`_

   


.. conda:package:: beagle-lib

   |downloads_beagle-lib| |docker_beagle-lib|

   :versions: 3.1.2, 3.1.1, 3.1.0, 3.0.2, 2.1.2

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libtool`  :conda:package:`openjdk`  

   :required~by: |required_by_beagle-lib|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install beagle-lib

   and update with::

      conda update beagle-lib

   or use the docker container::

      docker pull quay.io/repository/biocontainers/beagle-lib


.. |required_by_beagle-lib| conda:required_by:: beagle-lib
.. |downloads_beagle-lib| image:: https://img.shields.io/conda/dn/bioconda/beagle-lib.svg?style=flat
   :alt:   (downloads)
.. |docker_beagle-lib| image:: https://quay.io/repository/biocontainers/beagle-lib/status
   :target: https://quay.io/repository/biocontainers/beagle-lib







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beagle-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beagle-lib/README.html

