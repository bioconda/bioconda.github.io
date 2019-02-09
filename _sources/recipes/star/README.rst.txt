.. title:: Package Recipe 'star'
.. highlight: bash


star
====

.. conda:recipe:: star
   :replaces_section_title:

   An RNA\-seq read aligner.

   :homepage: https://github.com/alexdobin/STAR
   :license: GPLv3
   :recipe: /`star <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/star>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/star/meta.yaml>`_
   :links: biotools: :biotools:`star`

   


.. conda:package:: star

   |downloads_star| |docker_star|

   :versions: 2.7.0b, 2.6.1b, 2.6.1a, 2.6.0c, 2.6.0b, 2.5.4a, 2.5.3a, 2.5.2b, 2.5.2a, 2.5.1b, 2.5.0c, 2.5.0b, 2.5.0a, 2.4.2a, 2.4.0j

   :depends: 

   :required~by: |required_by_star|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install star

   and update with::

      conda update star

   or use the docker container::

      docker pull quay.io/repository/biocontainers/star


.. |required_by_star| conda:required_by:: star
.. |downloads_star| image:: https://img.shields.io/conda/dn/bioconda/star.svg?style=flat
   :alt:   (downloads)
.. |docker_star| image:: https://quay.io/repository/biocontainers/star/status
   :target: https://quay.io/repository/biocontainers/star







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/star/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/star/README.html

