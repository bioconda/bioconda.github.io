:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-peacoqc'
.. highlight: bash

bioconductor-peacoqc
====================

.. conda:recipe:: bioconductor-peacoqc
   :replaces_section_title:
   :noindex:

   Peak\-based selection of high quality cytometry data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/PeacoQC.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-peacoqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peacoqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peacoqc/meta.yaml>`_

   This is a package that includes pre\-processing and quality control functions that can remove margin events\, compensate and transform the data and that will use PeacoQCSignalStability for quality control. This last function will first detect peaks in each channel of the flowframe. It will remove anomalies based on the IsolationTree function and the MAD outlier detection method. This package can be used for both flow\- and mass cytometry data.


.. conda:package:: bioconductor-peacoqc

   |downloads_bioconductor-peacoqc| |docker_bioconductor-peacoqc|

   :versions:
      
      

      ``1.2.0-0``,  ``0.99.25-2``,  ``0.99.25-1``

      

   
   :depends bioconductor-complexheatmap: ``>=2.8.0,<2.9.0``
   :depends bioconductor-flowcore: ``>=2.4.0,<2.5.0``
   :depends bioconductor-flowworkspace: ``>=4.4.0,<4.5.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-circlize: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-peacoqc

   and update with::

      conda update bioconductor-peacoqc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-peacoqc:<tag>

   (see `bioconductor-peacoqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-peacoqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-peacoqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-peacoqc
   :alt:   (downloads)
.. |docker_bioconductor-peacoqc| image:: https://quay.io/repository/biocontainers/bioconductor-peacoqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-peacoqc
.. _`bioconductor-peacoqc/tags`: https://quay.io/repository/biocontainers/bioconductor-peacoqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-peacoqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-peacoqc/README.html