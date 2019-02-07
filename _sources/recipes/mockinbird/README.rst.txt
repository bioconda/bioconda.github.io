.. title:: Package Recipe 'mockinbird'
.. highlight: bash


mockinbird
==========

.. conda:recipe:: mockinbird
   :replaces_section_title:

   A fully automatic and reproducible PAR\-CLIP analysis pipeline

   :homepage: https://github.com/soedinglab/mockinbird
   :documentation: http://wwwuser.gwdg.de/~compbiol/mockinbird/doc/
   
   :license: GPL3 / GPL-3
   :recipe: /`mockinbird <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mockinbird>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mockinbird/meta.yaml>`_

   


.. conda:package:: mockinbird

   |downloads_mockinbird| |docker_mockinbird|

   :versions: 1.0.0a1

   :depends: :conda:package:`bowtie`  :conda:package:`fastqc`  :conda:package:`jinja2`  :conda:package:`libgcc-ng` >=4.9 :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`pysam`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`pyyaml`  :conda:package:`r-base`  :conda:package:`r-lsd`  :conda:package:`samtools`  :conda:package:`scipy`  :conda:package:`seaborn`  :conda:package:`star`  :conda:package:`xxmotif`  

   :required~by: |required_by_mockinbird|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mockinbird

   and update with::

      conda update mockinbird

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mockinbird


.. |required_by_mockinbird| conda:required_by:: mockinbird
.. |downloads_mockinbird| image:: https://img.shields.io/conda/dn/bioconda/mockinbird.svg?style=flat
   :alt:   (downloads)
.. |docker_mockinbird| image:: https://quay.io/repository/biocontainers/mockinbird/status
   :target: https://quay.io/repository/biocontainers/mockinbird







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mockinbird/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mockinbird/README.html

