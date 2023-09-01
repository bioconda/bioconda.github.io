:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'desalt'
.. highlight: bash

desalt
======

.. conda:recipe:: desalt
   :replaces_section_title:
   :noindex:

   De Bruijn graph\-based Spliced Aligner for Long Transcriptome reads

   :homepage: https://github.com/ydLiu-HIT/deSALT
   :license: MIT
   :recipe: /`desalt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/desalt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/desalt/meta.yaml>`_

   


.. conda:package:: desalt

   |downloads_desalt| |docker_desalt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.6-4</code>,  <code>1.5.6-3</code>,  <code>1.5.6-2</code>,  <code>1.5.6-1</code>,  <code>1.5.6-0</code>,  <code>1.5.5-0</code>,  <code>1.5.4-0</code>,  <code>1.5.3-0</code>,  <code>1.5.2-0</code>,  </span></summary>
      

      ``1.5.6-4``,  ``1.5.6-3``,  ``1.5.6-2``,  ``1.5.6-1``,  ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5-0``,  ``1.4-1``,  ``1.4-0``,  ``1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install desalt

   and update with::

      mamba update desalt

  To create a new environment, run::

      mamba create --name myenvname desalt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/desalt:<tag>

   (see `desalt/tags`_ for valid values for ``<tag>``)


.. |downloads_desalt| image:: https://img.shields.io/conda/dn/bioconda/desalt.svg?style=flat
   :target: https://anaconda.org/bioconda/desalt
   :alt:   (downloads)
.. |docker_desalt| image:: https://quay.io/repository/biocontainers/desalt/status
   :target: https://quay.io/repository/biocontainers/desalt
.. _`desalt/tags`: https://quay.io/repository/biocontainers/desalt?tab=tags


.. raw:: html

    <script>
        var package = "desalt";
        var versions = ["1.5.6","1.5.6","1.5.6","1.5.6","1.5.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/desalt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/desalt/README.html