.. title:: Package Recipe 'gfapy'
.. highlight: bash


gfapy
=====

.. conda:recipe:: gfapy
   :replaces_section_title:

   Library for handling data in the GFA1 and GFA2 formats

   :homepage: https://github.com/ggonnella/gfapy
   :license: Other / ISC License (ISCL)
   :recipe: /`gfapy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfapy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfapy/meta.yaml>`_

   


.. conda:package:: gfapy

   |downloads_gfapy| |docker_gfapy|

   :versions: 1.0.0, 1.0.0rc10, 1.0.0rc9

   :depends: :conda:package:`python` 3.5* 

   :required~by: |required_by_gfapy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gfapy

   and update with::

      conda update gfapy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gfapy


.. |required_by_gfapy| conda:required_by:: gfapy
.. |downloads_gfapy| image:: https://img.shields.io/conda/dn/bioconda/gfapy.svg?style=flat
   :alt:   (downloads)
.. |docker_gfapy| image:: https://quay.io/repository/biocontainers/gfapy/status
   :target: https://quay.io/repository/biocontainers/gfapy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfapy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfapy/README.html

