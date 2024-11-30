:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beast'
.. highlight: bash

beast
=====

.. conda:recipe:: beast
   :replaces_section_title:
   :noindex:

   BEAST is a cross\-platform program for Bayesian analysis of molecular sequences using MCMC

   :homepage: http://beast.bio.ed.ac.uk
   :developer docs: https://github.com/beast-dev/beast-mcmc
   :license: GPL / LGPL-2.1
   :recipe: /`beast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast/meta.yaml>`_
   :links: biotools: :biotools:`beast`, doi: :doi:`10.1093/molbev/mss075`

   


.. conda:package:: beast

   |downloads_beast| |docker_beast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.10.4-2</code>,  <code>1.10.4-1</code>,  <code>1.10.4-0</code>,  <code>1.10.3-0</code>,  <code>1.10.2-0</code>,  <code>1.10.1-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-0</code>,  <code>1.8.4-0</code>,  </span></summary>
      

      ``1.10.4-2``,  ``1.10.4-1``,  ``1.10.4-0``,  ``1.10.3-0``,  ``1.10.2-0``,  ``1.10.1-0``,  ``1.10.0-2``,  ``1.10.0-0``,  ``1.8.4-0``,  ``1.8.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends beagle-lib: 
   :depends openjdk: 
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

      mamba install beast

   and update with::

      mamba update beast

  To create a new environment, run::

      mamba create --name myenvname beast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/beast:<tag>

   (see `beast/tags`_ for valid values for ``<tag>``)


.. |downloads_beast| image:: https://img.shields.io/conda/dn/bioconda/beast.svg?style=flat
   :target: https://anaconda.org/bioconda/beast
   :alt:   (downloads)
.. |docker_beast| image:: https://quay.io/repository/biocontainers/beast/status
   :target: https://quay.io/repository/biocontainers/beast
.. _`beast/tags`: https://quay.io/repository/biocontainers/beast?tab=tags


.. raw:: html

    <script>
        var package = "beast";
        var versions = ["1.10.4","1.10.4","1.10.4","1.10.3","1.10.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beast/README.html