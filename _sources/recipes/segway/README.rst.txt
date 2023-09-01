:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'segway'
.. highlight: bash

segway
======

.. conda:recipe:: segway
   :replaces_section_title:
   :noindex:

   a tool for easy pattern discovery and identification in functional genomics data.

   :homepage: http://segway.hoffmanlab.org/
   :license: GPL2
   :recipe: /`segway <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segway>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segway/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx603`, biotools: :biotools:`segway`

   


.. conda:package:: segway

   |downloads_segway| |docker_segway|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.4-1</code>,  <code>3.0.4-0</code>,  <code>3.0.3-0</code>,  <code>3.0.2-1</code>,  <code>3.0.2-0</code>,  <code>3.0-1</code>,  <code>3.0-0</code>,  <code>2.0.5-1</code>,  <code>2.0.5-0</code>,  </span></summary>
      

      ``3.0.4-1``,  ``3.0.4-0``,  ``3.0.3-0``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0-1``,  ``3.0-0``,  ``2.0.5-1``,  ``2.0.5-0``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.2-3``,  ``2.0.2-2``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0-0``,  ``1.4.4-0``,  ``1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends autolog: 
   :depends colorbrewer: 
   :depends drmaa: ``>=0.4a3``
   :depends genomedata: 
   :depends gmtk: ``>=1.4.4``
   :depends optbuild: 
   :depends optplus: 
   :depends path.py: 
   :depends python: 
   :depends six: 
   :depends textinput: 
   :depends ucsc-bedtobigbed: 
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

      mamba install segway

   and update with::

      mamba update segway

  To create a new environment, run::

      mamba create --name myenvname segway

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/segway:<tag>

   (see `segway/tags`_ for valid values for ``<tag>``)


.. |downloads_segway| image:: https://img.shields.io/conda/dn/bioconda/segway.svg?style=flat
   :target: https://anaconda.org/bioconda/segway
   :alt:   (downloads)
.. |docker_segway| image:: https://quay.io/repository/biocontainers/segway/status
   :target: https://quay.io/repository/biocontainers/segway
.. _`segway/tags`: https://quay.io/repository/biocontainers/segway?tab=tags


.. raw:: html

    <script>
        var package = "segway";
        var versions = ["3.0.4","3.0.4","3.0.3","3.0.2","3.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segway/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segway/README.html