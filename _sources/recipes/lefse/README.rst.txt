.. title:: Package Recipe 'lefse'
.. highlight: bash


lefse
=====

.. conda:recipe:: lefse
   :replaces_section_title:

   LDA Effect Size \(LEfSe\) \(Segata et. al 2010\) is an algorithm for high\-dimensional biomarker discovery and explanation that identifies genomic features \(genes\, pathways\, or taxa\) characterizing the differences between two or more biological conditions.

   :homepage: https://bitbucket.org/nsegata/lefse
   :license: Custom
   :recipe: /`lefse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lefse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lefse/meta.yaml>`_

   


.. conda:package:: lefse

   |downloads_lefse| |docker_lefse|

   :versions: 1.0.8.post1, 1.0.7.post1, 1.0.7

   :depends: :conda:package:`biom-format` >=2.1.5 :conda:package:`matplotlib` >=1.0 :conda:package:`numpy`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`r-base`  :conda:package:`r-coin`  :conda:package:`r-mass`  :conda:package:`r-modeltools`  :conda:package:`r-mvtnorm`  :conda:package:`r-survival`  :conda:package:`rpy2` >=2.8.5 

   :required~by: |required_by_lefse|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lefse

   and update with::

      conda update lefse

   or use the docker container::

      docker pull quay.io/repository/biocontainers/lefse


.. |required_by_lefse| conda:required_by:: lefse
.. |downloads_lefse| image:: https://img.shields.io/conda/dn/bioconda/lefse.svg?style=flat
   :alt:   (downloads)
.. |docker_lefse| image:: https://quay.io/repository/biocontainers/lefse/status
   :target: https://quay.io/repository/biocontainers/lefse






Notes
-----
Prefix with \'lefse\-\'\' some script names that are rather generic\: \'format\_input.py\'\, \'plot\_cladogram.py\'\, \'plot\_features.py\'\, \'plot\_res.py\'.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lefse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lefse/README.html

