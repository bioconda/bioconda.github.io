:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-psygenet2r'
.. highlight: bash

bioconductor-psygenet2r
=======================

.. conda:recipe:: bioconductor-psygenet2r
   :replaces_section_title:

   Package to retrieve data from PsyGeNET database \(www.psygenet.org\) and to perform comorbidity studies with PsyGeNET\'s and user\'s data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/psygenet2r.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-psygenet2r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-psygenet2r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-psygenet2r/meta.yaml>`_
   :links: biotools: :biotools:`psygenet2r`, doi: :doi:`10.1093/bioinformatics/btv301`

   


.. conda:package:: bioconductor-psygenet2r

   |downloads_bioconductor-psygenet2r| |docker_bioconductor-psygenet2r|

   :versions: 1.14.0-0, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-bgeedb: >=2.8.0,<2.9.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biomart: >=2.38.0,<2.39.0
   :depends bioconductor-go.db: >=3.7.0,<3.8.0
   :depends bioconductor-topgo: >=2.34.0,<2.35.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-biocmanager: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-labeling: 
   :depends r-rcurl: 
   :depends r-reshape2: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-psygenet2r

   and update with::

      conda update bioconductor-psygenet2r

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-psygenet2r:<tag>

   (see `bioconductor-psygenet2r/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-psygenet2r| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-psygenet2r.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-psygenet2r
   :alt:   (downloads)
.. |docker_bioconductor-psygenet2r| image:: https://quay.io/repository/biocontainers/bioconductor-psygenet2r/status
   :target: https://quay.io/repository/biocontainers/bioconductor-psygenet2r
.. _`bioconductor-psygenet2r/tags`: https://quay.io/repository/biocontainers/bioconductor-psygenet2r?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-psygenet2r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-psygenet2r/README.html