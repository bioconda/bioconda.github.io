.. title:: Package Recipe 'control-freec'
.. highlight: bash


control-freec
=============

.. conda:recipe:: control-freec
   :replaces_section_title:

   Copy number and genotype annotation from whole genome and whole exome
   sequencing data.


   :homepage: https://github.com/BoevaLab/FREEC
   :license: GPL (>=2)
   :recipe: /`control-freec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/control-freec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/control-freec/meta.yaml>`_
   :links: biotools: :biotools:`freec`

   


.. conda:package:: control-freec

   |downloads_control-freec| |docker_control-freec|

   :versions: 11.4, 10.6, 10.5

   :depends: :conda:package:`bioconductor-rtracklayer`  :conda:package:`libgcc-ng` >=4.9 :conda:package:`perl`  :conda:package:`r-base`  

   :required~by: |required_by_control-freec|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install control-freec

   and update with::

      conda update control-freec

   or use the docker container::

      docker pull quay.io/repository/biocontainers/control-freec


.. |required_by_control-freec| conda:required_by:: control-freec
.. |downloads_control-freec| image:: https://img.shields.io/conda/dn/bioconda/control-freec.svg?style=flat
   :alt:   (downloads)
.. |docker_control-freec| image:: https://quay.io/repository/biocontainers/control-freec/status
   :target: https://quay.io/repository/biocontainers/control-freec






Notes
-----
The tool will be available as \`freec\` in the command line.
See the homepage for example config files. Auxiliary scripts
like e.g. freec2bed.pl and freec2circos.pl \(see homepage\) are available in the
command line as well.



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/control-freec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/control-freec/README.html

