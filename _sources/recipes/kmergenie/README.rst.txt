.. title:: Package Recipe 'kmergenie'
.. highlight: bash


kmergenie
=========

.. conda:recipe:: kmergenie
   :replaces_section_title:

   KmerGenie estimates the best k\-mer length for genome de novo assembly

   :homepage: http://kmergenie.bx.psu.edu/
   :license: free software license
   :recipe: /`kmergenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmergenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmergenie/meta.yaml>`_
   :links: biotools: :biotools:`kmergenie`, doi: :doi:`10.1093/bioinformatics/btt310`

   


.. conda:package:: kmergenie

   |downloads_kmergenie| |docker_kmergenie|

   :versions: 1.7016

   :depends: :conda:package:`libgcc`  :conda:package:`python` 2.7* :conda:package:`r-base` 3.2.2* :conda:package:`r-essentials`  :conda:package:`zlib`  

   :required~by: |required_by_kmergenie|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kmergenie

   and update with::

      conda update kmergenie

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kmergenie


.. |required_by_kmergenie| conda:required_by:: kmergenie
.. |downloads_kmergenie| image:: https://img.shields.io/conda/dn/bioconda/kmergenie.svg?style=flat
   :alt:   (downloads)
.. |docker_kmergenie| image:: https://quay.io/repository/biocontainers/kmergenie/status
   :target: https://quay.io/repository/biocontainers/kmergenie







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmergenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmergenie/README.html

