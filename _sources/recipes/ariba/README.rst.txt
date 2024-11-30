:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ariba'
.. highlight: bash

ariba
=====

.. conda:recipe:: ariba
   :replaces_section_title:
   :noindex:

   ARIBA\: Antibiotic Resistance Identification By Assembly

   :homepage: https://github.com/sanger-pathogens/ariba
   :license: GPL / GNU General Public License v3 (GPL-3.0)
   :recipe: /`ariba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ariba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ariba/meta.yaml>`_

   


.. conda:package:: ariba

   |downloads_ariba| |docker_ariba|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.6-6</code>,  <code>2.14.6-5</code>,  <code>2.14.6-4</code>,  <code>2.14.6-3</code>,  <code>2.14.6-2</code>,  <code>2.14.6-0</code>,  <code>2.14.5-2</code>,  <code>2.14.5-1</code>,  <code>2.14.5-0</code>,  </span></summary>
      

      ``2.14.6-6``,  ``2.14.6-5``,  ``2.14.6-4``,  ``2.14.6-3``,  ``2.14.6-2``,  ``2.14.6-0``,  ``2.14.5-2``,  ``2.14.5-1``,  ``2.14.5-0``,  ``2.14.4-0``,  ``2.14.3-1``,  ``2.14.3-0``,  ``2.14.1-0``,  ``2.13.5-0``,  ``2.13.3-0``,  ``2.13.2-0``,  ``2.12.1-0``,  ``2.12.0-2``,  ``2.12.0-0``,  ``2.11.1-0``,  ``2.11.0-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.5.1-0``,  ``0.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: ``>=1.2,<=1.14``
   :depends beautifulsoup4: ``>=4.1.0``
   :depends biopython: 
   :depends bowtie2: ``<2.4.0``
   :depends cd-hit: ``>=4.6.5``
   :depends dendropy: ``>=4.2.0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends matplotlib-base: ``>=3.1.0``
   :depends mummer: ``>=3.23``
   :depends pyfastaq: ``>=3.12.0``
   :depends pymummer: ``>=0.11.0``
   :depends pysam: ``>=0.15.3,<=0.18.0``
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends samtools: ``>=1.2``
   :depends spades: ``>=3.5.0``
   :depends wget: 
   :depends zlib: 
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

      mamba install ariba

   and update with::

      mamba update ariba

  To create a new environment, run::

      mamba create --name myenvname ariba

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ariba:<tag>

   (see `ariba/tags`_ for valid values for ``<tag>``)


.. |downloads_ariba| image:: https://img.shields.io/conda/dn/bioconda/ariba.svg?style=flat
   :target: https://anaconda.org/bioconda/ariba
   :alt:   (downloads)
.. |docker_ariba| image:: https://quay.io/repository/biocontainers/ariba/status
   :target: https://quay.io/repository/biocontainers/ariba
.. _`ariba/tags`: https://quay.io/repository/biocontainers/ariba?tab=tags


.. raw:: html

    <script>
        var package = "ariba";
        var versions = ["2.14.6","2.14.6","2.14.6","2.14.6","2.14.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ariba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ariba/README.html