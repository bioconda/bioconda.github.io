:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'targqc'
.. highlight: bash

targqc
======

.. conda:recipe:: targqc
   :replaces_section_title:

   Target capture coverage QC

   :homepage: https://github.com/vladsaveliev/TargQC
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`targqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/targqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/targqc/meta.yaml>`_

   


.. conda:package:: targqc

   |downloads_targqc| |docker_targqc|

   :versions: 1.8.1-0, 1.4.4-1, 1.4.4-0
   
   :depends beautifulsoup4: 
   :depends bedtools: >=2.25
   :depends bwa: 
   :depends click: 
   :depends coverage: 
   :depends gffutils: 
   :depends ipyparallel: 
   :depends ipython: 
   :depends ipython-cluster-helper: 
   :depends joblib: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends lxml: 
   :depends natsort: 
   :depends nose: 
   :depends numpy: >=1.14.6,<2.0a0
   :depends pandas: 
   :depends pip: 
   :depends pybedtools: 
   :depends pysam: 
   :depends python: >=3.7,<3.8.0a0
   :depends qualimap: 
   :depends sambamba: >=0.7.0
   :depends setuptools: >=18.5
   :depends six: 
   :depends tempita: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install targqc

   and update with::

      conda update targqc

   or use the docker container::

      docker pull quay.io/biocontainers/targqc:<tag>

   (see `targqc/tags`_ for valid values for ``<tag>``)


.. |downloads_targqc| image:: https://img.shields.io/conda/dn/bioconda/targqc.svg?style=flat
   :target: https://anaconda.org/bioconda/targqc
   :alt:   (downloads)
.. |docker_targqc| image:: https://quay.io/repository/biocontainers/targqc/status
   :target: https://quay.io/repository/biocontainers/targqc
.. _`targqc/tags`: https://quay.io/repository/biocontainers/targqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/targqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/targqc/README.html