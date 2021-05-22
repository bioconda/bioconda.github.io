:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multiqc_sav'
.. highlight: bash

multiqc_sav
===========

.. conda:recipe:: multiqc_sav
   :replaces_section_title:
   :noindex:

   MultiQC plugin to visualize Illumina SAV plots

   :homepage: http://multiqc.info
   :license: GPL3
   :recipe: /`multiqc_sav <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc_sav>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc_sav/meta.yaml>`_

   


.. conda:package:: multiqc_sav

   |downloads_multiqc_sav| |docker_multiqc_sav|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends illumina-interop: ``>=1.1.23``
   :depends multiqc: ``>=1.2``
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install multiqc_sav

   and update with::

      conda update multiqc_sav

   or use the docker container::

      docker pull quay.io/biocontainers/multiqc_sav:<tag>

   (see `multiqc_sav/tags`_ for valid values for ``<tag>``)


.. |downloads_multiqc_sav| image:: https://img.shields.io/conda/dn/bioconda/multiqc_sav.svg?style=flat
   :target: https://anaconda.org/bioconda/multiqc_sav
   :alt:   (downloads)
.. |docker_multiqc_sav| image:: https://quay.io/repository/biocontainers/multiqc_sav/status
   :target: https://quay.io/repository/biocontainers/multiqc_sav
.. _`multiqc_sav/tags`: https://quay.io/repository/biocontainers/multiqc_sav?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multiqc_sav/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multiqc_sav/README.html