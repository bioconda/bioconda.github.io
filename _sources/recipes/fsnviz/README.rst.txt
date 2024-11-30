:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fsnviz'
.. highlight: bash

fsnviz
======

.. conda:recipe:: fsnviz
   :replaces_section_title:
   :noindex:

   Tool for plotting gene fusion events detected by various tools using Circos.

   :homepage: https://github.com/bow/fsnviz
   :license: BSD / BSD
   :recipe: /`fsnviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fsnviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fsnviz/meta.yaml>`_

   


.. conda:package:: fsnviz

   |downloads_fsnviz| |docker_fsnviz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.0-6</code>,  <code>0.3.0-5</code>,  <code>0.3.0-4</code>,  <code>0.3.0-3</code>,  <code>0.3.0-2</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.0-1</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``0.3.0-6``,  ``0.3.0-5``,  ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends circos: ``>=0.69.2``
   :depends click: ``>=6.6``
   :depends crimson: ``>=1.1.0``
   :depends jinja2: ``2.9.5``
   :depends python: ``>=3``
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

      mamba install fsnviz

   and update with::

      mamba update fsnviz

  To create a new environment, run::

      mamba create --name myenvname fsnviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fsnviz:<tag>

   (see `fsnviz/tags`_ for valid values for ``<tag>``)


.. |downloads_fsnviz| image:: https://img.shields.io/conda/dn/bioconda/fsnviz.svg?style=flat
   :target: https://anaconda.org/bioconda/fsnviz
   :alt:   (downloads)
.. |docker_fsnviz| image:: https://quay.io/repository/biocontainers/fsnviz/status
   :target: https://quay.io/repository/biocontainers/fsnviz
.. _`fsnviz/tags`: https://quay.io/repository/biocontainers/fsnviz?tab=tags


.. raw:: html

    <script>
        var package = "fsnviz";
        var versions = ["0.3.0","0.3.0","0.3.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fsnviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fsnviz/README.html