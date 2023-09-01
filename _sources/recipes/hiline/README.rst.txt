:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hiline'
.. highlight: bash

hiline
======

.. conda:recipe:: hiline
   :replaces_section_title:
   :noindex:

   HiC alignment and classification pipeline.

   :homepage: https://github.com/wtsi-hpag/HiLine
   :license: MIT / MIT
   :recipe: /`hiline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hiline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hiline/meta.yaml>`_

   This is a HiC short\-read alignment pipeline. It will perform an alignment\, or read in an external alignment\, perform optional duplicate\-read marking\, perform HiC read classification based on an in\-slico restriction digest of reference sequences and finally split the output alignments based on HiC read\-type. It can also optionally process and output HiC alignment statistics. Under the hood\, it uses bwa mem and samtools to perform and process alignments. It also uses a custom C\+\+ Python extension to perform the in\-silico digest \(using the Hyperscan \(https\:\/\/github.com\/intel\/hyperscan\) regex library\) and subsequent HiC classification.  


.. conda:package:: hiline

   |downloads_hiline| |docker_hiline|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.4-1</code>,  <code>0.2.4-0</code>,  <code>0.2.2-1</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.1-0</code>,  <code>0.0.9-3</code>,  <code>0.0.9-2</code>,  <code>0.0.9-1</code>,  </span></summary>
      

      ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1-0``,  ``0.0.9-3``,  ``0.0.9-2``,  ``0.0.9-1``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.76``
   :depends bwa: ``>=0.7.17``
   :depends click: ``>=7.0``
   :depends gawk: ``>=5.1.0``
   :depends libcxx: ``>=12.0.1``
   :depends matplotlib-base: ``>=3.2.0``
   :depends minimap2: ``>=2.17``
   :depends numpy: ``>=1.22.2,<2.0a0``
   :depends pandas: ``>=1.0.1``
   :depends pcre: ``>=8.45,<9.0a0``
   :depends perl: ``>=5.30.3``
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
   :depends samtools: ``>=1.10``
   :depends seaborn: ``>=0.10.0``
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

      mamba install hiline

   and update with::

      mamba update hiline

  To create a new environment, run::

      mamba create --name myenvname hiline

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hiline:<tag>

   (see `hiline/tags`_ for valid values for ``<tag>``)


.. |downloads_hiline| image:: https://img.shields.io/conda/dn/bioconda/hiline.svg?style=flat
   :target: https://anaconda.org/bioconda/hiline
   :alt:   (downloads)
.. |docker_hiline| image:: https://quay.io/repository/biocontainers/hiline/status
   :target: https://quay.io/repository/biocontainers/hiline
.. _`hiline/tags`: https://quay.io/repository/biocontainers/hiline?tab=tags


.. raw:: html

    <script>
        var package = "hiline";
        var versions = ["0.2.4","0.2.4","0.2.2","0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hiline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hiline/README.html