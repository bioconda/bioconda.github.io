.. title:: Package Recipe 'rnasnp'
.. highlight: bash


rnasnp
======

.. conda:recipe:: rnasnp
   :replaces_section_title:

   Efficient detection of local RNA secondary structure changes induced by SNPs.

   :homepage: http://rth.dk/resources/rnasnp/software
   :license: RTH
   :recipe: /`rnasnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnasnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnasnp/meta.yaml>`_
   :links: biotools: :biotools:`rnasnp`

   


.. conda:package:: rnasnp

   |downloads_rnasnp| |docker_rnasnp|

   :versions: 1.2

   :depends: 

   :required~by: |required_by_rnasnp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnasnp

   and update with::

      conda update rnasnp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rnasnp


.. |required_by_rnasnp| conda:required_by:: rnasnp
.. |downloads_rnasnp| image:: https://img.shields.io/conda/dn/bioconda/rnasnp.svg?style=flat
   :alt:   (downloads)
.. |docker_rnasnp| image:: https://quay.io/repository/biocontainers/rnasnp/status
   :target: https://quay.io/repository/biocontainers/rnasnp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnasnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnasnp/README.html

