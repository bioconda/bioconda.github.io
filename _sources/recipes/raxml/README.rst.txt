.. title:: Package Recipe 'raxml'
.. highlight: bash


raxml
=====

.. conda:recipe:: raxml
   :replaces_section_title:

   Phylogenetics \- Randomized Axelerated Maximum Likelihood.

   :homepage: http://sco.h-its.org/exelixis/web/software/raxml/index.html
   :license: GPL
   :recipe: /`raxml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raxml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raxml/meta.yaml>`_
   :links: biotools: :biotools:`raxml`, doi: :doi:`10.1093/bioinformatics/btu033`

   


.. conda:package:: raxml

   |downloads_raxml| |docker_raxml|

   :versions: 8.2.12, 8.2.10, 8.2.9, 8.2.4, 7.3.0

   :depends: 

   :required~by: |required_by_raxml|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install raxml

   and update with::

      conda update raxml

   or use the docker container::

      docker pull quay.io/repository/biocontainers/raxml


.. |required_by_raxml| conda:required_by:: raxml
.. |downloads_raxml| image:: https://img.shields.io/conda/dn/bioconda/raxml.svg?style=flat
   :alt:   (downloads)
.. |docker_raxml| image:: https://quay.io/repository/biocontainers/raxml/status
   :target: https://quay.io/repository/biocontainers/raxml







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/raxml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/raxml/README.html

