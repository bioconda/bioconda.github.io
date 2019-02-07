.. title:: Package Recipe 'agg'
.. highlight: bash


agg
===

.. conda:recipe:: agg
   :replaces_section_title:

   gvcf aggregation tool

   :homepage: https://github.com/Illumina/agg
   :license: GPL3
   :recipe: /`agg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agg/meta.yaml>`_

   


.. conda:package:: agg

   |downloads_agg| |docker_agg|

   :versions: 0.3.6, 0.3.5

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_agg|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install agg

   and update with::

      conda update agg

   or use the docker container::

      docker pull quay.io/repository/biocontainers/agg


.. |required_by_agg| conda:required_by:: agg
.. |downloads_agg| image:: https://img.shields.io/conda/dn/bioconda/agg.svg?style=flat
   :alt:   (downloads)
.. |docker_agg| image:: https://quay.io/repository/biocontainers/agg/status
   :target: https://quay.io/repository/biocontainers/agg







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/agg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/agg/README.html

