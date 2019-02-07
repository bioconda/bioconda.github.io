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

   :versions: 1.4.4

   :depends: :conda:package:`beautifulsoup4`  :conda:package:`bedtools`  :conda:package:`bwa`  :conda:package:`coverage`  :conda:package:`cython`  :conda:package:`gffutils`  :conda:package:`ipyparallel`  :conda:package:`ipython` >=4.0.0,<5.0.0 :conda:package:`ipython-cluster-helper`  :conda:package:`joblib`  :conda:package:`lxml`  :conda:package:`nose`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`pip`  :conda:package:`pybedtools`  :conda:package:`pysam`  :conda:package:`python` 2.7* :conda:package:`qualimap`  :conda:package:`sambamba`  :conda:package:`setuptools` >=18.5 :conda:package:`tempita`  

   :required~by: |required_by_targqc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install targqc

   and update with::

      conda update targqc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/targqc


.. |required_by_targqc| conda:required_by:: targqc
.. |downloads_targqc| image:: https://img.shields.io/conda/dn/bioconda/targqc.svg?style=flat
   :alt:   (downloads)
.. |docker_targqc| image:: https://quay.io/repository/biocontainers/targqc/status
   :target: https://quay.io/repository/biocontainers/targqc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/targqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/targqc/README.html

