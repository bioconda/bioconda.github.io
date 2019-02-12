:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-aroma.affymetrix'
.. highlight: bash

r-aroma.affymetrix
==================

.. conda:recipe:: r-aroma.affymetrix
   :replaces_section_title:

   A cross\-platform R framework that facilitates processing of any number of Affymetrix microarray samples regardless of computer system.  The only parameter that limits the number of chips that can be processed is the amount of available disk space.  The Aroma Framework has successfully been used in studies to process tens of thousands of arrays.  This package has actively been used since 2006.

   :homepage: http://www.aroma-project.org/, https://github.com/HenrikBengtsson/aroma.affymetrix
   :license: LGPL / LGPL (>= 2.1)
   :recipe: /`r-aroma.affymetrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-aroma.affymetrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-aroma.affymetrix/meta.yaml>`_

   


.. conda:package:: r-aroma.affymetrix

   |downloads_r-aroma.affymetrix| |docker_r-aroma.affymetrix|

   :versions: 3.1.1-1, 3.1.1-0, 3.1.0-0, 3.0.0-0
   
   :depends r-aroma.apd: >=0.6.0
   
   :depends r-aroma.core: >=3.1.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-future: 
   
   :depends r-listenv: 
   
   :depends r-mass: 
   
   :depends r-matrixstats: >=0.52.2
   
   :depends r-r.cache: >=0.13.0
   
   :depends r-r.devices: >=2.15.1
   
   :depends r-r.filesets: >=2.11.0
   
   :depends r-r.methodss3: >=1.7.1
   
   :depends r-r.oo: >=1.21.0
   
   :depends r-r.utils: >=2.6.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-aroma.affymetrix

   and update with::

      conda update r-aroma.affymetrix

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-aroma.affymetrix:<tag>

   (see `r-aroma.affymetrix/tags`_ for valid values for ``<tag>``)


.. |downloads_r-aroma.affymetrix| image:: https://img.shields.io/conda/dn/bioconda/r-aroma.affymetrix.svg?style=flat
   :alt:   (downloads)
.. |docker_r-aroma.affymetrix| image:: https://quay.io/repository/biocontainers/r-aroma.affymetrix/status
   :target: https://quay.io/repository/biocontainers/r-aroma.affymetrix
.. _`r-aroma.affymetrix/tags`: https://quay.io/repository/biocontainers/r-aroma.affymetrix?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-aroma.affymetrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-aroma.affymetrix/README.html