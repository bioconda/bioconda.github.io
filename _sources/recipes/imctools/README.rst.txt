.. title:: Package Recipe 'imctools'
.. highlight: bash


imctools
========

.. conda:recipe:: imctools
   :replaces_section_title:

   An Image Mass Cytometry \(IMC\) file conversion tool that aims to convert IMC rawfiles \(.mcd\, .txt\) into an intermediary ome.tiff\, containing all the relevant metadata. Further it contains tools to generate simpler tiff files that can be directly be used as input files for e.g. CellProfiller\, Ilastik\, Fiji etc

   :homepage: https://github.com/BodenmillerGroup/imctools
   :documentation: https://github.com/BodenmillerGroup/imctools/blob/master/README.md
   
   :license: MIT
   :recipe: /`imctools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imctools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imctools/meta.yaml>`_

   


.. conda:package:: imctools

   |downloads_imctools| |docker_imctools|

   :versions: 0.2

   :depends: :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python`  :conda:package:`scikit-image`  :conda:package:`scipy`  :conda:package:`tifffile` >=0.13.5 

   :required~by: |required_by_imctools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install imctools

   and update with::

      conda update imctools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/imctools


.. |required_by_imctools| conda:required_by:: imctools
.. |downloads_imctools| image:: https://img.shields.io/conda/dn/bioconda/imctools.svg?style=flat
   :alt:   (downloads)
.. |docker_imctools| image:: https://quay.io/repository/biocontainers/imctools/status
   :target: https://quay.io/repository/biocontainers/imctools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/imctools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/imctools/README.html

