.. title:: Package Recipe 'cosi2'
.. highlight: bash


cosi2
=====

.. conda:recipe:: cosi2
   :replaces_section_title:

   cosi2 is an efficient coalescent simulator with support for selection\, population structure\, variable recombination rates\, and gene conversion. It supports exact and approximate simulation modes.

   :homepage: https://www.broadinstitute.org/mpg/cosi2/
   :license: GPLv3
   :recipe: /`cosi2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cosi2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cosi2/meta.yaml>`_

   


.. conda:package:: cosi2

   |downloads_cosi2| |docker_cosi2|

   :versions: 2.3.0rc4, 2.3.0rc3, 2.3.0rc2, 2.3.0rc1, 2.02, 2.0

   :depends: :conda:package:`libgcc`  :conda:package:`python` 2.7* 

   :required~by: |required_by_cosi2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cosi2

   and update with::

      conda update cosi2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cosi2


.. |required_by_cosi2| conda:required_by:: cosi2
.. |downloads_cosi2| image:: https://img.shields.io/conda/dn/bioconda/cosi2.svg?style=flat
   :alt:   (downloads)
.. |docker_cosi2| image:: https://quay.io/repository/biocontainers/cosi2/status
   :target: https://quay.io/repository/biocontainers/cosi2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cosi2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cosi2/README.html

