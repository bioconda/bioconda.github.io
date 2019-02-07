.. title:: Package Recipe 'gridss'
.. highlight: bash


gridss
======

.. conda:recipe:: gridss
   :replaces_section_title:

   GRIDSS\: a Genomic Rearrangement IDentification Software Suite

   :homepage: https://github.com/PapenfussLab/gridss
   :license: GPL / GPL-3.0
   :recipe: /`gridss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gridss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gridss/meta.yaml>`_
   :links: biotools: :biotools:`gridss`, doi: :doi:`10.1101/110387`

   


.. conda:package:: gridss

   |downloads_gridss| |docker_gridss|

   :versions: 2.1.0, 2.0.1, 1.9.0, 1.8.1, 1.8.0, 1.7.2, 1.3.4, 1.3.2, 1.3.0, 1.2.4

   :depends: :conda:package:`openjdk` >=8 :conda:package:`python`  

   :required~by: |required_by_gridss|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gridss

   and update with::

      conda update gridss

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gridss


.. |required_by_gridss| conda:required_by:: gridss
.. |downloads_gridss| image:: https://img.shields.io/conda/dn/bioconda/gridss.svg?style=flat
   :alt:   (downloads)
.. |docker_gridss| image:: https://quay.io/repository/biocontainers/gridss/status
   :target: https://quay.io/repository/biocontainers/gridss







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gridss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gridss/README.html

