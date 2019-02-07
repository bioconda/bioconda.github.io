.. title:: Package Recipe 'menetools'
.. highlight: bash


menetools
=========

.. conda:recipe:: menetools/1.0.4_1
   :replaces_section_title:

   Python 3 Metabolic Network Topology Tools

   :homepage: https://github.com/cfrioux/MeneTools
   :license: GPLv3+
   :recipe: /`menetools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/menetools>`_/`1.0.4_1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/menetools/1.0.4_1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/menetools/1.0.4_1/meta.yaml>`_

   


.. conda:package:: menetools

   |downloads_menetools| |docker_menetools|

   :versions: 1.0.4_1

   :depends: :conda:package:`pyasp` >=1.4.3 :conda:package:`python` 3.5* 

   :required~by: |required_by_menetools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install menetools

   and update with::

      conda update menetools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/menetools


.. |required_by_menetools| conda:required_by:: menetools
.. |downloads_menetools| image:: https://img.shields.io/conda/dn/bioconda/menetools.svg?style=flat
   :alt:   (downloads)
.. |docker_menetools| image:: https://quay.io/repository/biocontainers/menetools/status
   :target: https://quay.io/repository/biocontainers/menetools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/menetools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/menetools/README.html

