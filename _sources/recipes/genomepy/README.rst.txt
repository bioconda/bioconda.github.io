:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomepy'
.. highlight: bash

genomepy
========

.. conda:recipe:: genomepy
   :replaces_section_title:
   :noindex:

   Install and use genomes \& gene annotations the easy way\!

   :homepage: https://github.com/vanheeringen-lab/genomepy
   :documentation: https://vanheeringen-lab.github.io/genomepy
   
   :license: MIT / MIT
   :recipe: /`genomepy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomepy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomepy/meta.yaml>`_

   Install and use genomes \& gene annotations the easy way\!



.. conda:package:: genomepy

   |downloads_genomepy| |docker_genomepy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.16.3-0</code>,  <code>0.16.2-1</code>,  <code>0.16.2-0</code>,  <code>0.16.1-2</code>,  <code>0.16.1-1</code>,  <code>0.16.1-0</code>,  <code>0.16.0-0</code>,  <code>0.15.0-0</code>,  <code>0.14.0-2</code>,  </span></summary>
      

      ``0.16.3-0``,  ``0.16.2-1``,  ``0.16.2-0``,  ``0.16.1-2``,  ``0.16.1-1``,  ``0.16.1-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.0-2``,  ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.1-0``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.5-1``,  ``0.5.5-0``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.2-2``,  ``0.5.2-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends appdirs: 
   :depends biopython: ``>=1.73``
   :depends click: 
   :depends colorama: 
   :depends diskcache: 
   :depends filelock: ``>=3.5``
   :depends htslib: ``>=1.11``
   :depends loguru: 
   :depends mygene: 
   :depends mysql: ``<=8.4``
   :depends mysql-connector-python: ``<=8.4``
   :depends numpy: 
   :depends pandas: 
   :depends pyfaidx: ``>=0.7.2.1``
   :depends python: ``>=3.9``
   :depends pyyaml: 
   :depends requests: 
   :depends tqdm: ``>=4.51``
   :depends ucsc-bedtogenepred: 
   :depends ucsc-genepredtobed: 
   :depends ucsc-genepredtogtf: 
   :depends ucsc-gff3togenepred: 
   :depends ucsc-gtftogenepred: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install genomepy

   and update with::

      mamba update genomepy

  To create a new environment, run::

      mamba create --name myenvname genomepy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genomepy:<tag>

   (see `genomepy/tags`_ for valid values for ``<tag>``)


.. |downloads_genomepy| image:: https://img.shields.io/conda/dn/bioconda/genomepy.svg?style=flat
   :target: https://anaconda.org/bioconda/genomepy
   :alt:   (downloads)
.. |docker_genomepy| image:: https://quay.io/repository/biocontainers/genomepy/status
   :target: https://quay.io/repository/biocontainers/genomepy
.. _`genomepy/tags`: https://quay.io/repository/biocontainers/genomepy?tab=tags


.. raw:: html

    <script>
        var package = "genomepy";
        var versions = ["0.16.3","0.16.2","0.16.2","0.16.1","0.16.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomepy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomepy/README.html