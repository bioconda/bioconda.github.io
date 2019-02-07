.. title:: Package Recipe 'macs2'
.. highlight: bash


macs2
=====

.. conda:recipe:: macs2
   :replaces_section_title:

   Model Based Analysis for ChIP\-Seq data

   :homepage: http://github.com/taoliu/MACS/
   :license: BSD / BSD
   :recipe: /`macs2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macs2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macs2/meta.yaml>`_

   


.. conda:package:: macs2

   |downloads_macs2| |docker_macs2|

   :versions: 2.1.2, 2.1.1.20160309, 2.1.1, 2.1.0

   :depends: :conda:package:`numpy` >=1.6 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 

   :required~by: |required_by_macs2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install macs2

   and update with::

      conda update macs2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/macs2


.. |required_by_macs2| conda:required_by:: macs2
.. |downloads_macs2| image:: https://img.shields.io/conda/dn/bioconda/macs2.svg?style=flat
   :alt:   (downloads)
.. |docker_macs2| image:: https://quay.io/repository/biocontainers/macs2/status
   :target: https://quay.io/repository/biocontainers/macs2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/macs2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/macs2/README.html

