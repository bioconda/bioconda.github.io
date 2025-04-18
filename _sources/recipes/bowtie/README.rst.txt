:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bowtie'
.. highlight: bash

bowtie
======

.. conda:recipe:: bowtie
   :replaces_section_title:
   :noindex:

   An ultrafast memory\-efficient short read aligner

   :homepage: https://github.com/BenLangmead/bowtie
   :license: Artistic-2.0-only
   :recipe: /`bowtie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bowtie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bowtie/meta.yaml>`_
   :links: biotools: :biotools:`bowtie`, doi: :doi:`10.1186/gb-2009-10-3-r25`

   


.. conda:package:: bowtie

   |downloads_bowtie| |docker_bowtie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-10</code>,  <code>1.3.1-9</code>,  <code>1.3.1-8</code>,  <code>1.3.1-7</code>,  <code>1.3.1-6</code>,  <code>1.3.1-5</code>,  <code>1.3.1-4</code>,  <code>1.3.1-3</code>,  <code>1.3.1-2</code>,  </span></summary>
      

      ``1.3.1-10``,  ``1.3.1-9``,  ``1.3.1-8``,  ``1.3.1-7``,  ``1.3.1-6``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.3-2``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1.1-0``,  ``1.2.0-0``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends perl: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends tbb: ``>=2021.13.0``
   :depends zlib: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bowtie

   and update with::

      mamba update bowtie

  To create a new environment, run::

      mamba create --name myenvname bowtie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bowtie:<tag>

   (see `bowtie/tags`_ for valid values for ``<tag>``)


.. |downloads_bowtie| image:: https://img.shields.io/conda/dn/bioconda/bowtie.svg?style=flat
   :target: https://anaconda.org/bioconda/bowtie
   :alt:   (downloads)
.. |docker_bowtie| image:: https://quay.io/repository/biocontainers/bowtie/status
   :target: https://quay.io/repository/biocontainers/bowtie
.. _`bowtie/tags`: https://quay.io/repository/biocontainers/bowtie?tab=tags


.. raw:: html

    <script>
        var package = "bowtie";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bowtie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bowtie/README.html