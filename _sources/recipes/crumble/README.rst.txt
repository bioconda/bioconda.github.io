:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crumble'
.. highlight: bash

crumble
=======

.. conda:recipe:: crumble
   :replaces_section_title:
   :noindex:

   Controllable lossy compression of BAM\/CRAM files

   :homepage: https://github.com/jkbonfield/crumble
   :license: BSD / multiple BSD style licenses
   :recipe: /`crumble <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crumble>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crumble/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty608`

   


.. conda:package:: crumble

   |downloads_crumble| |docker_crumble|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.1-2</code>,  <code>0.9.1-1</code>,  <code>0.9.1-0</code>,  <code>0.9.0-1</code>,  <code>0.9.0-0</code>,  <code>0.8.3-5</code>,  <code>0.8.3-4</code>,  <code>0.8.3-3</code>,  <code>0.8.3-2</code>,  </span></summary>
      

      ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.3-5``,  ``0.8.3-4``,  ``0.8.3-3``,  ``0.8.3-2``,  ``0.8.3-1``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install crumble

   and update with::

      mamba update crumble

  To create a new environment, run::

      mamba create --name myenvname crumble

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crumble:<tag>

   (see `crumble/tags`_ for valid values for ``<tag>``)


.. |downloads_crumble| image:: https://img.shields.io/conda/dn/bioconda/crumble.svg?style=flat
   :target: https://anaconda.org/bioconda/crumble
   :alt:   (downloads)
.. |docker_crumble| image:: https://quay.io/repository/biocontainers/crumble/status
   :target: https://quay.io/repository/biocontainers/crumble
.. _`crumble/tags`: https://quay.io/repository/biocontainers/crumble?tab=tags


.. raw:: html

    <script>
        var package = "crumble";
        var versions = ["0.9.1","0.9.1","0.9.1","0.9.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crumble/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crumble/README.html