.. title:: Package Recipe 'fermi'
.. highlight: bash


fermi
=====

.. conda:recipe:: fermi
   :replaces_section_title:

   A WGS de novo assembler based on the FMD\-index for large genomes

   :homepage: https://github.com/lh3/fermi
   :license: Unknown
   :recipe: /`fermi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermi/meta.yaml>`_

   


.. conda:package:: fermi

   |downloads_fermi| |docker_fermi|

   :versions: 1.1_r751_beta

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_fermi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fermi

   and update with::

      conda update fermi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fermi


.. |required_by_fermi| conda:required_by:: fermi
.. |downloads_fermi| image:: https://img.shields.io/conda/dn/bioconda/fermi.svg?style=flat
   :alt:   (downloads)
.. |docker_fermi| image:: https://quay.io/repository/biocontainers/fermi/status
   :target: https://quay.io/repository/biocontainers/fermi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fermi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fermi/README.html

