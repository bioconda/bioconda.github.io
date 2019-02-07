.. title:: Package Recipe 'wham'
.. highlight: bash


wham
====

.. conda:recipe:: wham
   :replaces_section_title:

   Structural variant detection and association testing

   :homepage: https://github.com/zeeev/wham
   :license: MIT / MIT
   :recipe: /`wham <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wham>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wham/meta.yaml>`_
   :links: biotools: :biotools:`Wham6216`

   


.. conda:package:: wham

   |downloads_wham| |docker_wham|

   :versions: 1.8.0.1.2017.05.03, 1.8.0, 1.7.0.311, 1.7.0.307, 1.7.0.162

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_wham|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wham

   and update with::

      conda update wham

   or use the docker container::

      docker pull quay.io/repository/biocontainers/wham


.. |required_by_wham| conda:required_by:: wham
.. |downloads_wham| image:: https://img.shields.io/conda/dn/bioconda/wham.svg?style=flat
   :alt:   (downloads)
.. |docker_wham| image:: https://quay.io/repository/biocontainers/wham/status
   :target: https://quay.io/repository/biocontainers/wham







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wham/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wham/README.html

