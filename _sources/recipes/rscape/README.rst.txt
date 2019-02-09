.. title:: Package Recipe 'rscape'
.. highlight: bash


rscape
======

.. conda:recipe:: rscape
   :replaces_section_title:

   R\-scape \(RNA Structural Covariation Above Phylogenetic Expectation\) looks for evidence of a conserved RNA secondary structure by measuring pairwise covariations observed in an input multiple sequence alignment.

   :homepage: http://eddylab.org/R-scape/
   :license: GPLv3
   :recipe: /`rscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rscape/meta.yaml>`_

   


.. conda:package:: rscape

   |downloads_rscape| |docker_rscape|

   :versions: 1.2.2, 1.0.4, 0.8.3, 0.6.1, 0.3.1, 0.2.1

   :depends: :conda:package:`gnuplot`  :conda:package:`libcxx` >=4.0.1 

   :required~by: |required_by_rscape|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rscape

   and update with::

      conda update rscape

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rscape


.. |required_by_rscape| conda:required_by:: rscape
.. |downloads_rscape| image:: https://img.shields.io/conda/dn/bioconda/rscape.svg?style=flat
   :alt:   (downloads)
.. |docker_rscape| image:: https://quay.io/repository/biocontainers/rscape/status
   :target: https://quay.io/repository/biocontainers/rscape







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rscape/README.html

