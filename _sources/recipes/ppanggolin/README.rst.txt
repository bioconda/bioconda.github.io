:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ppanggolin'
.. highlight: bash

ppanggolin
==========

.. conda:recipe:: ppanggolin
   :replaces_section_title:

   PPanGGOLiN \: Depicting microbial species diversity via a Partitioned PanGenome Graph

   :homepage: https://github.com/labgem/PPanGGOLiN
   :license: CeCiLL 2.1
   :recipe: /`ppanggolin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ppanggolin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ppanggolin/meta.yaml>`_

   


.. conda:package:: ppanggolin

   |downloads_ppanggolin| |docker_ppanggolin|

   :versions: 1.0.1-0, 1.0.0-0, v0.3.88-1, v0.3.88-0
   
   :depends aragorn: 1.2.*
   :depends colorlover: 0.3.*
   :depends gmpy2: 2.*
   :depends infernal: 1.1.*
   :depends libgcc-ng: >=7.3.0
   :depends mmseqs2: 10.*
   :depends networkx: 2.3.*
   :depends numpy: 1.16.*
   :depends pandas: 0.25.*
   :depends plotly: 4.*
   :depends prodigal: 2.6.*
   :depends psutil: 5.*
   :depends pytables: 3.5.*
   :depends python: >=3.6,<3.7.0a0
   :depends scipy: 1.3.*
   :depends tqdm: 4.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ppanggolin

   and update with::

      conda update ppanggolin

   or use the docker container::

      docker pull quay.io/biocontainers/ppanggolin:<tag>

   (see `ppanggolin/tags`_ for valid values for ``<tag>``)


.. |downloads_ppanggolin| image:: https://img.shields.io/conda/dn/bioconda/ppanggolin.svg?style=flat
   :target: https://anaconda.org/bioconda/ppanggolin
   :alt:   (downloads)
.. |docker_ppanggolin| image:: https://quay.io/repository/biocontainers/ppanggolin/status
   :target: https://quay.io/repository/biocontainers/ppanggolin
.. _`ppanggolin/tags`: https://quay.io/repository/biocontainers/ppanggolin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ppanggolin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ppanggolin/README.html