.. title:: Package Recipe 'pydnase'
.. highlight: bash


pydnase
=======

.. conda:recipe:: pydnase
   :replaces_section_title:

   DNase\-seq analysis library

   :homepage: http://jpiper.github.io/pyDNase
   :documentation: http://pythonhosted.org/pyDNase/index.html
   
   :license: MIT / MIT
   :recipe: /`pydnase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydnase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydnase/meta.yaml>`_

   A suite of tools for analysing DNase\-seq data.


.. conda:package:: pydnase

   |downloads_pydnase| |docker_pydnase|

   :versions: 0.3.0, 0.2.6

   :depends: :conda:package:`bedtools`  :conda:package:`clint`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pybedtools`  :conda:package:`pysam`  :conda:package:`python` 3.5* :conda:package:`samtools`  

   :required~by: |required_by_pydnase|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pydnase

   and update with::

      conda update pydnase

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pydnase


.. |required_by_pydnase| conda:required_by:: pydnase
.. |downloads_pydnase| image:: https://img.shields.io/conda/dn/bioconda/pydnase.svg?style=flat
   :alt:   (downloads)
.. |docker_pydnase| image:: https://quay.io/repository/biocontainers/pydnase/status
   :target: https://quay.io/repository/biocontainers/pydnase







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydnase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydnase/README.html

