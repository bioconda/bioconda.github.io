:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'control-freec'
.. highlight: bash

control-freec
=============

.. conda:recipe:: control-freec
   :replaces_section_title:
   :noindex:

   Copy number and genotype annotation from whole genome and whole exome
   sequencing data.


   :homepage: https://github.com/BoevaLab/FREEC
   :license: GPL (>=2)
   :recipe: /`control-freec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/control-freec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/control-freec/meta.yaml>`_
   :links: biotools: :biotools:`freec`

   


.. conda:package:: control-freec

   |downloads_control-freec| |docker_control-freec|

   :versions:
      
      

      ``11.6-1``,  ``11.6-0``,  ``11.5-1``,  ``11.5-0``,  ``11.4-0``,  ``10.6-0``,  ``10.5-0``

      

   
   :depends bioconductor-rtracklayer: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends perl: 
   :depends r-base: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install control-freec

   and update with::

      conda update control-freec

   or use the docker container::

      docker pull quay.io/biocontainers/control-freec:<tag>

   (see `control-freec/tags`_ for valid values for ``<tag>``)


.. |downloads_control-freec| image:: https://img.shields.io/conda/dn/bioconda/control-freec.svg?style=flat
   :target: https://anaconda.org/bioconda/control-freec
   :alt:   (downloads)
.. |docker_control-freec| image:: https://quay.io/repository/biocontainers/control-freec/status
   :target: https://quay.io/repository/biocontainers/control-freec
.. _`control-freec/tags`: https://quay.io/repository/biocontainers/control-freec?tab=tags






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