:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'imctools'
.. highlight: bash

imctools
========

.. conda:recipe:: imctools
   :replaces_section_title:
   :noindex:

   An Image Mass Cytometry \(IMC\) file conversion tool that aims to convert IMC rawfiles \(.mcd\, .txt\) into an intermediary ome.tiff\, containing all the relevant metadata. Further it contains tools to generate simpler tiff files that can be directly be used as input files for e.g. CellProfiller\, Ilastik\, Fiji etc

   :homepage: https://github.com/BodenmillerGroup/imctools
   :documentation: https://github.com/BodenmillerGroup/imctools/blob/master/README.md
   
   :license: MIT
   :recipe: /`imctools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imctools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imctools/meta.yaml>`_

   


.. conda:package:: imctools

   |downloads_imctools| |docker_imctools|

   :versions:
      
      

      ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-0``,  ``0.2-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scikit-image: 
   :depends scipy: 
   :depends tifffile: ``>=0.13.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install imctools

   and update with::

      conda update imctools

   or use the docker container::

      docker pull quay.io/biocontainers/imctools:<tag>

   (see `imctools/tags`_ for valid values for ``<tag>``)


.. |downloads_imctools| image:: https://img.shields.io/conda/dn/bioconda/imctools.svg?style=flat
   :target: https://anaconda.org/bioconda/imctools
   :alt:   (downloads)
.. |docker_imctools| image:: https://quay.io/repository/biocontainers/imctools/status
   :target: https://quay.io/repository/biocontainers/imctools
.. _`imctools/tags`: https://quay.io/repository/biocontainers/imctools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/imctools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/imctools/README.html