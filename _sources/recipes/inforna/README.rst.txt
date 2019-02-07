.. title:: Package Recipe 'inforna'
.. highlight: bash


inforna
=======

.. conda:recipe:: inforna
   :replaces_section_title:

   A server for the design of RNA sequences that fold into a given pseudo\-knot free RNA secondary structure.

   :homepage: https://github.com/BackofenLab/INFO-RNA
   :license: MIT-like
   :recipe: /`inforna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/inforna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/inforna/meta.yaml>`_
   :links: biotools: :biotools:`inforna`

   


.. conda:package:: inforna

   |downloads_inforna| |docker_inforna|

   :versions: 2.1.2

   :depends: :conda:package:`libgcc`  :conda:package:`viennarna`  

   :required~by: |required_by_inforna|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install inforna

   and update with::

      conda update inforna

   or use the docker container::

      docker pull quay.io/repository/biocontainers/inforna


.. |required_by_inforna| conda:required_by:: inforna
.. |downloads_inforna| image:: https://img.shields.io/conda/dn/bioconda/inforna.svg?style=flat
   :alt:   (downloads)
.. |docker_inforna| image:: https://quay.io/repository/biocontainers/inforna/status
   :target: https://quay.io/repository/biocontainers/inforna







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/inforna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/inforna/README.html

