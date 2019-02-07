.. title:: Package Recipe 'scoop'
.. highlight: bash


scoop
=====

.. conda:recipe:: scoop
   :replaces_section_title:

   Scalable COncurrent Operations in Python

   :homepage: http://github.com/soravux/scoop
   :license: GNU Library or Lesser General Public License (LGPL)
   :recipe: /`scoop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scoop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scoop/meta.yaml>`_

   


.. conda:package:: scoop

   |downloads_scoop| |docker_scoop|

   :versions: 0.7.1.1

   :depends: :conda:package:`greenlet` >=0.3.4 :conda:package:`python` 2.7* :conda:package:`pyzmq` >=13.1.0 

   :required~by: |required_by_scoop|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scoop

   and update with::

      conda update scoop

   or use the docker container::

      docker pull quay.io/repository/biocontainers/scoop


.. |required_by_scoop| conda:required_by:: scoop
.. |downloads_scoop| image:: https://img.shields.io/conda/dn/bioconda/scoop.svg?style=flat
   :alt:   (downloads)
.. |docker_scoop| image:: https://quay.io/repository/biocontainers/scoop/status
   :target: https://quay.io/repository/biocontainers/scoop







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scoop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scoop/README.html

