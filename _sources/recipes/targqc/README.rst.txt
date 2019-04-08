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

   :versions: 1.4.4-1, 1.4.4-0
   
   :depends beautifulsoup4: 
   :depends bedtools: 
   :depends bwa: 
   :depends coverage: 
   :depends cython: 
   :depends gffutils: 
   :depends ipyparallel: 
   :depends ipython: >=4.0.0,<5.0.0
   :depends ipython-cluster-helper: 
   :depends joblib: 
   :depends lxml: 
   :depends nose: 
   :depends numpy: 
   :depends pandas: 
   :depends pip: 
   :depends pybedtools: 
   :depends pysam: 
   :depends python: >=2.7,<2.8.0a0
   :depends qualimap: 
   :depends sambamba: 
   :depends setuptools: >=18.5
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