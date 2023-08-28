:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamread'
.. highlight: bash

bamread
=======

.. conda:recipe:: bamread
   :replaces_section_title:
   :noindex:

   Read bam files quickly into dataframes in Python

   :homepage: http://github.com/endrebak/bamread
   :license: MIT
   :recipe: /`bamread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamread/meta.yaml>`_

   


.. conda:package:: bamread

   |downloads_bamread| |docker_bamread|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.16-1</code>,  <code>0.0.16-0</code>,  <code>0.0.13-0</code>,  <code>0.0.11-2</code>,  <code>0.0.11-1</code>,  <code>0.0.11-0</code>,  <code>0.0.9-1</code>,  <code>0.0.9-0</code>,  <code>0.0.8-0</code>,  </span></summary>
      

      ``0.0.16-1``,  ``0.0.16-0``,  ``0.0.13-0``,  ``0.0.11-2``,  ``0.0.11-1``,  ``0.0.11-0``,  ``0.0.9-1``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-2``,  ``0.0.7-1``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-1``,  ``0.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends natsort: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bamread

   and update with::

      mamba update bamread

  To create a new environment, run::

      mamba create --name myenvname bamread

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bamread:<tag>

   (see `bamread/tags`_ for valid values for ``<tag>``)


.. |downloads_bamread| image:: https://img.shields.io/conda/dn/bioconda/bamread.svg?style=flat
   :target: https://anaconda.org/bioconda/bamread
   :alt:   (downloads)
.. |docker_bamread| image:: https://quay.io/repository/biocontainers/bamread/status
   :target: https://quay.io/repository/biocontainers/bamread
.. _`bamread/tags`: https://quay.io/repository/biocontainers/bamread?tab=tags


.. raw:: html

    <script>
        var package = "bamread";
        var versions = ["0.0.16","0.0.16","0.0.13","0.0.11","0.0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamread/README.html