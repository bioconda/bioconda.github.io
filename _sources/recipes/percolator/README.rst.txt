.. title:: Package Recipe 'percolator'
.. highlight: bash


percolator
==========

.. conda:recipe:: percolator
   :replaces_section_title:

   Semi\-supervised learning for peptide identification from shotgun proteomics datasets

   :homepage: https://github.com/percolator/percolator
   :license: Apache 2.0
   :recipe: /`percolator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/percolator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/percolator/meta.yaml>`_

   


.. conda:package:: percolator

   |downloads_percolator| |docker_percolator|

   :versions: 3.1, 3.0

   :depends: :conda:package:`bzip2`  :conda:package:`libgcc`  :conda:package:`sqlite`  :conda:package:`tokyocabinet`  :conda:package:`xerces-c` ==3.1.2 :conda:package:`xsd`  :conda:package:`zlib`  

   :required~by: |required_by_percolator|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install percolator

   and update with::

      conda update percolator

   or use the docker container::

      docker pull quay.io/repository/biocontainers/percolator


.. |required_by_percolator| conda:required_by:: percolator
.. |downloads_percolator| image:: https://img.shields.io/conda/dn/bioconda/percolator.svg?style=flat
   :alt:   (downloads)
.. |docker_percolator| image:: https://quay.io/repository/biocontainers/percolator/status
   :target: https://quay.io/repository/biocontainers/percolator







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/percolator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/percolator/README.html

