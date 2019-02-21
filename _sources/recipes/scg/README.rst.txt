:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scg'
.. highlight: bash

scg
===

.. conda:recipe:: scg
   :replaces_section_title:

   The single cell genotyper \(SCG\)\: \"Roth A\, McPherson A\, Laks E\, Biele J\, Yap D\, Wan A\, et al. Clonal genotype and population structure inference from single\-cell tumor sequencing. Nat Meth. 2016\;13\: 573–576. doi\:10.1038\/nmeth.3867\"

   :homepage: https://bitbucket.org/aroth85/scg/wiki/Home
   :license: GPL-3
   :recipe: /`scg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scg/meta.yaml>`_

   


.. conda:package:: scg

   |downloads_scg| |docker_scg|

   :versions: 0.3.1-1, 0.3.1-0
   
   :depends numpy: >=1.9.2
   
   :depends pandas: >=0.16
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends pyyaml: 
   
   :depends scipy: >=0.15
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scg

   and update with::

      conda update scg

   or use the docker container::

      docker pull quay.io/biocontainers/scg:<tag>

   (see `scg/tags`_ for valid values for ``<tag>``)


.. |downloads_scg| image:: https://img.shields.io/conda/dn/bioconda/scg.svg?style=flat
   :alt:   (downloads)
.. |docker_scg| image:: https://quay.io/repository/biocontainers/scg/status
   :target: https://quay.io/repository/biocontainers/scg
.. _`scg/tags`: https://quay.io/repository/biocontainers/scg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scg/README.html