:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'admixtools'
.. highlight: bash

admixtools
==========

.. conda:recipe:: admixtools
   :replaces_section_title:

   ADMIXTOOLS \(Patterson et al. 2012\) is a software package that supports formal tests of whether admixture occurred\, and makes it possible to infer admixture proportions and dates.

   :homepage: https://github.com/DReichLab/AdmixTools
   :license: Free for Academic Use
   :recipe: /`admixtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/admixtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/admixtools/meta.yaml>`_
   :links: biotools: :biotools:`AdmixTools`, doi: :doi:`10.1534/genetics.112.145037`

   


.. conda:package:: admixtools

   |downloads_admixtools| |docker_admixtools|

   :versions: 6.0-0, 5.1-0, 5.0-0
   
   :depends gsl: >=2.5,<2.6.0a0
   :depends libgcc-ng: >=7.3.0
   :depends openblas: >=0.3.6,<0.3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install admixtools

   and update with::

      conda update admixtools

   or use the docker container::

      docker pull quay.io/biocontainers/admixtools:<tag>

   (see `admixtools/tags`_ for valid values for ``<tag>``)


.. |downloads_admixtools| image:: https://img.shields.io/conda/dn/bioconda/admixtools.svg?style=flat
   :target: https://anaconda.org/bioconda/admixtools
   :alt:   (downloads)
.. |docker_admixtools| image:: https://quay.io/repository/biocontainers/admixtools/status
   :target: https://quay.io/repository/biocontainers/admixtools
.. _`admixtools/tags`: https://quay.io/repository/biocontainers/admixtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/admixtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/admixtools/README.html