:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hybpiper'
.. highlight: bash

hybpiper
========

.. conda:recipe:: hybpiper
   :replaces_section_title:
   :noindex:

   HybPiper is a suite of Python scripts\/modules for targeted sequence capture.

   :homepage: https://github.com/mossmatters/HybPiper
   :documentation: https://github.com/mossmatters/HybPiper/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`hybpiper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hybpiper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hybpiper/meta.yaml>`_

   


.. conda:package:: hybpiper

   |downloads_hybpiper| |docker_hybpiper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.1-0</code>,  <code>2.3.0-1</code>,  <code>2.3.0-0</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.1.8-0</code>,  <code>2.1.7-0</code>,  <code>2.1.6-0</code>,  <code>2.1.5-0</code>,  </span></summary>
      

      ``2.3.1-0``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.8-0``,  ``2.1.7-0``,  ``2.1.6-0``,  ``2.1.5-0``,  ``2.1.3-1``,  ``2.1.3-0``,  ``2.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bbmap: ``>=38.44``
   :depends biopython: ``>=1.80``
   :depends blast: ``>=2.9.0``
   :depends bwa: ``>=0.7.17``
   :depends diamond: ``>=2.0.11``
   :depends exonerate: ``>=2.4.0``
   :depends mafft: ``>=7.487``
   :depends matplotlib-base: ``>=3.3.2``
   :depends numpy: 
   :depends parallel: ``>=20211022``
   :depends pebble: ``>=4.6.3``
   :depends progressbar2: ``>=3.38.0``
   :depends psutil: ``>=5.9.0``
   :depends python: 
   :depends samtools: ``>=1.14``
   :depends seaborn-base: ``>=0.11.1``
   :depends spades: ``>=4.0.0``
   :depends trimmomatic: 
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

      mamba install hybpiper

   and update with::

      mamba update hybpiper

  To create a new environment, run::

      mamba create --name myenvname hybpiper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hybpiper:<tag>

   (see `hybpiper/tags`_ for valid values for ``<tag>``)


.. |downloads_hybpiper| image:: https://img.shields.io/conda/dn/bioconda/hybpiper.svg?style=flat
   :target: https://anaconda.org/bioconda/hybpiper
   :alt:   (downloads)
.. |docker_hybpiper| image:: https://quay.io/repository/biocontainers/hybpiper/status
   :target: https://quay.io/repository/biocontainers/hybpiper
.. _`hybpiper/tags`: https://quay.io/repository/biocontainers/hybpiper?tab=tags


.. raw:: html

    <script>
        var package = "hybpiper";
        var versions = ["2.3.1","2.3.0","2.3.0","2.2.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hybpiper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hybpiper/README.html