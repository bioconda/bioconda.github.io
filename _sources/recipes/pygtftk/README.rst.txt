:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygtftk'
.. highlight: bash

pygtftk
=======

.. conda:recipe:: pygtftk
   :replaces_section_title:

   The gtftk suite providing facilities to manipulate genomic annotations in gtf format.

   :homepage: http://github.com/dputhier/pygtftk
   :license: MIT
   :recipe: /`pygtftk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygtftk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygtftk/meta.yaml>`_

   


.. conda:package:: pygtftk

   |downloads_pygtftk| |docker_pygtftk|

   :versions: 1.1.4-0, 1.1.2-0, 1.1.1-0, 1.1.0-0, 1.0.9-0, 1.0.7-0, 1.0.6-0, 1.0.5-0, 1.0.2-0, 1.0.1-0
   
   :depends bedtools: >=2.23
   :depends biopython: >=1.69
   :depends bzip2: 
   :depends cffi: >=1.10.0
   :depends cloudpickle: >=0.4.0
   :depends ftputil: >=3.3.1,<4.0.0
   :depends future: 
   :depends libgcc-ng: >=7.5.0
   :depends libstdcxx-ng: >=7.5.0
   :depends matplotlib-base: >=2.0.2
   :depends mpmath: 
   :depends nose: 
   :depends numpy: 
   :depends pandas: >=0.23.3
   :depends plotnine: >=0.4.0
   :depends pybedtools: >=0.7.8
   :depends pybigwig: >=0.3
   :depends pyparsing: >=2.2.0
   :depends python: >=3.6,<3.7.0a0
   :depends python_abi: 3.6.* *_cp36m
   :depends pyyaml: >=3.12
   :depends requests: >=2.13.0
   :depends scipy: >=1.1.0
   :depends xz: >=5.2.5,<5.3.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pygtftk

   and update with::

      conda update pygtftk

   or use the docker container::

      docker pull quay.io/biocontainers/pygtftk:<tag>

   (see `pygtftk/tags`_ for valid values for ``<tag>``)


.. |downloads_pygtftk| image:: https://img.shields.io/conda/dn/bioconda/pygtftk.svg?style=flat
   :target: https://anaconda.org/bioconda/pygtftk
   :alt:   (downloads)
.. |docker_pygtftk| image:: https://quay.io/repository/biocontainers/pygtftk/status
   :target: https://quay.io/repository/biocontainers/pygtftk
.. _`pygtftk/tags`: https://quay.io/repository/biocontainers/pygtftk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygtftk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygtftk/README.html