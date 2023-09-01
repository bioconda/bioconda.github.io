:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypore'
.. highlight: bash

pypore
======

.. conda:recipe:: pypore
   :replaces_section_title:
   :noindex:

   Pythonic\/Cythonic Nanopore Translocation Analysis

   :homepage: http://parkin.github.io/pypore/
   :license: Apache 2.0
   :recipe: /`pypore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypore/meta.yaml>`_

   


.. conda:package:: pypore

   |downloads_pypore| |docker_pypore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.6.dev20180702231556-5</code>,  <code>0.0.6.dev20180702231556-4</code>,  <code>0.0.6.dev20180702231556-3</code>,  <code>0.0.6.dev20180702231556-2</code>,  <code>0.0.6.dev20180702231556-1</code>,  <code>0.0.6.dev20180702231556-0</code>,  <code>0.0.6.dev20161116235131-1</code>,  <code>0.0.6.dev20161116235131-0</code>,  <code>0.0.5.dev20160304220337-1</code>,  </span></summary>
      

      ``0.0.6.dev20180702231556-5``,  ``0.0.6.dev20180702231556-4``,  ``0.0.6.dev20180702231556-3``,  ``0.0.6.dev20180702231556-2``,  ``0.0.6.dev20180702231556-1``,  ``0.0.6.dev20180702231556-0``,  ``0.0.6.dev20161116235131-1``,  ``0.0.6.dev20161116235131-0``,  ``0.0.5.dev20160304220337-1``,  ``0.0.5.dev20160304220337-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends numpy: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
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

      mamba install pypore

   and update with::

      mamba update pypore

  To create a new environment, run::

      mamba create --name myenvname pypore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pypore:<tag>

   (see `pypore/tags`_ for valid values for ``<tag>``)


.. |downloads_pypore| image:: https://img.shields.io/conda/dn/bioconda/pypore.svg?style=flat
   :target: https://anaconda.org/bioconda/pypore
   :alt:   (downloads)
.. |docker_pypore| image:: https://quay.io/repository/biocontainers/pypore/status
   :target: https://quay.io/repository/biocontainers/pypore
.. _`pypore/tags`: https://quay.io/repository/biocontainers/pypore?tab=tags


.. raw:: html

    <script>
        var package = "pypore";
        var versions = ["0.0.6.dev20180702231556","0.0.6.dev20180702231556","0.0.6.dev20180702231556","0.0.6.dev20180702231556","0.0.6.dev20180702231556"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypore/README.html