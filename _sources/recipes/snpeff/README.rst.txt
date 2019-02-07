.. title:: Package Recipe 'snpeff'
.. highlight: bash


snpeff
======

.. conda:recipe:: snpeff
   :replaces_section_title:

   Genetic variant annotation and effect prediction toolbox

   :homepage: http://snpeff.sourceforge.net/
   :license: LGPLv3
   :recipe: /`snpeff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpeff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpeff/meta.yaml>`_
   :links: biotools: :biotools:`snpeff`

   


.. conda:package:: snpeff

   |downloads_snpeff| |docker_snpeff|

   :versions: 4.3.1t, 4.3.1r, 4.3.1q, 4.3.1p, 4.3.1o, 4.3.1m, 4.3.1k, 4.3, 4.3k, 4.3i, 4.3g, 4.3b, 4.2, 4.1l

   :depends: :conda:package:`openjdk`  

   :required~by: |required_by_snpeff|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snpeff

   and update with::

      conda update snpeff

   or use the docker container::

      docker pull quay.io/repository/biocontainers/snpeff


.. |required_by_snpeff| conda:required_by:: snpeff
.. |downloads_snpeff| image:: https://img.shields.io/conda/dn/bioconda/snpeff.svg?style=flat
   :alt:   (downloads)
.. |docker_snpeff| image:: https://quay.io/repository/biocontainers/snpeff/status
   :target: https://quay.io/repository/biocontainers/snpeff






Notes
-----
Note that the package version is slightly different from upstream\, this is to make sure conda will order the package versions correctly.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpeff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpeff/README.html

