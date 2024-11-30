:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treemix'
.. highlight: bash

treemix
=======

.. conda:recipe:: treemix
   :replaces_section_title:
   :noindex:

   TreeMix is a method for inferring the patterns of population splits and mixtures in the history of a set of populations.

   :homepage: http://pritchardlab.stanford.edu/software.html
   :license: GPL / GPLv3
   :recipe: /`treemix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treemix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treemix/meta.yaml>`_
   :links: biotools: :biotools:`TreeMix`, doi: :doi:`10.1371/journal.pgen.1002967`

   


.. conda:package:: treemix

   |downloads_treemix| |docker_treemix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.13-9</code>,  <code>1.13-8</code>,  <code>1.13-7</code>,  <code>1.13-6</code>,  <code>1.13-5</code>,  <code>1.13-4</code>,  <code>1.13-3</code>,  <code>1.13-2</code>,  <code>1.13-1</code>,  </span></summary>
      

      ``1.13-9``,  ``1.13-8``,  ``1.13-7``,  ``1.13-6``,  ``1.13-5``,  ``1.13-4``,  ``1.13-3``,  ``1.13-2``,  ``1.13-1``,  ``1.13-0``,  ``1.12-3``,  ``1.12-2``,  ``1.12-1``,  ``1.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends r-base: ``>=3.6``
   :depends r-rcolorbrewer: 
   :depends zlib: 
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

      mamba install treemix

   and update with::

      mamba update treemix

  To create a new environment, run::

      mamba create --name myenvname treemix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/treemix:<tag>

   (see `treemix/tags`_ for valid values for ``<tag>``)


.. |downloads_treemix| image:: https://img.shields.io/conda/dn/bioconda/treemix.svg?style=flat
   :target: https://anaconda.org/bioconda/treemix
   :alt:   (downloads)
.. |docker_treemix| image:: https://quay.io/repository/biocontainers/treemix/status
   :target: https://quay.io/repository/biocontainers/treemix
.. _`treemix/tags`: https://quay.io/repository/biocontainers/treemix?tab=tags


.. raw:: html

    <script>
        var package = "treemix";
        var versions = ["1.13","1.13","1.13","1.13","1.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treemix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treemix/README.html