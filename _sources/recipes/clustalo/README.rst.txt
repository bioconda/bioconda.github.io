.. title:: Package Recipe 'clustalo'
.. highlight: bash


clustalo
========

.. conda:recipe:: clustalo
   :replaces_section_title:

   Latest version of Clustal\: a multiple sequence alignment program for DNA or proteins

   :homepage: http://www.clustal.org/omega/
   :license: GPLv2
   :recipe: /`clustalo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clustalo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clustalo/meta.yaml>`_

   


.. conda:package:: clustalo

   |downloads_clustalo| |docker_clustalo|

   :versions: 1.2.4, 1.2.3

   :depends: :conda:package:`argtable2`  :conda:package:`llvm`  

   :required~by: |required_by_clustalo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clustalo

   and update with::

      conda update clustalo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/clustalo


.. |required_by_clustalo| conda:required_by:: clustalo
.. |downloads_clustalo| image:: https://img.shields.io/conda/dn/bioconda/clustalo.svg?style=flat
   :alt:   (downloads)
.. |docker_clustalo| image:: https://quay.io/repository/biocontainers/clustalo/status
   :target: https://quay.io/repository/biocontainers/clustalo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clustalo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clustalo/README.html

