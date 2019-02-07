.. title:: Package Recipe 'xxmotif'
.. highlight: bash


xxmotif
=======

.. conda:recipe:: xxmotif
   :replaces_section_title:

   eXhaustive\, weight matriX\-based motif discovery in nucleotide sequences

   :homepage: https://github.com/soedinglab/xxmotif
   :license: GPLv3
   :recipe: /`xxmotif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xxmotif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xxmotif/meta.yaml>`_

   


.. conda:package:: xxmotif

   |downloads_xxmotif| |docker_xxmotif|

   :versions: 1.6

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_xxmotif|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xxmotif

   and update with::

      conda update xxmotif

   or use the docker container::

      docker pull quay.io/repository/biocontainers/xxmotif


.. |required_by_xxmotif| conda:required_by:: xxmotif
.. |downloads_xxmotif| image:: https://img.shields.io/conda/dn/bioconda/xxmotif.svg?style=flat
   :alt:   (downloads)
.. |docker_xxmotif| image:: https://quay.io/repository/biocontainers/xxmotif/status
   :target: https://quay.io/repository/biocontainers/xxmotif







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xxmotif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xxmotif/README.html

