.. title:: Package Recipe 'bwapy'
.. highlight: bash


bwapy
=====

.. conda:recipe:: bwapy
   :replaces_section_title:

   Bwapy provides python wrappers for bwa.

   :homepage: https://github.com/nanoporetech/bwapy
   :license: Mozilla Public License Version 2.0
   :recipe: /`bwapy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwapy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwapy/meta.yaml>`_

   


.. conda:package:: bwapy

   |downloads_bwapy| |docker_bwapy|

   :versions: 0.1.4

   :depends: :conda:package:`cffi`  :conda:package:`python` 3.5* :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_bwapy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bwapy

   and update with::

      conda update bwapy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bwapy


.. |required_by_bwapy| conda:required_by:: bwapy
.. |downloads_bwapy| image:: https://img.shields.io/conda/dn/bioconda/bwapy.svg?style=flat
   :alt:   (downloads)
.. |docker_bwapy| image:: https://quay.io/repository/biocontainers/bwapy/status
   :target: https://quay.io/repository/biocontainers/bwapy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwapy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwapy/README.html

