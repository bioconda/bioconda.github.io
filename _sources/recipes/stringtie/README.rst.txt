.. title:: Package Recipe 'stringtie'
.. highlight: bash


stringtie
=========

.. conda:recipe:: stringtie
   :replaces_section_title:

   Transcriptome assembly and quantification for RNA\-seq

   :homepage: http://ccb.jhu.edu/software/stringtie/
   :license: Artistic License 2.0
   :recipe: /`stringtie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringtie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringtie/meta.yaml>`_
   :links: biotools: :biotools:`StringTie`, doi: :doi:`10.1038/nbt.3122`

   


.. conda:package:: stringtie

   |downloads_stringtie| |docker_stringtie|

   :versions: 1.3.4, 1.3.3, 1.3.0, 1.2.4, 1.2.3, 1.2.2, 1.2.0, 1.1.2, 1.1.1, 1.1.0, 1.0.4, 1.0.3, 1.0.1, 0.97

   :depends: :conda:package:`python`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_stringtie|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stringtie

   and update with::

      conda update stringtie

   or use the docker container::

      docker pull quay.io/repository/biocontainers/stringtie


.. |required_by_stringtie| conda:required_by:: stringtie
.. |downloads_stringtie| image:: https://img.shields.io/conda/dn/bioconda/stringtie.svg?style=flat
   :alt:   (downloads)
.. |docker_stringtie| image:: https://quay.io/repository/biocontainers/stringtie/status
   :target: https://quay.io/repository/biocontainers/stringtie







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stringtie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stringtie/README.html

