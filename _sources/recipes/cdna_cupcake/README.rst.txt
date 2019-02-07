.. title:: Package Recipe 'cdna_cupcake'
.. highlight: bash


cdna_cupcake
============

.. conda:recipe:: cdna_cupcake
   :replaces_section_title:

   cDNA\_Cupcake is a miscellaneous collection of Python and R scripts used for analyzing sequencing data.

   :homepage: https://github.com/Magdoll/cDNA_Cupcake
   :license: BSD / BSD-3-Clause-Clear
   :recipe: /`cdna_cupcake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdna_cupcake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdna_cupcake/meta.yaml>`_

   


.. conda:package:: cdna_cupcake

   |downloads_cdna_cupcake| |docker_cdna_cupcake|

   :versions: 5.8, 5.3

   :depends: :conda:package:`biopython`  :conda:package:`bx-python` 0.7.3 :conda:package:`graphviz`  :conda:package:`pbcore`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`r-base`  :conda:package:`scikit-learn`  

   :required~by: |required_by_cdna_cupcake|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cdna_cupcake

   and update with::

      conda update cdna_cupcake

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cdna_cupcake


.. |required_by_cdna_cupcake| conda:required_by:: cdna_cupcake
.. |downloads_cdna_cupcake| image:: https://img.shields.io/conda/dn/bioconda/cdna_cupcake.svg?style=flat
   :alt:   (downloads)
.. |docker_cdna_cupcake| image:: https://quay.io/repository/biocontainers/cdna_cupcake/status
   :target: https://quay.io/repository/biocontainers/cdna_cupcake







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cdna_cupcake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cdna_cupcake/README.html

