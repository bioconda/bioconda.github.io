.. title:: Package Recipe 'atropos'
.. highlight: bash


atropos
=======

.. conda:recipe:: atropos
   :replaces_section_title:

   trim adapters from high\-throughput sequencing reads

   :homepage: https://atropos.readthedocs.io/
   :license: CC0 and partly MIT
   :recipe: /`atropos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atropos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atropos/meta.yaml>`_

   


.. conda:package:: atropos

   |downloads_atropos| |docker_atropos|

   :versions: 1.1.21, 1.1.19, 1.1.18, 1.1.16, 1.1.10, 1.1.5, 1.1.4, 1.1.2, 1.0.23

   :depends: :conda:package:`jinja2`  :conda:package:`pysam`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`tqdm`  

   :required~by: |required_by_atropos|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install atropos

   and update with::

      conda update atropos

   or use the docker container::

      docker pull quay.io/repository/biocontainers/atropos


.. |required_by_atropos| conda:required_by:: atropos
.. |downloads_atropos| image:: https://img.shields.io/conda/dn/bioconda/atropos.svg?style=flat
   :alt:   (downloads)
.. |docker_atropos| image:: https://quay.io/repository/biocontainers/atropos/status
   :target: https://quay.io/repository/biocontainers/atropos







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atropos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atropos/README.html

