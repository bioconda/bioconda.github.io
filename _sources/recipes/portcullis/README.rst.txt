:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'portcullis'
.. highlight: bash

portcullis
==========

.. conda:recipe:: portcullis
   :replaces_section_title:
   :noindex:

   Splice junction analysis and filtering from BAM files

   :homepage: https://github.com/maplesond/portcullis
   :license: GPL3
   :recipe: /`portcullis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/portcullis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/portcullis/meta.yaml>`_

   


.. conda:package:: portcullis

   |downloads_portcullis| |docker_portcullis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.4-1</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-2</code>,  <code>1.2.2-1</code>,  <code>1.2.2-0</code>,  <code>1.2.0-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-3</code>,  </span></summary>
      

      ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-3``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends samtools: ``>=1.9``
   :depends tabulate: 
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

      mamba install portcullis

   and update with::

      mamba update portcullis

  To create a new environment, run::

      mamba create --name myenvname portcullis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/portcullis:<tag>

   (see `portcullis/tags`_ for valid values for ``<tag>``)


.. |downloads_portcullis| image:: https://img.shields.io/conda/dn/bioconda/portcullis.svg?style=flat
   :target: https://anaconda.org/bioconda/portcullis
   :alt:   (downloads)
.. |docker_portcullis| image:: https://quay.io/repository/biocontainers/portcullis/status
   :target: https://quay.io/repository/biocontainers/portcullis
.. _`portcullis/tags`: https://quay.io/repository/biocontainers/portcullis?tab=tags


.. raw:: html

    <script>
        var package = "portcullis";
        var versions = ["1.2.4","1.2.4","1.2.3","1.2.2","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/portcullis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/portcullis/README.html