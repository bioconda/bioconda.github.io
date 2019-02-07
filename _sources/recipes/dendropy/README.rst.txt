.. title:: Package Recipe 'dendropy'
.. highlight: bash


dendropy
========

.. conda:recipe:: dendropy
   :replaces_section_title:

   A Python library for phylogenetics and phylogenetic computing\: reading\, writing\, simulation\, processing and manipulation of phylogenetic trees \(phylogenies\) and characters.

   :homepage: http://packages.python.org/DendroPy/
   :license: BSD License
   :recipe: /`dendropy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dendropy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dendropy/meta.yaml>`_

   


.. conda:package:: dendropy

   |downloads_dendropy| |docker_dendropy|

   :versions: 4.4.0, 4.2.0, 4.1.0, 4.0.3, 3.12.3

   :depends: :conda:package:`python`  

   :required~by: |required_by_dendropy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dendropy

   and update with::

      conda update dendropy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dendropy


.. |required_by_dendropy| conda:required_by:: dendropy
.. |downloads_dendropy| image:: https://img.shields.io/conda/dn/bioconda/dendropy.svg?style=flat
   :alt:   (downloads)
.. |docker_dendropy| image:: https://quay.io/repository/biocontainers/dendropy/status
   :target: https://quay.io/repository/biocontainers/dendropy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dendropy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dendropy/README.html

