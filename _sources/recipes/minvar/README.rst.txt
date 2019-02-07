.. title:: Package Recipe 'minvar'
.. highlight: bash


minvar
======

.. conda:recipe:: minvar
   :replaces_section_title:

   A tool to detect minority variants in HIV\-1 and HCV populations

   :homepage: https://git.io/minvar
   :license: Custom
   :recipe: /`minvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minvar/meta.yaml>`_

   


.. conda:package:: minvar

   |downloads_minvar| |docker_minvar|

   :versions: 2.2.2, 2.2.1, 2.2, 2.1.3, 2.1.2, 2.1.1, 2.1, 2.0, 1.2b, 1.2a3

   :depends: :conda:package:`bedtools`  :conda:package:`biopython`  :conda:package:`blast` >=2.3 :conda:package:`bwa`  :conda:package:`emboss`  :conda:package:`htslib`  :conda:package:`lofreq` >=2.1.3.1 :conda:package:`pandas`  :conda:package:`pandoc`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`samtools` >=1.3 :conda:package:`seqtk`  :conda:package:`setuptools_scm_git_archive`  :conda:package:`sierrapy`  

   :required~by: |required_by_minvar|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minvar

   and update with::

      conda update minvar

   or use the docker container::

      docker pull quay.io/repository/biocontainers/minvar


.. |required_by_minvar| conda:required_by:: minvar
.. |downloads_minvar| image:: https://img.shields.io/conda/dn/bioconda/minvar.svg?style=flat
   :alt:   (downloads)
.. |docker_minvar| image:: https://quay.io/repository/biocontainers/minvar/status
   :target: https://quay.io/repository/biocontainers/minvar







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minvar/README.html

