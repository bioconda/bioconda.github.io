:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parsnp'
.. highlight: bash

parsnp
======

.. conda:recipe:: parsnp
   :replaces_section_title:
   :noindex:

   Parsnp is a command\-line\-tool for efficient microbial core genome alignment and SNP detection.

   :homepage: https://github.com/marbl/parsnp
   :documentation: https://harvest.readthedocs.io/en/latest/content/parsnp/tutorial.html
   
   :license: custom; see https://raw.githubusercontent.com/marbl/parsnp/master/LICENSE
   :recipe: /`parsnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parsnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parsnp/meta.yaml>`_

   


.. conda:package:: parsnp

   |downloads_parsnp| |docker_parsnp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.4-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-1</code>,  <code>2.0.2-0</code>,  <code>1.7.4-2</code>,  <code>1.7.4-1</code>,  <code>1.7.4-0</code>,  <code>1.7.3-0</code>,  <code>1.7.2-0</code>,  </span></summary>
      

      ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``1.7.4-2``,  ``1.7.4-1``,  ``1.7.4-0``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-1``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.2-1``,  ``1.6.2-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.6-1``,  ``1.5.6-0``,  ``1.5.4-1``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-1``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-4``,  ``1.5.0-3``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends fastani: 
   :depends fasttree: 
   :depends harvesttools: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends mash: 
   :depends numpy: 
   :depends openmp: 
   :depends phipack: 
   :depends pyspoa: 
   :depends python: ``>=3.7``
   :depends raxml: 
   :depends tqdm: 
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

      mamba install parsnp

   and update with::

      mamba update parsnp

  To create a new environment, run::

      mamba create --name myenvname parsnp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/parsnp:<tag>

   (see `parsnp/tags`_ for valid values for ``<tag>``)


.. |downloads_parsnp| image:: https://img.shields.io/conda/dn/bioconda/parsnp.svg?style=flat
   :target: https://anaconda.org/bioconda/parsnp
   :alt:   (downloads)
.. |docker_parsnp| image:: https://quay.io/repository/biocontainers/parsnp/status
   :target: https://quay.io/repository/biocontainers/parsnp
.. _`parsnp/tags`: https://quay.io/repository/biocontainers/parsnp?tab=tags


.. raw:: html

    <script>
        var package = "parsnp";
        var versions = ["2.0.4","2.0.3","2.0.2","2.0.2","1.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parsnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parsnp/README.html