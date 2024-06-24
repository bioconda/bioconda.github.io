:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sickle-trim'
.. highlight: bash

sickle-trim
===========

.. conda:recipe:: sickle-trim
   :replaces_section_title:
   :noindex:

   Windowed Adaptive Trimming for fastq files using quality

   :homepage: https://github.com/najoshi/sickle
   :license: MIT
   :recipe: /`sickle-trim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sickle-trim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sickle-trim/meta.yaml>`_

   


.. conda:package:: sickle-trim

   |downloads_sickle-trim| |docker_sickle-trim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.33-10</code>,  <code>1.33-9</code>,  <code>1.33-8</code>,  <code>1.33-7</code>,  <code>1.33-6</code>,  <code>1.33-5</code>,  <code>1.33-4</code>,  <code>1.33-3</code>,  <code>1.33-2</code>,  </span></summary>
      

      ``1.33-10``,  ``1.33-9``,  ``1.33-8``,  ``1.33-7``,  ``1.33-6``,  ``1.33-5``,  ``1.33-4``,  ``1.33-3``,  ``1.33-2``,  ``1.33-1``,  ``1.33-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install sickle-trim

   and update with::

      mamba update sickle-trim

  To create a new environment, run::

      mamba create --name myenvname sickle-trim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sickle-trim:<tag>

   (see `sickle-trim/tags`_ for valid values for ``<tag>``)


.. |downloads_sickle-trim| image:: https://img.shields.io/conda/dn/bioconda/sickle-trim.svg?style=flat
   :target: https://anaconda.org/bioconda/sickle-trim
   :alt:   (downloads)
.. |docker_sickle-trim| image:: https://quay.io/repository/biocontainers/sickle-trim/status
   :target: https://quay.io/repository/biocontainers/sickle-trim
.. _`sickle-trim/tags`: https://quay.io/repository/biocontainers/sickle-trim?tab=tags


.. raw:: html

    <script>
        var package = "sickle-trim";
        var versions = ["1.33","1.33","1.33","1.33","1.33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sickle-trim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sickle-trim/README.html