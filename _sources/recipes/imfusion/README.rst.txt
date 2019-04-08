:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'imfusion'
.. highlight: bash

imfusion
========

.. conda:recipe:: imfusion/0.3.0
   :replaces_section_title:

   IM\-Fusion \- Tool for identifying transposon insertions and their effects from RNA\-sequencing data

   :homepage: https://github.com/jrderuiter/imfusion
   :license: MIT
   :recipe: /`imfusion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imfusion>`_/`0.3.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imfusion/0.3.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imfusion/0.3.0/meta.yaml>`_

   


.. conda:package:: imfusion

   |downloads_imfusion| |docker_imfusion|

   :versions: 0.3.2-0, 0.3.0-0
   
   :depends bowtie: 
   :depends future: 
   :depends htseq: >=0.7.2
   :depends htslib: <1.4
   :depends intervaltree: 
   :depends intervaltree: 
   :depends matplotlib: 
   :depends numexpr: 
   :depends pandas: 
   :depends pathlib2: 
   :depends pyfaidx: >=0.4.8.1
   :depends pysam: >=0.9.1
   :depends python: 2.7*
   :depends scipy: 
   :depends seaborn: 
   :depends seaborn: 
   :depends star: 
   :depends stringtie: 
   :depends subread: 
   :depends toolz: 
   :depends tophat: >=2.1.0
   :depends typing: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install imfusion

   and update with::

      conda update imfusion

   or use the docker container::

      docker pull quay.io/biocontainers/imfusion:<tag>

   (see `imfusion/tags`_ for valid values for ``<tag>``)


.. |downloads_imfusion| image:: https://img.shields.io/conda/dn/bioconda/imfusion.svg?style=flat
   :alt:   (downloads)
.. |docker_imfusion| image:: https://quay.io/repository/biocontainers/imfusion/status
   :target: https://quay.io/repository/biocontainers/imfusion
.. _`imfusion/tags`: https://quay.io/repository/biocontainers/imfusion?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/imfusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/imfusion/README.html