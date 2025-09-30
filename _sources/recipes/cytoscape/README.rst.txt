:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cytoscape'
.. highlight: bash

cytoscape
=========

.. conda:recipe:: cytoscape
   :replaces_section_title:
   :noindex:

   Cytoscape\: an open source platform for network analysis and visualization.

   :homepage: https://cytoscape.org
   :developer docs: https://github.com/cytoscape/cytoscape
   :license: GPL / LGPL
   :recipe: /`cytoscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cytoscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cytoscape/meta.yaml>`_
   :links: biotools: :biotools:`cytoscape`, doi: :doi:`10.1101/gr.1239303`

   


.. conda:package:: cytoscape

   |downloads_cytoscape| |docker_cytoscape|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.10.4-0</code>,  <code>3.10.3-0</code>,  <code>3.10.2-0</code>,  <code>3.10.1-0</code>,  <code>3.9.1-1</code>,  <code>3.9.1-0</code>,  <code>3.9.0-0</code>,  <code>3.8.2-0</code>,  <code>3.7.2-1</code>,  </span></summary>
      

      ``3.10.4-0``,  ``3.10.3-0``,  ``3.10.2-0``,  ``3.10.1-0``,  ``3.9.1-1``,  ``3.9.1-0``,  ``3.9.0-0``,  ``3.8.2-0``,  ``3.7.2-1``,  ``3.7.2-0``,  ``3.7.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends font-ttf-dejavu-sans-mono: 
   :depends fontconfig: 
   :depends freetype: 
   :depends openjdk: ``>=17,<20``
   :depends xorg-libxtst: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install cytoscape

   and update with::

      mamba update cytoscape

  To create a new environment, run::

      mamba create --name myenvname cytoscape

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cytoscape:<tag>

   (see `cytoscape/tags`_ for valid values for ``<tag>``)


.. |downloads_cytoscape| image:: https://img.shields.io/conda/dn/bioconda/cytoscape.svg?style=flat
   :target: https://anaconda.org/bioconda/cytoscape
   :alt:   (downloads)
.. |docker_cytoscape| image:: https://quay.io/repository/biocontainers/cytoscape/status
   :target: https://quay.io/repository/biocontainers/cytoscape
.. _`cytoscape/tags`: https://quay.io/repository/biocontainers/cytoscape?tab=tags


.. raw:: html

    <script>
        var package = "cytoscape";
        var versions = ["3.10.4","3.10.3","3.10.2","3.10.1","3.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cytoscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cytoscape/README.html