.. title:: Package Recipe 'r-biom'
.. highlight: bash


r-biom
======

.. conda:recipe:: r-biom
   :replaces_section_title:

   This is an R package for interfacing with the BIOM format.

   :homepage: https://github.com/joey711/biom/, http://biom-format.org/
   :license: GPL-2
   :recipe: /`r-biom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-biom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-biom/meta.yaml>`_

   


.. conda:package:: r-biom

   |downloads_r-biom| |docker_r-biom|

   :versions: 0.3.12

   :depends: :conda:package:`r` 3.2.2* :conda:package:`r-matrix`  :conda:package:`r-plyr`  :conda:package:`r-rjsonio`  

   :required~by: |required_by_r-biom|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-biom

   and update with::

      conda update r-biom

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-biom


.. |required_by_r-biom| conda:required_by:: r-biom
.. |downloads_r-biom| image:: https://img.shields.io/conda/dn/bioconda/r-biom.svg?style=flat
   :alt:   (downloads)
.. |docker_r-biom| image:: https://quay.io/repository/biocontainers/r-biom/status
   :target: https://quay.io/repository/biocontainers/r-biom







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-biom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-biom/README.html

