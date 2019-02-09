.. title:: Package Recipe 'fcp'
.. highlight: bash


fcp
===

.. conda:recipe:: fcp
   :replaces_section_title:

   Homology\- and composition\-based classifiers for assigning a taxonomic attribution to metagenomic fragments.

   :homepage: https://github.com/dparks1134/FragmentClassificationPackage
   :license: GPL3
   :recipe: /`fcp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fcp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fcp/meta.yaml>`_

   


.. conda:package:: fcp

   |downloads_fcp| |docker_fcp|

   :versions: 1.0.7

   :depends: :conda:package:`blast`  :conda:package:`python` 2.7* 

   :required~by: |required_by_fcp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fcp

   and update with::

      conda update fcp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fcp


.. |required_by_fcp| conda:required_by:: fcp
.. |downloads_fcp| image:: https://img.shields.io/conda/dn/bioconda/fcp.svg?style=flat
   :alt:   (downloads)
.. |docker_fcp| image:: https://quay.io/repository/biocontainers/fcp/status
   :target: https://quay.io/repository/biocontainers/fcp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fcp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fcp/README.html

