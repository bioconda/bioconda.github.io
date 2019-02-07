.. title:: Package Recipe 'phylip'
.. highlight: bash


phylip
======

.. conda:recipe:: phylip
   :replaces_section_title:

   Package of programs for inferring phylogenies

   :homepage: http://evolution.genetics.washington.edu/phylip/
   :license: BSD
   :recipe: /`phylip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylip/meta.yaml>`_
   :links: biotools: :biotools:`PHYLIP`

   


.. conda:package:: phylip

   |downloads_phylip| |docker_phylip|

   :versions: 3.697, 3.696

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`openjdk` >=6 :conda:package:`python`  

   :required~by: |required_by_phylip|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylip

   and update with::

      conda update phylip

   or use the docker container::

      docker pull quay.io/repository/biocontainers/phylip


.. |required_by_phylip| conda:required_by:: phylip
.. |downloads_phylip| image:: https://img.shields.io/conda/dn/bioconda/phylip.svg?style=flat
   :alt:   (downloads)
.. |docker_phylip| image:: https://quay.io/repository/biocontainers/phylip/status
   :target: https://quay.io/repository/biocontainers/phylip







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylip/README.html

