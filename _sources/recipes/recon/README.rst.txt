.. title:: Package Recipe 'recon'
.. highlight: bash


recon
=====

.. conda:recipe:: recon
   :replaces_section_title:

   The RECON package performs de novo identification and classification of repeat sequence families from genomic sequences.

   :homepage: http://eddylab.org/software/recon/
   :license: GNU General Public License
   :recipe: /`recon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recon/meta.yaml>`_

   


.. conda:package:: recon

   |downloads_recon| |docker_recon|

   :versions: 1.08

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_recon|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install recon

   and update with::

      conda update recon

   or use the docker container::

      docker pull quay.io/repository/biocontainers/recon


.. |required_by_recon| conda:required_by:: recon
.. |downloads_recon| image:: https://img.shields.io/conda/dn/bioconda/recon.svg?style=flat
   :alt:   (downloads)
.. |docker_recon| image:: https://quay.io/repository/biocontainers/recon/status
   :target: https://quay.io/repository/biocontainers/recon







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recon/README.html

