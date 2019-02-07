.. title:: Package Recipe 'trim-galore'
.. highlight: bash


trim-galore
===========

.. conda:recipe:: trim-galore
   :replaces_section_title:

   Trim Galore\! is a wrapper script to automate quality and adapter trimming as well as quality control

   :homepage: http://www.bioinformatics.babraham.ac.uk/projects/trim_galore/
   :developer docs: https://github.com/FelixKrueger/TrimGalore
   :license: GPL / GPL
   :recipe: /`trim-galore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trim-galore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trim-galore/meta.yaml>`_

   


.. conda:package:: trim-galore

   |downloads_trim-galore| |docker_trim-galore|

   :versions: 0.5.0, 0.4.5, 0.4.4, 0.4.3, 0.4.1

   :depends: :conda:package:`cutadapt`  :conda:package:`fastqc`  :conda:package:`perl`  

   :required~by: |required_by_trim-galore|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trim-galore

   and update with::

      conda update trim-galore

   or use the docker container::

      docker pull quay.io/repository/biocontainers/trim-galore


.. |required_by_trim-galore| conda:required_by:: trim-galore
.. |downloads_trim-galore| image:: https://img.shields.io/conda/dn/bioconda/trim-galore.svg?style=flat
   :alt:   (downloads)
.. |docker_trim-galore| image:: https://quay.io/repository/biocontainers/trim-galore/status
   :target: https://quay.io/repository/biocontainers/trim-galore







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trim-galore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trim-galore/README.html

