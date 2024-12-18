:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prophyle'
.. highlight: bash

prophyle
========

.. conda:recipe:: prophyle
   :replaces_section_title:
   :noindex:

   ProPhyle is an accurate\, resource\-frugal and deterministic phylogeny\-based metagenomic classifier.

   :homepage: https://github.com/karel-brinda/prophyle
   :license: MIT
   :recipe: /`prophyle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophyle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophyle/meta.yaml>`_

   


.. conda:package:: prophyle

   |downloads_prophyle| |docker_prophyle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.3.2-3</code>,  <code>0.3.3.2-2</code>,  <code>0.3.3.2-1</code>,  <code>0.3.3.2-0</code>,  <code>0.3.3.1-0</code>,  <code>0.3.2.0-2</code>,  <code>0.3.2.0-1</code>,  <code>0.3.2.0-0</code>,  <code>0.3.1.0-7</code>,  </span></summary>
      

      ``0.3.3.2-3``,  ``0.3.3.2-2``,  ``0.3.3.2-1``,  ``0.3.3.2-0``,  ``0.3.3.1-0``,  ``0.3.2.0-2``,  ``0.3.2.0-1``,  ``0.3.2.0-0``,  ``0.3.1.0-7``,  ``0.3.1.0-6``,  ``0.3.1.0-5``,  ``0.3.1.0-4``,  ``0.3.1.0-3``,  ``0.3.1.0-2``,  ``0.3.1.0-1``,  ``0.3.0.3-3``,  ``0.3.0.3-2``,  ``0.3.0.3-1``,  ``0.3.0.2-1``,  ``0.3.0.0-1``,  ``0.2.1.3-2``,  ``0.2.1.3-1``,  ``0.2.1.3-0``,  ``0.2.1.2-1``,  ``0.2.1.0-1``,  ``0.2.1.0-0``,  ``0.2.0.3-2``,  ``0.2.0.3-1``,  ``0.2.0.3-0``,  ``0.2.0.2-0``,  ``0.2.0-0``,  ``0.1.0.38-2``,  ``0.1.0.38-1``,  ``0.1.0.38-0``,  ``0.1.0.35-0``,  ``0.1.0.29-0``

      
      .. raw:: html

         </details>
      

   
   :depends bitarray: 
   :depends ete3: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends psutil: 
   :depends pysam: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: ``>=1.21,<2.0a0``
   :depends scipy: 
   :depends wheel: 
   :depends zlib: 
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

      mamba install prophyle

   and update with::

      mamba update prophyle

  To create a new environment, run::

      mamba create --name myenvname prophyle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/prophyle:<tag>

   (see `prophyle/tags`_ for valid values for ``<tag>``)


.. |downloads_prophyle| image:: https://img.shields.io/conda/dn/bioconda/prophyle.svg?style=flat
   :target: https://anaconda.org/bioconda/prophyle
   :alt:   (downloads)
.. |docker_prophyle| image:: https://quay.io/repository/biocontainers/prophyle/status
   :target: https://quay.io/repository/biocontainers/prophyle
.. _`prophyle/tags`: https://quay.io/repository/biocontainers/prophyle?tab=tags


.. raw:: html

    <script>
        var package = "prophyle";
        var versions = ["0.3.3.2","0.3.3.2","0.3.3.2","0.3.3.2","0.3.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prophyle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prophyle/README.html