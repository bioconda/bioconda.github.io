:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ksw'
.. highlight: bash

ksw
===

.. conda:recipe:: ksw
   :replaces_section_title:
   :noindex:

   Ksw\: \(interactive\) smith\-waterman in C

   :homepage: https://github.com/nh13/ksw
   :license: MIT / MIT
   :recipe: /`ksw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ksw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ksw/meta.yaml>`_
   :links: biotools: :biotools:`ksw`

   


.. conda:package:: ksw

   |downloads_ksw| |docker_ksw|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.3-0</code>,  <code>0.2.2-2</code>,  <code>0.2.2-1</code>,  <code>0.2.2-0</code>,  <code>0.2.1-3</code>,  <code>0.2.1-2</code>,  <code>0.2.1-1</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``0.2.3-0``,  ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-3``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0a-0``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install ksw

   and update with::

      mamba update ksw

  To create a new environment, run::

      mamba create --name myenvname ksw

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ksw:<tag>

   (see `ksw/tags`_ for valid values for ``<tag>``)


.. |downloads_ksw| image:: https://img.shields.io/conda/dn/bioconda/ksw.svg?style=flat
   :target: https://anaconda.org/bioconda/ksw
   :alt:   (downloads)
.. |docker_ksw| image:: https://quay.io/repository/biocontainers/ksw/status
   :target: https://quay.io/repository/biocontainers/ksw
.. _`ksw/tags`: https://quay.io/repository/biocontainers/ksw?tab=tags


.. raw:: html

    <script>
        var package = "ksw";
        var versions = ["0.2.3","0.2.2","0.2.2","0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ksw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ksw/README.html