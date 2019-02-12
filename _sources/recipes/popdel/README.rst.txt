.. title:: Package Recipe 'popdel'
.. highlight: bash


popdel
======

.. conda:recipe:: popdel
   :replaces_section_title:

   Fast structural deletion calling on population\-scale short read paired\-end germline WGS data.

   :homepage: https://github.com/kehrlab/PopDel
   :license: GPL-3.0
   :recipe: /`popdel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popdel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popdel/meta.yaml>`_

   


.. conda:package:: popdel

   |downloads_popdel| |docker_popdel|

   :versions: 1.0.8, 1.0.7, 1.0.6, 1.0.5, 1.0.4, 1.0.3, 1.0.2, 1.0.1

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_popdel|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install popdel

   and update with::

      conda update popdel

   or use the docker container::

      docker pull quay.io/repository/biocontainers/popdel


.. |required_by_popdel| conda:required_by:: popdel
.. |downloads_popdel| image:: https://img.shields.io/conda/dn/bioconda/popdel.svg?style=flat
   :alt:   (downloads)
.. |docker_popdel| image:: https://quay.io/repository/biocontainers/popdel/status
   :target: https://quay.io/repository/biocontainers/popdel







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/popdel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/popdel/README.html

