:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bfc'
.. highlight: bash

bfc
===

.. conda:recipe:: bfc
   :replaces_section_title:
   :noindex:

   BFC is a standalone high\-performance tool for correcting sequencing errors from Illumina sequencing data.

   :homepage: https://github.com/lh3/bfc
   :license: MIT / MIT
   :recipe: /`bfc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bfc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bfc/meta.yaml>`_

   


.. conda:package:: bfc

   |downloads_bfc| |docker_bfc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>r181-12</code>,  <code>r181-11</code>,  <code>r181-10</code>,  <code>r181-9</code>,  <code>r181-8</code>,  <code>r181-7</code>,  <code>r181-6</code>,  <code>r181-5</code>,  <code>r181-4</code>,  </span></summary>
      

      ``r181-12``,  ``r181-11``,  ``r181-10``,  ``r181-9``,  ``r181-8``,  ``r181-7``,  ``r181-6``,  ``r181-5``,  ``r181-4``,  ``r181-3``,  ``r181-2``,  ``r181-1``,  ``r181-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install bfc

   and update with::

      mamba update bfc

  To create a new environment, run::

      mamba create --name myenvname bfc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bfc:<tag>

   (see `bfc/tags`_ for valid values for ``<tag>``)


.. |downloads_bfc| image:: https://img.shields.io/conda/dn/bioconda/bfc.svg?style=flat
   :target: https://anaconda.org/bioconda/bfc
   :alt:   (downloads)
.. |docker_bfc| image:: https://quay.io/repository/biocontainers/bfc/status
   :target: https://quay.io/repository/biocontainers/bfc
.. _`bfc/tags`: https://quay.io/repository/biocontainers/bfc?tab=tags


.. raw:: html

    <script>
        var package = "bfc";
        var versions = ["r181","r181","r181","r181","r181"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bfc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bfc/README.html