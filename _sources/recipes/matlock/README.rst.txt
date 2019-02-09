.. title:: Package Recipe 'matlock'
.. highlight: bash


matlock
=======

.. conda:recipe:: matlock
   :replaces_section_title:

   Simple tools for working with Hi\-C data

   :homepage: https://github.com/phasegenomics/matlock
   :license: GNU Affero General Public License v3
   :recipe: /`matlock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matlock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matlock/meta.yaml>`_

   


.. conda:package:: matlock

   |downloads_matlock| |docker_matlock|

   :versions: 20181227

   :depends: :conda:package:`backports.lzma`  :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`gsl` >=2.2.1,<2.3.0a0 :conda:package:`openblas` >=0.2.20,<0.2.21.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_matlock|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install matlock

   and update with::

      conda update matlock

   or use the docker container::

      docker pull quay.io/repository/biocontainers/matlock


.. |required_by_matlock| conda:required_by:: matlock
.. |downloads_matlock| image:: https://img.shields.io/conda/dn/bioconda/matlock.svg?style=flat
   :alt:   (downloads)
.. |docker_matlock| image:: https://quay.io/repository/biocontainers/matlock/status
   :target: https://quay.io/repository/biocontainers/matlock







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/matlock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/matlock/README.html

