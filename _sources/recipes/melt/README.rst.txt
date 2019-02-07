.. title:: Package Recipe 'melt'
.. highlight: bash


melt
====

.. conda:recipe:: melt
   :replaces_section_title:

   A nucleotide melt temp calculator

   :homepage: https://github.com/eclarke/melt
   :license: GNU General Public License (GPL)
   :recipe: /`melt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/melt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/melt/meta.yaml>`_

   


.. conda:package:: melt

   |downloads_melt| |docker_melt|

   :versions: 1.0.3

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_melt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install melt

   and update with::

      conda update melt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/melt


.. |required_by_melt| conda:required_by:: melt
.. |downloads_melt| image:: https://img.shields.io/conda/dn/bioconda/melt.svg?style=flat
   :alt:   (downloads)
.. |docker_melt| image:: https://quay.io/repository/biocontainers/melt/status
   :target: https://quay.io/repository/biocontainers/melt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/melt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/melt/README.html

