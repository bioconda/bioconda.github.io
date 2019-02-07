.. title:: Package Recipe 'pbsim'
.. highlight: bash


pbsim
=====

.. conda:recipe:: pbsim
   :replaces_section_title:

   PBSIM simulates PacBio reads

   :homepage: https://code.google.com/archive/p/pbsim/
   :license: GPLv2
   :recipe: /`pbsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbsim/meta.yaml>`_

   


.. conda:package:: pbsim

   |downloads_pbsim| |docker_pbsim|

   :versions: 1.0.3

   :depends: 

   :required~by: |required_by_pbsim|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbsim

   and update with::

      conda update pbsim

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pbsim


.. |required_by_pbsim| conda:required_by:: pbsim
.. |downloads_pbsim| image:: https://img.shields.io/conda/dn/bioconda/pbsim.svg?style=flat
   :alt:   (downloads)
.. |docker_pbsim| image:: https://quay.io/repository/biocontainers/pbsim/status
   :target: https://quay.io/repository/biocontainers/pbsim







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbsim/README.html

