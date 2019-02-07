.. title:: Package Recipe 'verifybamid'
.. highlight: bash


verifybamid
===========

.. conda:recipe:: verifybamid
   :replaces_section_title:

   verifyBamID verifies identity and purity of sequence data

   :homepage: http://genome.sph.umich.edu/wiki/VerifyBamID
   :license: GPL3
   :recipe: /`verifybamid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verifybamid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verifybamid/meta.yaml>`_
   :links: biotools: :biotools:`verifybamid`, doi: :doi:`10.1016/j.ajhg.2012.09.004`

   


.. conda:package:: verifybamid

   |downloads_verifybamid| |docker_verifybamid|

   :versions: 1.1.3

   :depends: :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_verifybamid|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install verifybamid

   and update with::

      conda update verifybamid

   or use the docker container::

      docker pull quay.io/repository/biocontainers/verifybamid


.. |required_by_verifybamid| conda:required_by:: verifybamid
.. |downloads_verifybamid| image:: https://img.shields.io/conda/dn/bioconda/verifybamid.svg?style=flat
   :alt:   (downloads)
.. |docker_verifybamid| image:: https://quay.io/repository/biocontainers/verifybamid/status
   :target: https://quay.io/repository/biocontainers/verifybamid







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/verifybamid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/verifybamid/README.html

