:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dunovo'
.. highlight: bash

dunovo
======

.. conda:recipe:: dunovo
   :replaces_section_title:
   :noindex:

   Du Novo\: A pipeline for processing duplex sequencing data.

   :homepage: https://github.com/galaxyproject/dunovo
   :license: GPL2
   :recipe: /`dunovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dunovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dunovo/meta.yaml>`_

   


.. conda:package:: dunovo

   |downloads_dunovo| |docker_dunovo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.2-3</code>,  <code>3.0.2-1</code>,  <code>3.0.2-0</code>,  <code>2.16-0</code>,  <code>2.15-4</code>,  <code>2.15-3</code>,  <code>2.15-2</code>,  <code>2.15-1</code>,  <code>2.15-0</code>,  </span></summary>
      

      ``3.0.2-3``,  ``3.0.2-1``,  ``3.0.2-0``,  ``2.16-0``,  ``2.15-4``,  ``2.15-3``,  ``2.15-2``,  ``2.15-1``,  ``2.15-0``,  ``2.14-0``,  ``2.0.12-0``,  ``2.0.9-0``,  ``2.0.8-0``,  ``2.0.6-0``,  ``0.8.1-0``,  ``0.7.6-1``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.1-0``,  ``0.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends bash: ``>=4.0.0``
   :depends biopython: ``1.78.*``
   :depends bowtie: ``>=1.3.0``
   :depends coreutils: 
   :depends file: 
   :depends gawk: 
   :depends gzip: 
   :depends libgcc-ng: ``>=12``
   :depends mafft: ``>=7.221``
   :depends networkx: ``2.4.*``
   :depends numpy: ``<1.24``
   :depends python: ``>=3.6``
   :depends samtools: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install dunovo

   and update with::

      mamba update dunovo

  To create a new environment, run::

      mamba create --name myenvname dunovo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dunovo:<tag>

   (see `dunovo/tags`_ for valid values for ``<tag>``)


.. |downloads_dunovo| image:: https://img.shields.io/conda/dn/bioconda/dunovo.svg?style=flat
   :target: https://anaconda.org/bioconda/dunovo
   :alt:   (downloads)
.. |docker_dunovo| image:: https://quay.io/repository/biocontainers/dunovo/status
   :target: https://quay.io/repository/biocontainers/dunovo
.. _`dunovo/tags`: https://quay.io/repository/biocontainers/dunovo?tab=tags


.. raw:: html

    <script>
        var package = "dunovo";
        var versions = ["3.0.2","3.0.2","3.0.2","2.16","2.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dunovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dunovo/README.html