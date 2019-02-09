.. title:: Package Recipe 'alignstats'
.. highlight: bash


alignstats
==========

.. conda:recipe:: alignstats
   :replaces_section_title:

   Comprehensive alignment\, whole\-genome coverage\, and capture coverage statistics.

   :homepage: https://github.com/jfarek/alignstats
   :license: BSD
   :recipe: /`alignstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignstats/meta.yaml>`_

   


.. conda:package:: alignstats

   |downloads_alignstats| |docker_alignstats|

   :versions: 0.5, 0.3

   :depends: :conda:package:`htslib` >=1.9,<1.10.0a0 

   :required~by: |required_by_alignstats|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install alignstats

   and update with::

      conda update alignstats

   or use the docker container::

      docker pull quay.io/repository/biocontainers/alignstats


.. |required_by_alignstats| conda:required_by:: alignstats
.. |downloads_alignstats| image:: https://img.shields.io/conda/dn/bioconda/alignstats.svg?style=flat
   :alt:   (downloads)
.. |docker_alignstats| image:: https://quay.io/repository/biocontainers/alignstats/status
   :target: https://quay.io/repository/biocontainers/alignstats







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alignstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alignstats/README.html

