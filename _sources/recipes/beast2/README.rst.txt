:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beast2'
.. highlight: bash

beast2
======

.. conda:recipe:: beast2
   :replaces_section_title:
   :noindex:

   BEAST 2 is a cross\-platform program for Bayesian phylogenetic analysis of molecular sequences.

   :homepage: http://www.beast2.org
   :license: LGPL-2.1-or-later
   :recipe: /`beast2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast2/meta.yaml>`_

   


.. conda:package:: beast2

   |downloads_beast2| |docker_beast2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.3-2</code>,  <code>2.6.3-1</code>,  <code>2.6.3-0</code>,  <code>2.6.2-0</code>,  <code>2.6.1-0</code>,  <code>2.6.0-0</code>,  <code>2.5.0-4</code>,  <code>2.5.0-3</code>,  <code>2.5.0-2</code>,  </span></summary>
      

      ``2.6.3-2``,  ``2.6.3-1``,  ``2.6.3-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.5-3``,  ``2.4.5-2``,  ``2.4.5-1``,  ``2.4.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends beagle-lib: 
   :depends font-ttf-ubuntu: 
   :depends fontconfig: 
   :depends freetype: 
   :depends openjdk: ``8.0.* zulu8*``
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

      mamba install beast2

   and update with::

      mamba update beast2

  To create a new environment, run::

      mamba create --name myenvname beast2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/beast2:<tag>

   (see `beast2/tags`_ for valid values for ``<tag>``)


.. |downloads_beast2| image:: https://img.shields.io/conda/dn/bioconda/beast2.svg?style=flat
   :target: https://anaconda.org/bioconda/beast2
   :alt:   (downloads)
.. |docker_beast2| image:: https://quay.io/repository/biocontainers/beast2/status
   :target: https://quay.io/repository/biocontainers/beast2
.. _`beast2/tags`: https://quay.io/repository/biocontainers/beast2?tab=tags


.. raw:: html

    <script>
        var package = "beast2";
        var versions = ["2.6.3","2.6.3","2.6.3","2.6.2","2.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beast2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beast2/README.html