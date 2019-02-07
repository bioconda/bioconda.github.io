.. title:: Package Recipe 'suma_package'
.. highlight: bash


suma_package
============

.. conda:recipe:: suma_package
   :replaces_section_title:

   Fast and exact comparison of sequences

   :homepage: http://metabarcoding.org/sumatra
   :license: CeCILL FSLA
   :recipe: /`suma_package <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suma_package>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suma_package/meta.yaml>`_

   


.. conda:package:: suma_package

   |downloads_suma_package| |docker_suma_package|

   :versions: 1.0.00

   :depends: :conda:package:`zlib`  

   :required~by: |required_by_suma_package|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install suma_package

   and update with::

      conda update suma_package

   or use the docker container::

      docker pull quay.io/repository/biocontainers/suma_package


.. |required_by_suma_package| conda:required_by:: suma_package
.. |downloads_suma_package| image:: https://img.shields.io/conda/dn/bioconda/suma_package.svg?style=flat
   :alt:   (downloads)
.. |docker_suma_package| image:: https://quay.io/repository/biocontainers/suma_package/status
   :target: https://quay.io/repository/biocontainers/suma_package







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/suma_package/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/suma_package/README.html

