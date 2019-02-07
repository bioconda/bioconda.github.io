.. title:: Package Recipe 'quast'
.. highlight: bash


quast
=====

.. conda:recipe:: quast
   :replaces_section_title:

   Quality Assessment Tool for Genome Assemblies

   :homepage: http://quast.sourceforge.net/
   :license: Custom
   :recipe: /`quast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quast/meta.yaml>`_
   :links: biotools: :biotools:`quast`

   


.. conda:package:: quast

   |downloads_quast| |docker_quast|

   :versions: 5.0.2, 5.0.1, 5.0.0, 4.6.3, 4.6.1, 4.5, 4.4, 4.3, 4.1, 3.2

   :depends: :conda:package:`blast`  :conda:package:`circos`  :conda:package:`glimmerhmm`  :conda:package:`joblib`  :conda:package:`libgcc-ng` >=4.9 :conda:package:`matplotlib`  :conda:package:`openjdk` >=8 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`simplejson`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_quast|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install quast

   and update with::

      conda update quast

   or use the docker container::

      docker pull quay.io/repository/biocontainers/quast


.. |required_by_quast| conda:required_by:: quast
.. |downloads_quast| image:: https://img.shields.io/conda/dn/bioconda/quast.svg?style=flat
   :alt:   (downloads)
.. |docker_quast| image:: https://quay.io/repository/biocontainers/quast/status
   :target: https://quay.io/repository/biocontainers/quast






Notes
-----
\- GeneMark gene prediction software is disabled due to licensing issues



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quast/README.html

