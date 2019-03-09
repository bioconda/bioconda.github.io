:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-giant'
.. highlight: bash

r-giant
=======

.. conda:recipe:: r-giant
   :replaces_section_title:

   Toolbox for various enrichment analysis methods and quantification of uncertainty of gene sets.

   :homepage: https://CRAN.R-project.org/package=GiANT
   :license: OTHER / Artistic-2.0
   :recipe: /`r-giant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-giant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-giant/meta.yaml>`_

   


.. conda:package:: r-giant

   |downloads_r-giant| |docker_r-giant|

   :versions: 1.2-0
   
   :depends r-base: 3.2.2*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-giant

   and update with::

      conda update r-giant

   or use the docker container::

      docker pull quay.io/biocontainers/r-giant:<tag>

   (see `r-giant/tags`_ for valid values for ``<tag>``)


.. |downloads_r-giant| image:: https://img.shields.io/conda/dn/bioconda/r-giant.svg?style=flat
   :alt:   (downloads)
.. |docker_r-giant| image:: https://quay.io/repository/biocontainers/r-giant/status
   :target: https://quay.io/repository/biocontainers/r-giant
.. _`r-giant/tags`: https://quay.io/repository/biocontainers/r-giant?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-giant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-giant/README.html