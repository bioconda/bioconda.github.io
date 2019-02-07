.. title:: Package Recipe 'ig-checkfcs'
.. highlight: bash


ig-checkfcs
===========

.. conda:recipe:: ig-checkfcs
   :replaces_section_title:

   quick FCS datatype check

   :homepage: https://github.com/ImmPortDB/ig-checkfcs
   :license: BSD / BSD License
   :recipe: /`ig-checkfcs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ig-checkfcs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ig-checkfcs/meta.yaml>`_

   


.. conda:package:: ig-checkfcs

   |downloads_ig-checkfcs| |docker_ig-checkfcs|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-flowcore`  :conda:package:`r` >=2.10.0 

   :required~by: |required_by_ig-checkfcs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ig-checkfcs

   and update with::

      conda update ig-checkfcs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ig-checkfcs


.. |required_by_ig-checkfcs| conda:required_by:: ig-checkfcs
.. |downloads_ig-checkfcs| image:: https://img.shields.io/conda/dn/bioconda/ig-checkfcs.svg?style=flat
   :alt:   (downloads)
.. |docker_ig-checkfcs| image:: https://quay.io/repository/biocontainers/ig-checkfcs/status
   :target: https://quay.io/repository/biocontainers/ig-checkfcs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ig-checkfcs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ig-checkfcs/README.html

