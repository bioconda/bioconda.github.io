:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pxblat'
.. highlight: bash

pxblat
======

.. conda:recipe:: pxblat
   :replaces_section_title:
   :noindex:

   PxBLAT\: An Efficient and Ergonomics Python Binding Library for BLAT.

   :homepage: https://github.com/ylab-hi/pxblat
   :documentation: https://pxblat.readthedocs.io/en/latest/
   
   :developer docs: https://pypi.org/project/pxblat/
   :license: OTHER
   :recipe: /`pxblat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pxblat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pxblat/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.08.02.551686`

   


.. conda:package:: pxblat

   |downloads_pxblat| |docker_pxblat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.10-0</code>,  <code>1.1.8-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.0.3-0</code>,  <code>1.0.0-0</code>,  <code>0.3.10-1</code>,  <code>0.3.10-0</code>,  <code>0.3.6-0</code>,  </span></summary>
      

      ``1.1.10-0``,  ``1.1.8-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.3-0``,  ``1.0.0-0``,  ``0.3.10-1``,  ``0.3.10-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends deprecated: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends loguru: 
   :depends mashumaro: 
   :depends pybind11: ``>=2.10.4``
   :depends pysimdjson: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends rich: 
   :depends typer: 
   :depends urllib3: 
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

      mamba install pxblat

   and update with::

      mamba update pxblat

  To create a new environment, run::

      mamba create --name myenvname pxblat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pxblat:<tag>

   (see `pxblat/tags`_ for valid values for ``<tag>``)


.. |downloads_pxblat| image:: https://img.shields.io/conda/dn/bioconda/pxblat.svg?style=flat
   :target: https://anaconda.org/bioconda/pxblat
   :alt:   (downloads)
.. |docker_pxblat| image:: https://quay.io/repository/biocontainers/pxblat/status
   :target: https://quay.io/repository/biocontainers/pxblat
.. _`pxblat/tags`: https://quay.io/repository/biocontainers/pxblat?tab=tags


.. raw:: html

    <script>
        var package = "pxblat";
        var versions = ["1.1.10","1.1.8","1.1.2","1.1.1","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pxblat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pxblat/README.html