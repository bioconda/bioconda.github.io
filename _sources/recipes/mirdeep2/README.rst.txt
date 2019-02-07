.. title:: Package Recipe 'mirdeep2'
.. highlight: bash


mirdeep2
========

.. conda:recipe:: mirdeep2/2.0.0.8
   :replaces_section_title:

   A completely overhauled tool which discovers microRNA genes by analyzing sequenced RNAs

   :homepage: https://www.mdc-berlin.de/8551903/en/research/research_teams/systems_biology_of_gene_regulatory_elements/projects/miRDeep
   :license: academic
   :recipe: /`mirdeep2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirdeep2>`_/`2.0.0.8 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirdeep2/2.0.0.8>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirdeep2/2.0.0.8/meta.yaml>`_

   


.. conda:package:: mirdeep2

   |downloads_mirdeep2| |docker_mirdeep2|

   :versions: 2.0.0.8, 2.0.0.7

   :depends: :conda:package:`perl-pdf-api2`  :conda:package:`perl-threaded`  

   :required~by: |required_by_mirdeep2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mirdeep2

   and update with::

      conda update mirdeep2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mirdeep2


.. |required_by_mirdeep2| conda:required_by:: mirdeep2
.. |downloads_mirdeep2| image:: https://img.shields.io/conda/dn/bioconda/mirdeep2.svg?style=flat
   :alt:   (downloads)
.. |docker_mirdeep2| image:: https://quay.io/repository/biocontainers/mirdeep2/status
   :target: https://quay.io/repository/biocontainers/mirdeep2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirdeep2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirdeep2/README.html

