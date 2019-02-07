.. title:: Package Recipe 'flaimapper'
.. highlight: bash


flaimapper
==========

.. conda:recipe:: flaimapper
   :replaces_section_title:

   FlaiMapper\: Detecting small ncRNA derived fragments in small RNA\-Seq data

   :homepage: https://github.com/yhoogstrate/flaimapper/
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`flaimapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flaimapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flaimapper/meta.yaml>`_

   


.. conda:package:: flaimapper

   |downloads_flaimapper| |docker_flaimapper|

   :versions: 3.0.0, 2.5.0, 2.4.0, 2.3.4, 2.3.3, 2.0.0

   :depends: :conda:package:`pysam` >=0.14.1 :conda:package:`python` 3.5* :conda:package:`setuptools`  

   :required~by: |required_by_flaimapper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install flaimapper

   and update with::

      conda update flaimapper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/flaimapper


.. |required_by_flaimapper| conda:required_by:: flaimapper
.. |downloads_flaimapper| image:: https://img.shields.io/conda/dn/bioconda/flaimapper.svg?style=flat
   :alt:   (downloads)
.. |docker_flaimapper| image:: https://quay.io/repository/biocontainers/flaimapper/status
   :target: https://quay.io/repository/biocontainers/flaimapper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flaimapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flaimapper/README.html

