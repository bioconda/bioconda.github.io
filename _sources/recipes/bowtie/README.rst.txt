.. title:: Package Recipe 'bowtie'
.. highlight: bash


bowtie
======

.. conda:recipe:: bowtie
   :replaces_section_title:

   An ultrafast memory\-efficient short read aligner

   :homepage: https://github.com/BenLangmead/bowtie
   :license: Artistic License 2.0
   :recipe: /`bowtie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bowtie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bowtie/meta.yaml>`_
   :links: biotools: :biotools:`bowtie`

   


.. conda:package:: bowtie

   |downloads_bowtie| |docker_bowtie|

   :versions: 1.2.2, 1.2.1.1, 1.2.0, 1.1.2, 1.1.1, 1.0.0

   :depends: :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`perl`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`tbb`  

   :required~by: |required_by_bowtie|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bowtie

   and update with::

      conda update bowtie

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bowtie


.. |required_by_bowtie| conda:required_by:: bowtie
.. |downloads_bowtie| image:: https://img.shields.io/conda/dn/bioconda/bowtie.svg?style=flat
   :alt:   (downloads)
.. |docker_bowtie| image:: https://quay.io/repository/biocontainers/bowtie/status
   :target: https://quay.io/repository/biocontainers/bowtie







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bowtie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bowtie/README.html

