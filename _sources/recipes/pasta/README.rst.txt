.. title:: Package Recipe 'pasta'
.. highlight: bash


pasta
=====

.. conda:recipe:: pasta
   :replaces_section_title:

   An implementation of the PASTA \(Practical Alignment using Sate and TrAnsitivity\) algorithm

   :homepage: https://github.com/smirarab/pasta
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`pasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasta/meta.yaml>`_

   


.. conda:package:: pasta

   |downloads_pasta| |docker_pasta|

   :versions: 1.7.8, 0.2

   :depends: :conda:package:`dendropy` 4.1.0 py27_0 :conda:package:`java-jdk` >=6 :conda:package:`libgcc`  :conda:package:`pcre`  :conda:package:`pymongo` 3.3.0 py27_0 :conda:package:`python` >=2.7,<3 

   :required~by: |required_by_pasta|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pasta

   and update with::

      conda update pasta

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pasta


.. |required_by_pasta| conda:required_by:: pasta
.. |downloads_pasta| image:: https://img.shields.io/conda/dn/bioconda/pasta.svg?style=flat
   :alt:   (downloads)
.. |docker_pasta| image:: https://quay.io/repository/biocontainers/pasta/status
   :target: https://quay.io/repository/biocontainers/pasta







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pasta/README.html

