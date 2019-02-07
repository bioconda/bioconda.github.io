.. title:: Package Recipe 'cortexpy'
.. highlight: bash


cortexpy
========

.. conda:recipe:: cortexpy
   :replaces_section_title:

   A Python API for manipulating \(Mc\)Cortex de novo assembly graph and link data

   :homepage: https://github.com/winni2k/cortexpy
   :license: APACHE / Apache Software
   :recipe: /`cortexpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cortexpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cortexpy/meta.yaml>`_

   


.. conda:package:: cortexpy

   |downloads_cortexpy| |docker_cortexpy|

   :versions: 0.45.7, 0.45.6, 0.44.0, 0.41.1

   :depends: :conda:package:`attrs`  :conda:package:`biopython`  :conda:package:`delegation`  :conda:package:`msgpack-python`  :conda:package:`networkx`  :conda:package:`numpy`  :conda:package:`python` >=3.6,<3.7.0a0 :conda:package:`pyyaml`  :conda:package:`schema`  

   :required~by: |required_by_cortexpy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cortexpy

   and update with::

      conda update cortexpy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cortexpy


.. |required_by_cortexpy| conda:required_by:: cortexpy
.. |downloads_cortexpy| image:: https://img.shields.io/conda/dn/bioconda/cortexpy.svg?style=flat
   :alt:   (downloads)
.. |docker_cortexpy| image:: https://quay.io/repository/biocontainers/cortexpy/status
   :target: https://quay.io/repository/biocontainers/cortexpy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cortexpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cortexpy/README.html

