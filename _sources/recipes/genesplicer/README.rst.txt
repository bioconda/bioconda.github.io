.. title:: Package Recipe 'genesplicer'
.. highlight: bash


genesplicer
===========

.. conda:recipe:: genesplicer
   :replaces_section_title:

   GeneSplicer \: A computational method for splice site prediction

   :homepage: http://www.cs.jhu.edu/~genomics/GeneSplicer
   :license: OSI
   :recipe: /`genesplicer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genesplicer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genesplicer/meta.yaml>`_
   :links: biotools: :biotools:`GeneSplicer`

   


.. conda:package:: genesplicer

   |downloads_genesplicer| |docker_genesplicer|

   :versions: 1.0, 0_2003.04.03

   :depends: 

   :required~by: |required_by_genesplicer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genesplicer

   and update with::

      conda update genesplicer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/genesplicer


.. |required_by_genesplicer| conda:required_by:: genesplicer
.. |downloads_genesplicer| image:: https://img.shields.io/conda/dn/bioconda/genesplicer.svg?style=flat
   :alt:   (downloads)
.. |docker_genesplicer| image:: https://quay.io/repository/biocontainers/genesplicer/status
   :target: https://quay.io/repository/biocontainers/genesplicer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genesplicer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genesplicer/README.html

