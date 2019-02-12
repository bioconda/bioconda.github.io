.. title:: Package Recipe 'kalign2'
.. highlight: bash


kalign2
=======

.. conda:recipe:: kalign
   :replaces_section_title:

   Kalign is a fast and accurate multiple sequence alignment algorithm designed to align large numbers of protein sequences.

   :homepage: http://msa.sbc.su.se/cgi-bin/msa.cgi
   :license: GPLv2
   :recipe: /`kalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kalign/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-6-298`

   


.. conda:package:: kalign2

   |downloads_kalign2| |docker_kalign2|

   :versions: 2.04

   :depends: :conda:package:`libgcc-ng` >=4.9 

   :required~by: |required_by_kalign2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kalign2

   and update with::

      conda update kalign2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kalign2


.. |required_by_kalign2| conda:required_by:: kalign2
.. |downloads_kalign2| image:: https://img.shields.io/conda/dn/bioconda/kalign2.svg?style=flat
   :alt:   (downloads)
.. |docker_kalign2| image:: https://quay.io/repository/biocontainers/kalign2/status
   :target: https://quay.io/repository/biocontainers/kalign2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kalign2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kalign2/README.html

