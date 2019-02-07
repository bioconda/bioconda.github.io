.. title:: Package Recipe 'cofold'
.. highlight: bash


cofold
======

.. conda:recipe:: cofold
   :replaces_section_title:

   An RNA secondary structure prediction method that takes co\-transcriptional folding into account.

   :homepage: http://www.e-rna.org/cofold/
   :license: MIT-like
   :recipe: /`cofold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cofold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cofold/meta.yaml>`_

   


.. conda:package:: cofold

   |downloads_cofold| |docker_cofold|

   :versions: 2.0.4

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_cofold|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cofold

   and update with::

      conda update cofold

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cofold


.. |required_by_cofold| conda:required_by:: cofold
.. |downloads_cofold| image:: https://img.shields.io/conda/dn/bioconda/cofold.svg?style=flat
   :alt:   (downloads)
.. |docker_cofold| image:: https://quay.io/repository/biocontainers/cofold/status
   :target: https://quay.io/repository/biocontainers/cofold







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cofold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cofold/README.html

