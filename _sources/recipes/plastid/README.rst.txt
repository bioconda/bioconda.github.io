:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plastid'
.. highlight: bash

plastid
=======

.. conda:recipe:: plastid
   :replaces_section_title:
   :noindex:

   plastid is a Python library for genomic analysis \-\- in particular\, high\-throughput sequencing data

   :homepage: http://plastid.readthedocs.io/en/latest/
   :license: BSD 3-Clause
   :recipe: /`plastid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plastid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plastid/meta.yaml>`_

   


.. conda:package:: plastid

   |downloads_plastid| |docker_plastid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.1-2</code>,  <code>0.6.1-1</code>,  <code>0.6.1-0</code>,  <code>0.5.1-4</code>,  <code>0.5.1-3</code>,  <code>0.5.1-2</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  <code>0.4.8-5</code>,  </span></summary>
      

      ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.5.1-4``,  ``0.5.1-3``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.4.8-5``,  ``0.4.8-4``,  ``0.4.8-1``,  ``0.4.8-0``,  ``0.4.7-1``,  ``0.4.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.64,<1.78``
   :depends bowtie: 
   :depends cython: ``>=0.22.0``
   :depends fastx_toolkit: 
   :depends htslib: ``>=1.17,<1.22.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends matplotlib-base: ``>=1.4.0``
   :depends numpy: ``<=1.23.5``
   :depends numpy: ``>=1.23.5,<2.0a0``
   :depends openssl: ``>=3.1.1,<4.0a0``
   :depends pandas: ``>=0.17.0``
   :depends pysam: ``>=0.21.0,<0.21.1.0a0``
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends scipy: ``>=0.15.1``
   :depends setuptools: 
   :depends termcolor: 
   :depends twobitreader: ``>=3.0.0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install plastid

   and update with::

      mamba update plastid

  To create a new environment, run::

      mamba create --name myenvname plastid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plastid:<tag>

   (see `plastid/tags`_ for valid values for ``<tag>``)


.. |downloads_plastid| image:: https://img.shields.io/conda/dn/bioconda/plastid.svg?style=flat
   :target: https://anaconda.org/bioconda/plastid
   :alt:   (downloads)
.. |docker_plastid| image:: https://quay.io/repository/biocontainers/plastid/status
   :target: https://quay.io/repository/biocontainers/plastid
.. _`plastid/tags`: https://quay.io/repository/biocontainers/plastid?tab=tags


.. raw:: html

    <script>
        var package = "plastid";
        var versions = ["0.6.1","0.6.1","0.6.1","0.5.1","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plastid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plastid/README.html