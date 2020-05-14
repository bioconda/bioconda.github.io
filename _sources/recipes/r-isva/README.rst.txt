:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-isva'
.. highlight: bash

r-isva
======

.. conda:recipe:: r-isva
   :replaces_section_title:

   Independent Surrogate Variable Analysis is an algorithm for feature selection in the presence of potential confounding factors \(see Teschendorff AE et al 2011\, \<doi\: 10.1093\/bioinformatics\/btr171\>\).

   :homepage: https://CRAN.R-project.org/package=isva
   :license: GPL2 / GPL-2
   :recipe: /`r-isva <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-isva>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-isva/meta.yaml>`_

   


.. conda:package:: r-isva

   |downloads_r-isva| |docker_r-isva|

   :versions: 1.9-2, 1.9-1, 1.9-0
   
   :depends bioconductor-qvalue: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-fastica: 
   :depends r-jade: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-isva

   and update with::

      conda update r-isva

   or use the docker container::

      docker pull quay.io/biocontainers/r-isva:<tag>

   (see `r-isva/tags`_ for valid values for ``<tag>``)


.. |downloads_r-isva| image:: https://img.shields.io/conda/dn/bioconda/r-isva.svg?style=flat
   :target: https://anaconda.org/bioconda/r-isva
   :alt:   (downloads)
.. |docker_r-isva| image:: https://quay.io/repository/biocontainers/r-isva/status
   :target: https://quay.io/repository/biocontainers/r-isva
.. _`r-isva/tags`: https://quay.io/repository/biocontainers/r-isva?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-isva/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-isva/README.html