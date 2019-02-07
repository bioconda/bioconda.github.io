.. title:: Package Recipe 'bioconductor-rhvdm'
.. highlight: bash


bioconductor-rhvdm
==================

.. conda:recipe:: bioconductor-rhvdm
   :replaces_section_title:

   A R implementation of HVDM \(Genome Biol 2006\, V7\(3\) R25\)

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/rHVDM.html
   :license: GPL-2
   :recipe: /`bioconductor-rhvdm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhvdm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhvdm/meta.yaml>`_

   


.. conda:package:: bioconductor-rhvdm

   |downloads_bioconductor-rhvdm| |docker_bioconductor-rhvdm|

   :versions: 1.48.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-minpack.lm` >=1.0-5 :conda:package:`r-r2html` >=1.5 

   :required~by: |required_by_bioconductor-rhvdm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rhvdm

   and update with::

      conda update bioconductor-rhvdm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rhvdm


.. |required_by_bioconductor-rhvdm| conda:required_by:: bioconductor-rhvdm
.. |downloads_bioconductor-rhvdm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rhvdm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rhvdm| image:: https://quay.io/repository/biocontainers/bioconductor-rhvdm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rhvdm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rhvdm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rhvdm/README.html

