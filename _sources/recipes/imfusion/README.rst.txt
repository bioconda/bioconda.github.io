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

   :versions: 0.3.2, 0.3.0

   :depends: :conda:package:`bowtie`  :conda:package:`future`  :conda:package:`htseq` >=0.7.2 :conda:package:`htslib` <1.4 :conda:package:`intervaltree`  :conda:package:`intervaltree`  :conda:package:`matplotlib`  :conda:package:`numexpr`  :conda:package:`pandas`  :conda:package:`pathlib2`  :conda:package:`pyfaidx` >=0.4.8.1 :conda:package:`pysam` >=0.9.1 :conda:package:`python` 2.7* :conda:package:`scipy`  :conda:package:`seaborn`  :conda:package:`seaborn`  :conda:package:`star`  :conda:package:`stringtie`  :conda:package:`subread`  :conda:package:`toolz`  :conda:package:`tophat` >=2.1.0 :conda:package:`typing`  

   :required~by: |required_by_imfusion|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install imfusion

   and update with::

      conda update imfusion

   or use the docker container::

      docker pull quay.io/repository/biocontainers/imfusion


.. |required_by_imfusion| conda:required_by:: imfusion
.. |downloads_imfusion| image:: https://img.shields.io/conda/dn/bioconda/imfusion.svg?style=flat
   :alt:   (downloads)
.. |docker_imfusion| image:: https://quay.io/repository/biocontainers/imfusion/status
   :target: https://quay.io/repository/biocontainers/imfusion







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/imfusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/imfusion/README.html

