.. title:: Package Recipe 'shapeit'
.. highlight: bash


shapeit
=======

.. conda:recipe:: shapeit
   :replaces_section_title:

   SHAPEIT is a fast and accurate method for estimation of haplotypes \(aka phasing\) from genotype or sequencing data.

   :homepage: https://mathgen.stats.ox.ac.uk/genetics_software/shapeit/shapeit.html
   :license: Free for Academic Use
   :recipe: /`shapeit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapeit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapeit/meta.yaml>`_
   :links: biotools: :biotools:`SHAPEIT`

   


.. conda:package:: shapeit

   |downloads_shapeit| |docker_shapeit|

   :versions: 2.r837

   :depends: :conda:package:`boost`  :conda:package:`libgcc`  

   :required~by: |required_by_shapeit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shapeit

   and update with::

      conda update shapeit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/shapeit


.. |required_by_shapeit| conda:required_by:: shapeit
.. |downloads_shapeit| image:: https://img.shields.io/conda/dn/bioconda/shapeit.svg?style=flat
   :alt:   (downloads)
.. |docker_shapeit| image:: https://quay.io/repository/biocontainers/shapeit/status
   :target: https://quay.io/repository/biocontainers/shapeit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shapeit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shapeit/README.html

