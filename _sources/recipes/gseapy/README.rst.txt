:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gseapy'
.. highlight: bash

gseapy
======

.. conda:recipe:: gseapy
   :replaces_section_title:
   :noindex:

   Gene Set Enrichment Analysis in Python.

   :homepage: https://github.com/zqfang/gseapy
   :documentation: https://gseapy.readthedocs.io/en/latest
   
   :license: BSD / BSD-3-Clause
   :recipe: /`gseapy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gseapy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gseapy/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btac757`, biotools: :biotools:`gseapy`

   


.. conda:package:: gseapy

   |downloads_gseapy| |docker_gseapy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.11-0</code>,  <code>1.1.10-0</code>,  <code>1.1.9-0</code>,  <code>1.1.8-0</code>,  <code>1.1.6-0</code>,  <code>1.1.5-0</code>,  <code>1.1.4-1</code>,  <code>1.1.4-0</code>,  <code>1.1.3-1</code>,  </span></summary>
      

      ``1.1.11-0``,  ``1.1.10-0``,  ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.1-0``,  ``0.12.0-1``,  ``0.12.0-0``,  ``0.10.8-0``,  ``0.10.7-0``,  ``0.10.6-0``,  ``0.10.5-0``,  ``0.10.4-0``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.19-0``,  ``0.9.18-0``,  ``0.9.17-0``,  ``0.9.16-0``,  ``0.9.15-0``,  ``0.9.13-0``,  ``0.9.9-0``,  ``0.9.8-0``,  ``0.9.7-0``,  ``0.9.5-1``,  ``0.9.3-1``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.11-0``,  ``0.8.6-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.7.4-3``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.6.2-0``,  ``0.6.0-0``,  ``0.5.3-0``,  ``0.5.2a0-0``,  ``0.4.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends matplotlib-base: ``>=2.2``
   :depends numpy: ``>=1.13.0``
   :depends pandas: 
   :depends pyopengl: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends requests: 
   :depends scipy: 
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

      mamba install gseapy

   and update with::

      mamba update gseapy

  To create a new environment, run::

      mamba create --name myenvname gseapy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gseapy:<tag>

   (see `gseapy/tags`_ for valid values for ``<tag>``)


.. |downloads_gseapy| image:: https://img.shields.io/conda/dn/bioconda/gseapy.svg?style=flat
   :target: https://anaconda.org/bioconda/gseapy
   :alt:   (downloads)
.. |docker_gseapy| image:: https://quay.io/repository/biocontainers/gseapy/status
   :target: https://quay.io/repository/biocontainers/gseapy
.. _`gseapy/tags`: https://quay.io/repository/biocontainers/gseapy?tab=tags


.. raw:: html

    <script>
        var package = "gseapy";
        var versions = ["1.1.11","1.1.10","1.1.9","1.1.8","1.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gseapy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gseapy/README.html