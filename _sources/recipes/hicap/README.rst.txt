.. title:: Package Recipe 'hicap'
.. highlight: bash


hicap
=====

.. conda:recipe:: hicap
   :replaces_section_title:

   In silico typing of the H. influenzae capsule locus

   :homepage: https://github.com/scwatts/hicap
   :license: GPL / GPL-3.0
   :recipe: /`hicap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicap/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1101/543454`

   


.. conda:package:: hicap

   |downloads_hicap| |docker_hicap|

   :versions: 1.0.0

   :depends: :conda:package:`biopython` 1.72 :conda:package:`blast` >=2.2.28 :conda:package:`prodigal` >=2.6.1 :conda:package:`python` >=3.6 :conda:package:`reportlab` 3.4.0 

   :required~by: |required_by_hicap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hicap

   and update with::

      conda update hicap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hicap


.. |required_by_hicap| conda:required_by:: hicap
.. |downloads_hicap| image:: https://img.shields.io/conda/dn/bioconda/hicap.svg?style=flat
   :alt:   (downloads)
.. |docker_hicap| image:: https://quay.io/repository/biocontainers/hicap/status
   :target: https://quay.io/repository/biocontainers/hicap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hicap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hicap/README.html

