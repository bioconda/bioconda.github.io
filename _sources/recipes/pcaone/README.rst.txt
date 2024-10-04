:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pcaone'
.. highlight: bash

pcaone
======

.. conda:recipe:: pcaone
   :replaces_section_title:
   :noindex:

   PCAone \- Principal Component Analysis All in One

   :homepage: https://github.com/Zilong-Li/PCAone
   :license: GPL3 / GPL-3.0-only
   :recipe: /`pcaone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcaone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcaone/meta.yaml>`_

   


.. conda:package:: pcaone

   |downloads_pcaone| |docker_pcaone|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.6-0</code>,  <code>0.4.5-0</code>,  <code>0.4.4-1</code>,  <code>0.4.4-0</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.9-0</code>,  </span></summary>
      

      ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.9-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-2``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.8-1``,  ``0.1.8-0``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends __glibc: ``>=2.17,<3.0.a0``
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends mkl: 
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

      mamba install pcaone

   and update with::

      mamba update pcaone

  To create a new environment, run::

      mamba create --name myenvname pcaone

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pcaone:<tag>

   (see `pcaone/tags`_ for valid values for ``<tag>``)


.. |downloads_pcaone| image:: https://img.shields.io/conda/dn/bioconda/pcaone.svg?style=flat
   :target: https://anaconda.org/bioconda/pcaone
   :alt:   (downloads)
.. |docker_pcaone| image:: https://quay.io/repository/biocontainers/pcaone/status
   :target: https://quay.io/repository/biocontainers/pcaone
.. _`pcaone/tags`: https://quay.io/repository/biocontainers/pcaone?tab=tags


.. raw:: html

    <script>
        var package = "pcaone";
        var versions = ["0.4.6","0.4.5","0.4.4","0.4.4","0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pcaone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pcaone/README.html