.. title:: Package Recipe 'evidencemodeler'
.. highlight: bash


evidencemodeler
===============

.. conda:recipe:: evidencemodeler
   :replaces_section_title:

   Evidence Modeler combines ab intio gene predictions\, protein alignments\, and transcript alignments into weighted consensus gene structures

   :homepage: https://github.com/EVidenceModeler/EVidenceModeler
   :license: BSD / BSD 3-Clause
   :recipe: /`evidencemodeler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evidencemodeler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evidencemodeler/meta.yaml>`_

   


.. conda:package:: evidencemodeler

   |downloads_evidencemodeler| |docker_evidencemodeler|

   :versions: 1.1.1, v1.1.1

   :depends: :conda:package:`perl`  :conda:package:`perl-carp`  

   :required~by: |required_by_evidencemodeler|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install evidencemodeler

   and update with::

      conda update evidencemodeler

   or use the docker container::

      docker pull quay.io/repository/biocontainers/evidencemodeler


.. |required_by_evidencemodeler| conda:required_by:: evidencemodeler
.. |downloads_evidencemodeler| image:: https://img.shields.io/conda/dn/bioconda/evidencemodeler.svg?style=flat
   :alt:   (downloads)
.. |docker_evidencemodeler| image:: https://quay.io/repository/biocontainers/evidencemodeler/status
   :target: https://quay.io/repository/biocontainers/evidencemodeler







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/evidencemodeler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/evidencemodeler/README.html

