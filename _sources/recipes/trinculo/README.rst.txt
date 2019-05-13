:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trinculo'
.. highlight: bash

trinculo
========

.. conda:recipe:: trinculo
   :replaces_section_title:

   A toolkit for carrying out genetic association for
   multi\-category phenotypes. Implements multinomial and ordinal
   association incorporating covariates\, conditional analysis\,
   empirical and non\-emperical priors and fine\-mapping.

   :homepage: https://sourceforge.net/projects/trinculo/
   :license: MIT
   :recipe: /`trinculo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trinculo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trinculo/meta.yaml>`_

   


.. conda:package:: trinculo

   |downloads_trinculo| |docker_trinculo|

   :versions: 0.96-2, 0.96-0
   
   :depends lapack: 
   :depends libgcc-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trinculo

   and update with::

      conda update trinculo

   or use the docker container::

      docker pull quay.io/biocontainers/trinculo:<tag>

   (see `trinculo/tags`_ for valid values for ``<tag>``)


.. |downloads_trinculo| image:: https://img.shields.io/conda/dn/bioconda/trinculo.svg?style=flat
   :target: https://anaconda.org/bioconda/trinculo
   :alt:   (downloads)
.. |docker_trinculo| image:: https://quay.io/repository/biocontainers/trinculo/status
   :target: https://quay.io/repository/biocontainers/trinculo
.. _`trinculo/tags`: https://quay.io/repository/biocontainers/trinculo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trinculo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trinculo/README.html