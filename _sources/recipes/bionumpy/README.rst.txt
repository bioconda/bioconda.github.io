:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bionumpy'
.. highlight: bash

bionumpy
========

.. conda:recipe:: bionumpy
   :replaces_section_title:
   :noindex:

   Library for working with biological sequence data as numpy arrays

   :homepage: https://github.com/bionumpy/bionumpy
   :license: MIT
   :recipe: /`bionumpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bionumpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bionumpy/meta.yaml>`_

   


.. conda:package:: bionumpy

   |downloads_bionumpy| |docker_bionumpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.31-0</code>,  <code>0.2.29-0</code>,  <code>0.2.27-0</code>,  <code>0.2.26-0</code>,  <code>0.2.25-0</code>,  <code>0.2.24-0</code>,  <code>0.2.23-0</code>,  <code>0.2.22-0</code>,  <code>0.2.20-0</code>,  </span></summary>
      

      ``0.2.31-0``,  ``0.2.29-0``,  ``0.2.27-0``,  ``0.2.26-0``,  ``0.2.25-0``,  ``0.2.24-0``,  ``0.2.23-0``,  ``0.2.22-0``,  ``0.2.20-0``,  ``0.2.19-0``,  ``0.2.18-0``,  ``0.2.17-0``,  ``0.2.16-0``,  ``0.2.15-0``,  ``0.2.13-0``,  ``0.2.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends npstructures: ``>=0.2.9``
   :depends numpy: ``>=1.20,<1.24``
   :depends python: ``>=3``
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

      mamba install bionumpy

   and update with::

      mamba update bionumpy

  To create a new environment, run::

      mamba create --name myenvname bionumpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bionumpy:<tag>

   (see `bionumpy/tags`_ for valid values for ``<tag>``)


.. |downloads_bionumpy| image:: https://img.shields.io/conda/dn/bioconda/bionumpy.svg?style=flat
   :target: https://anaconda.org/bioconda/bionumpy
   :alt:   (downloads)
.. |docker_bionumpy| image:: https://quay.io/repository/biocontainers/bionumpy/status
   :target: https://quay.io/repository/biocontainers/bionumpy
.. _`bionumpy/tags`: https://quay.io/repository/biocontainers/bionumpy?tab=tags


.. raw:: html

    <script>
        var package = "bionumpy";
        var versions = ["0.2.31","0.2.29","0.2.27","0.2.26","0.2.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bionumpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bionumpy/README.html