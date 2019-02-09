.. title:: Package Recipe 'filtlong'
.. highlight: bash


filtlong
========

.. conda:recipe:: filtlong
   :replaces_section_title:

   Filtlong is a tool for filtering long reads. It can take a set of long reads and produce a smaller\, better subset. It uses both read length \(longer is better\) and read identity \(higher is better\) when choosing which reads pass the filter.

   :homepage: https://github.com/rrwick/Filtlong
   :license: GPL-3.0
   :recipe: /`filtlong <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/filtlong>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/filtlong/meta.yaml>`_

   


.. conda:package:: filtlong

   |downloads_filtlong| |docker_filtlong|

   :versions: 0.2.0, 0.1.1, 0.1.0

   :depends: :conda:package:`zlib` 1.2.8* 

   :required~by: |required_by_filtlong|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install filtlong

   and update with::

      conda update filtlong

   or use the docker container::

      docker pull quay.io/repository/biocontainers/filtlong


.. |required_by_filtlong| conda:required_by:: filtlong
.. |downloads_filtlong| image:: https://img.shields.io/conda/dn/bioconda/filtlong.svg?style=flat
   :alt:   (downloads)
.. |docker_filtlong| image:: https://quay.io/repository/biocontainers/filtlong/status
   :target: https://quay.io/repository/biocontainers/filtlong







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/filtlong/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/filtlong/README.html

