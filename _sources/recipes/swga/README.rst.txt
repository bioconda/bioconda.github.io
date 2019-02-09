.. title:: Package Recipe 'swga'
.. highlight: bash


swga
====

.. conda:recipe:: swga
   :replaces_section_title:

   Select primer sets for selective whole genome amplification \(SWGA\)

   :homepage: https://github.com/eclarke/swga
   :license: GPL / GPL-3.0
   :recipe: /`swga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swga/meta.yaml>`_

   


.. conda:package:: swga

   |downloads_swga| |docker_swga|

   :versions: 0.4.4, 0.4.3.p1, 0.4.2

   :depends: :conda:package:`argutils`  :conda:package:`click`  :conda:package:`melt`  :conda:package:`peewee` >=2.7.3,<3.0 :conda:package:`pyfaidx` >0.4.5.2 :conda:package:`pytest`  :conda:package:`python` 2.7* :conda:package:`pyyaml`  :conda:package:`semantic_version`  :conda:package:`setuptools`  :conda:package:`workspace`  

   :required~by: |required_by_swga|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install swga

   and update with::

      conda update swga

   or use the docker container::

      docker pull quay.io/repository/biocontainers/swga


.. |required_by_swga| conda:required_by:: swga
.. |downloads_swga| image:: https://img.shields.io/conda/dn/bioconda/swga.svg?style=flat
   :alt:   (downloads)
.. |docker_swga| image:: https://quay.io/repository/biocontainers/swga/status
   :target: https://quay.io/repository/biocontainers/swga







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/swga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/swga/README.html

