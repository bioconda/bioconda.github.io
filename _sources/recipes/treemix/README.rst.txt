.. title:: Package Recipe 'treemix'
.. highlight: bash


treemix
=======

.. conda:recipe:: treemix
   :replaces_section_title:

   TreeMix is a method for inferring the patterns of population splits and mixtures in the history of a set of populations.

   :homepage: http://pritchardlab.stanford.edu/software.html
   :license: GPL / GPLv3
   :recipe: /`treemix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treemix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treemix/meta.yaml>`_
   :links: biotools: :biotools:`TreeMix`, doi: :doi:`10.1371/journal.pgen.1002967`

   


.. conda:package:: treemix

   |downloads_treemix| |docker_treemix|

   :versions: 1.13, 1.12

   :depends: :conda:package:`blas`  :conda:package:`boost` 1.64* :conda:package:`gsl` 1.16* :conda:package:`libgcc`  :conda:package:`r-rcolorbrewer`  :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_treemix|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install treemix

   and update with::

      conda update treemix

   or use the docker container::

      docker pull quay.io/repository/biocontainers/treemix


.. |required_by_treemix| conda:required_by:: treemix
.. |downloads_treemix| image:: https://img.shields.io/conda/dn/bioconda/treemix.svg?style=flat
   :alt:   (downloads)
.. |docker_treemix| image:: https://quay.io/repository/biocontainers/treemix/status
   :target: https://quay.io/repository/biocontainers/treemix







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treemix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treemix/README.html

