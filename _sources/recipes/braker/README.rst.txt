.. title:: Package Recipe 'braker'
.. highlight: bash


braker
======

.. conda:recipe:: braker
   :replaces_section_title:

   BRAKER1\: Unsupervised RNA\-Seq\-based genome annotation with GeneMark\-ET and AUGUSTUS

   :homepage: http://bioinf.uni-greifswald.de/augustus/
   :license:  
   :recipe: /`braker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/braker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/braker/meta.yaml>`_

   


.. conda:package:: braker

   |downloads_braker| |docker_braker|

   :versions: 1.9

   :depends: :conda:package:`perl-app-cpanminus`  :conda:package:`perl-parallel-forkmanager`  :conda:package:`perl-pathtools`  :conda:package:`perl-scalar-util-numeric`  

   :required~by: |required_by_braker|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install braker

   and update with::

      conda update braker

   or use the docker container::

      docker pull quay.io/repository/biocontainers/braker


.. |required_by_braker| conda:required_by:: braker
.. |downloads_braker| image:: https://img.shields.io/conda/dn/bioconda/braker.svg?style=flat
   :alt:   (downloads)
.. |docker_braker| image:: https://quay.io/repository/biocontainers/braker/status
   :target: https://quay.io/repository/biocontainers/braker







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/braker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/braker/README.html

