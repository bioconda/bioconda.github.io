.. title:: Package Recipe 'pauvre'
.. highlight: bash


pauvre
======

.. conda:recipe:: pauvre
   :replaces_section_title:

   Tools for plotting Oxford Nanopore and other long\-read data.

   :homepage: https://github.com/conchoecia/pauvre
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`pauvre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pauvre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pauvre/meta.yaml>`_

   


.. conda:package:: pauvre

   |downloads_pauvre| |docker_pauvre|

   :versions: 0.1.86, 0.1.85, 0.1.3

   :depends: :conda:package:`biopython` >=1.68 :conda:package:`matplotlib` >=2.0.2 :conda:package:`numpy` >=1.12.1 :conda:package:`pandas` >=0.20.1 :conda:package:`python` 2.7* 

   :required~by: |required_by_pauvre|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pauvre

   and update with::

      conda update pauvre

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pauvre


.. |required_by_pauvre| conda:required_by:: pauvre
.. |downloads_pauvre| image:: https://img.shields.io/conda/dn/bioconda/pauvre.svg?style=flat
   :alt:   (downloads)
.. |docker_pauvre| image:: https://quay.io/repository/biocontainers/pauvre/status
   :target: https://quay.io/repository/biocontainers/pauvre







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pauvre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pauvre/README.html

