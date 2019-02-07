.. title:: Package Recipe 'pepnovo'
.. highlight: bash


pepnovo
=======

.. conda:recipe:: pepnovo
   :replaces_section_title:

   PepNovo serves as a high throughput de novo peptide sequencing tool for tandem mass spectrometry data

   :homepage: http://proteomics.ucsd.edu/Software/PepNovo/
   :license: 
   :recipe: /`pepnovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepnovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepnovo/meta.yaml>`_
   :links: biotools: :biotools:`pepnovo`

   


.. conda:package:: pepnovo

   |downloads_pepnovo| |docker_pepnovo|

   :versions: 20101117

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_pepnovo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pepnovo

   and update with::

      conda update pepnovo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pepnovo


.. |required_by_pepnovo| conda:required_by:: pepnovo
.. |downloads_pepnovo| image:: https://img.shields.io/conda/dn/bioconda/pepnovo.svg?style=flat
   :alt:   (downloads)
.. |docker_pepnovo| image:: https://quay.io/repository/biocontainers/pepnovo/status
   :target: https://quay.io/repository/biocontainers/pepnovo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pepnovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pepnovo/README.html

