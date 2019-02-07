.. title:: Package Recipe 'portcullis'
.. highlight: bash


portcullis
==========

.. conda:recipe:: portcullis/1.1.0
   :replaces_section_title:

   Splice junction analysis and filtering from BAM files

   :homepage: https://github.com/maplesond/portcullis
   :license: GPL3
   :recipe: /`portcullis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/portcullis>`_/`1.1.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/portcullis/1.1.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/portcullis/1.1.0/meta.yaml>`_

   


.. conda:package:: portcullis

   |downloads_portcullis| |docker_portcullis|

   :versions: 1.1.1, 1.1.0

   :depends: :conda:package:`libgcc`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` 3.5* :conda:package:`samtools`  :conda:package:`tabulate`  :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_portcullis|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install portcullis

   and update with::

      conda update portcullis

   or use the docker container::

      docker pull quay.io/repository/biocontainers/portcullis


.. |required_by_portcullis| conda:required_by:: portcullis
.. |downloads_portcullis| image:: https://img.shields.io/conda/dn/bioconda/portcullis.svg?style=flat
   :alt:   (downloads)
.. |docker_portcullis| image:: https://quay.io/repository/biocontainers/portcullis/status
   :target: https://quay.io/repository/biocontainers/portcullis







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/portcullis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/portcullis/README.html

