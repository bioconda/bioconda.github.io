:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastobo'
.. highlight: bash

fastobo
=======

.. conda:recipe:: fastobo
   :replaces_section_title:
   :noindex:

   Faultless AST for Open Biomedical Ontologies in Python

   :homepage: https://github.com/fastobo/fastobo-py
   :documentation: https://fastobo.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`fastobo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastobo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastobo/meta.yaml>`_
   :links: doi: :doi:`10.7490/f1000research.1117405.1`

   


.. conda:package:: fastobo

   |downloads_fastobo| |docker_fastobo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.3-2</code>,  <code>0.12.3-1</code>,  <code>0.12.3-0</code>,  <code>0.12.2-2</code>,  <code>0.12.2-1</code>,  <code>0.12.2-0</code>,  <code>0.12.1-0</code>,  <code>0.11.1-1</code>,  <code>0.11.1-0</code>,  </span></summary>
      

      ``0.12.3-2``,  ``0.12.3-1``,  ``0.12.3-0``,  ``0.12.2-2``,  ``0.12.2-1``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.11.1-1``,  ``0.11.1-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends __glibc: ``>=2.17,<3.0.a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends sysroot_linux-64: ``2.17.*``
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

      mamba install fastobo

   and update with::

      mamba update fastobo

  To create a new environment, run::

      mamba create --name myenvname fastobo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastobo:<tag>

   (see `fastobo/tags`_ for valid values for ``<tag>``)


.. |downloads_fastobo| image:: https://img.shields.io/conda/dn/bioconda/fastobo.svg?style=flat
   :target: https://anaconda.org/bioconda/fastobo
   :alt:   (downloads)
.. |docker_fastobo| image:: https://quay.io/repository/biocontainers/fastobo/status
   :target: https://quay.io/repository/biocontainers/fastobo
.. _`fastobo/tags`: https://quay.io/repository/biocontainers/fastobo?tab=tags


.. raw:: html

    <script>
        var package = "fastobo";
        var versions = ["0.12.3","0.12.3","0.12.3","0.12.2","0.12.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastobo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastobo/README.html