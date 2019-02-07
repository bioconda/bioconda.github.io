.. title:: Package Recipe 'r-seqinr'
.. highlight: bash


r-seqinr
========

.. conda:recipe:: r-seqinr
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-seqinr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seqinr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seqinr/meta.yaml>`_

   


.. conda:package:: r-seqinr

   |downloads_r-seqinr| |docker_r-seqinr|

   :versions: 3.4_5, 3.1_3

   :depends: :conda:package:`libgcc`  :conda:package:`r-ade4`  :conda:package:`r-base` 3.4.1* :conda:package:`r-segmented`  

   :required~by: |required_by_r-seqinr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-seqinr

   and update with::

      conda update r-seqinr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-seqinr


.. |required_by_r-seqinr| conda:required_by:: r-seqinr
.. |downloads_r-seqinr| image:: https://img.shields.io/conda/dn/bioconda/r-seqinr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-seqinr| image:: https://quay.io/repository/biocontainers/r-seqinr/status
   :target: https://quay.io/repository/biocontainers/r-seqinr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-seqinr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-seqinr/README.html

