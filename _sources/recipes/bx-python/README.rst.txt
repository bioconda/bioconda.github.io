:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bx-python'
.. highlight: bash

bx-python
=========

.. conda:recipe:: bx-python
   :replaces_section_title:
   :noindex:

   Tools for manipulating biological data\, particularly multiple sequence alignments

   :homepage: https://github.com/bxlab/bx-python
   :documentation: https://buildmedia.readthedocs.org/media/pdf/bx-python/latest/bx-python.pdf
   
   :license: MIT / MIT
   :recipe: /`bx-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bx-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bx-python/meta.yaml>`_
   :links: biotools: :biotools:`bx-python`

   


.. conda:package:: bx-python

   |downloads_bx-python| |docker_bx-python|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.11.0-2</code>,  <code>0.11.0-1</code>,  <code>0.11.0-0</code>,  <code>0.10.0-0</code>,  <code>0.9.0-2</code>,  <code>0.9.0-1</code>,  <code>0.9.0-0</code>,  <code>0.8.13-1</code>,  <code>0.8.13-0</code>,  </span></summary>
      

      ``0.11.0-2``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.13-1``,  ``0.8.13-0``,  ``0.8.12-0``,  ``0.8.11-1``,  ``0.8.11-0``,  ``0.8.10-0``,  ``0.8.9-2``,  ``0.8.9-1``,  ``0.8.9-0``,  ``0.8.8-1``,  ``0.8.8-0``,  ``0.8.7-0``,  ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.2-2``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.7.4-0``,  ``0.7.3-1``,  ``0.7.3-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.7.1-1``,  ``0.7.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install bx-python

   and update with::

      mamba update bx-python

  To create a new environment, run::

      mamba create --name myenvname bx-python

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bx-python:<tag>

   (see `bx-python/tags`_ for valid values for ``<tag>``)


.. |downloads_bx-python| image:: https://img.shields.io/conda/dn/bioconda/bx-python.svg?style=flat
   :target: https://anaconda.org/bioconda/bx-python
   :alt:   (downloads)
.. |docker_bx-python| image:: https://quay.io/repository/biocontainers/bx-python/status
   :target: https://quay.io/repository/biocontainers/bx-python
.. _`bx-python/tags`: https://quay.io/repository/biocontainers/bx-python?tab=tags


.. raw:: html

    <script>
        var package = "bx-python";
        var versions = ["0.11.0","0.11.0","0.11.0","0.10.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bx-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bx-python/README.html