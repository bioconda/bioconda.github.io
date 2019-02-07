.. title:: Package Recipe 'beast'
.. highlight: bash


beast
=====

.. conda:recipe:: beast
   :replaces_section_title:

   BEAST is a cross\-platform program for Bayesian analysis of molecular sequences using MCMC

   :homepage: http://beast.bio.ed.ac.uk
   :developer docs: https://github.com/beast-dev/beast-mcmc
   :license: GPL / LGPL-2.1
   :recipe: /`beast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast/meta.yaml>`_
   :links: biotools: :biotools:`beast`, doi: :doi:`10.1093/molbev/mss075`

   


.. conda:package:: beast

   |downloads_beast| |docker_beast|

   :versions: 1.10.4, 1.10.3, 1.10.2, 1.10.1, 1.10.0, 1.8.4, 1.8.2

   :depends: :conda:package:`beagle-lib`  :conda:package:`openjdk`  

   :required~by: |required_by_beast|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install beast

   and update with::

      conda update beast

   or use the docker container::

      docker pull quay.io/repository/biocontainers/beast


.. |required_by_beast| conda:required_by:: beast
.. |downloads_beast| image:: https://img.shields.io/conda/dn/bioconda/beast.svg?style=flat
   :alt:   (downloads)
.. |docker_beast| image:: https://quay.io/repository/biocontainers/beast/status
   :target: https://quay.io/repository/biocontainers/beast







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beast/README.html

