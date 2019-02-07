.. title:: Package Recipe 'py2bit'
.. highlight: bash


py2bit
======

.. conda:recipe:: py2bit
   :replaces_section_title:

   A package for accessing 2bit files using lib2bit

   :homepage: https://github.com/deeptools/py2bit
   :license: MIT
   :recipe: /`py2bit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/py2bit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/py2bit/meta.yaml>`_

   


.. conda:package:: py2bit

   |downloads_py2bit| |docker_py2bit|

   :versions: 0.3.0, 0.2.2, 0.2.1, 0.2.0, 0.1.0

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_py2bit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install py2bit

   and update with::

      conda update py2bit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/py2bit


.. |required_by_py2bit| conda:required_by:: py2bit
.. |downloads_py2bit| image:: https://img.shields.io/conda/dn/bioconda/py2bit.svg?style=flat
   :alt:   (downloads)
.. |docker_py2bit| image:: https://quay.io/repository/biocontainers/py2bit/status
   :target: https://quay.io/repository/biocontainers/py2bit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/py2bit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/py2bit/README.html

