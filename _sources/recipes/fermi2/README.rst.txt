.. title:: Package Recipe 'fermi2'
.. highlight: bash


fermi2
======

.. conda:recipe:: fermi2
   :replaces_section_title:

   Fermi2 focuses on the exploration of FMD\-index as a graph.

   :homepage: https://github.com/lh3/fermi2
   :license: Unknown
   :recipe: /`fermi2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermi2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermi2/meta.yaml>`_

   


.. conda:package:: fermi2

   |downloads_fermi2| |docker_fermi2|

   :versions: r193, r188

   :depends: :conda:package:`bfc`  :conda:package:`libgcc-ng` >=4.9 :conda:package:`perl`  :conda:package:`ropebwt2`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_fermi2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fermi2

   and update with::

      conda update fermi2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fermi2


.. |required_by_fermi2| conda:required_by:: fermi2
.. |downloads_fermi2| image:: https://img.shields.io/conda/dn/bioconda/fermi2.svg?style=flat
   :alt:   (downloads)
.. |docker_fermi2| image:: https://quay.io/repository/biocontainers/fermi2/status
   :target: https://quay.io/repository/biocontainers/fermi2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fermi2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fermi2/README.html

