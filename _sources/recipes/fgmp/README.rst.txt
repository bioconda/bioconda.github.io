.. title:: Package Recipe 'fgmp'
.. highlight: bash


fgmp
====

.. conda:recipe:: fgmp
   :replaces_section_title:

   FGMP\: assessing fungal genome completeness and gene content.

   :homepage: https://github.com/stajichlab/FGMP
   :license: MIT
   :recipe: /`fgmp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgmp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgmp/meta.yaml>`_
   :links: biotools: :biotools:`fgmp`, doi: :doi:`10.1101/049619`

   


.. conda:package:: fgmp

   |downloads_fgmp| |docker_fgmp|

   :versions: 1.0.1

   :depends: :conda:package:`augustus` >=3.0 :conda:package:`blast` 2.2.31 :conda:package:`emboss` >=6.5.7 :conda:package:`exonerate` >=2.2.0 :conda:package:`hmmer` >=3.0 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-app-cpanminus`  :conda:package:`perl-bioperl`  :conda:package:`perl-ipc-run`  

   :required~by: |required_by_fgmp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fgmp

   and update with::

      conda update fgmp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fgmp


.. |required_by_fgmp| conda:required_by:: fgmp
.. |downloads_fgmp| image:: https://img.shields.io/conda/dn/bioconda/fgmp.svg?style=flat
   :alt:   (downloads)
.. |docker_fgmp| image:: https://quay.io/repository/biocontainers/fgmp/status
   :target: https://quay.io/repository/biocontainers/fgmp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fgmp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fgmp/README.html

