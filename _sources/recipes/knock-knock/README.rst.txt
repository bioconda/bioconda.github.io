:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'knock-knock'
.. highlight: bash

knock-knock
===========

.. conda:recipe:: knock-knock
   :replaces_section_title:

   toolkit for analyzing CRISPR knock\-in experiments

   :homepage: https://github.com/jeffhussmann/knock-knock
   :license: GPL-3
   :recipe: /`knock-knock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knock-knock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knock-knock/meta.yaml>`_

   


.. conda:package:: knock-knock

   |downloads_knock-knock| |docker_knock-knock|

   :versions: 0.2.1-0
   
   :depends biopython: >=1.70
   :depends blast: 2.7.1
   :depends bokeh: >=0.12.14
   :depends hits: >=0.1
   :depends ipywidgets: >=7.1.2
   :depends matplotlib: >=2.1.2
   :depends minimap2: 2.16
   :depends nbconvert: >=5.3.1
   :depends nbformat: >=4.4.0
   :depends numpy: >=1.14.2
   :depends pandas: >=0.22.0
   :depends parallel: >=20190522
   :depends pillow: >=5.0.0
   :depends pysam: >=0.14
   :depends python: >=3.6
   :depends pyyaml: >=3.12
   :depends samtools: >=1.9
   :depends star: >=2.7.1
   :depends tqdm: >=4.31.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install knock-knock

   and update with::

      conda update knock-knock

   or use the docker container::

      docker pull quay.io/biocontainers/knock-knock:<tag>

   (see `knock-knock/tags`_ for valid values for ``<tag>``)


.. |downloads_knock-knock| image:: https://img.shields.io/conda/dn/bioconda/knock-knock.svg?style=flat
   :target: https://anaconda.org/bioconda/knock-knock
   :alt:   (downloads)
.. |docker_knock-knock| image:: https://quay.io/repository/biocontainers/knock-knock/status
   :target: https://quay.io/repository/biocontainers/knock-knock
.. _`knock-knock/tags`: https://quay.io/repository/biocontainers/knock-knock?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/knock-knock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/knock-knock/README.html