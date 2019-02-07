.. title:: Package Recipe 'metaphyler'
.. highlight: bash


metaphyler
==========

.. conda:recipe:: metaphyler
   :replaces_section_title:

   Estimating Bacterial Composition from Metagenomic Sequences

   :homepage: http://metaphyler.cbcb.umd.edu/
   :license: Artistic License 2.0
   :recipe: /`metaphyler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaphyler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaphyler/meta.yaml>`_

   


.. conda:package:: metaphyler

   |downloads_metaphyler| |docker_metaphyler|

   :versions: 1.25

   :depends: :conda:package:`blast-legacy`  :conda:package:`libgcc-ng` >=4.9 :conda:package:`perl`  

   :required~by: |required_by_metaphyler|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metaphyler

   and update with::

      conda update metaphyler

   or use the docker container::

      docker pull quay.io/repository/biocontainers/metaphyler


.. |required_by_metaphyler| conda:required_by:: metaphyler
.. |downloads_metaphyler| image:: https://img.shields.io/conda/dn/bioconda/metaphyler.svg?style=flat
   :alt:   (downloads)
.. |docker_metaphyler| image:: https://quay.io/repository/biocontainers/metaphyler/status
   :target: https://quay.io/repository/biocontainers/metaphyler







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaphyler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaphyler/README.html

