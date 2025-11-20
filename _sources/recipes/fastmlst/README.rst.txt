:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastmlst'
.. highlight: bash

fastmlst
========

.. conda:recipe:: fastmlst
   :replaces_section_title:
   :noindex:

   A Fast Multilocus Sequence Typing scan against PubMLST typing schemes.

   :homepage: https://github.com/EnzoAndree/FastMLST
   :license: LGPL / LGPL-3.0-only
   :recipe: /`fastmlst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastmlst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastmlst/meta.yaml>`_

   


.. conda:package:: fastmlst

   |downloads_fastmlst| |docker_fastmlst|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.19-0</code>,  <code>0.0.16-0</code>,  <code>0.0.15-0</code>,  <code>0.0.14-0</code>,  <code>0.0.13-0</code>,  <code>0.0.12-0</code>,  <code>0.0.11-0</code>,  <code>0.0.10-0</code>,  <code>0.0.9-0</code>,  </span></summary>
      

      ``0.0.19-0``,  ``0.0.16-0``,  ``0.0.15-0``,  ``0.0.14-0``,  ``0.0.13-0``,  ``0.0.12-0``,  ``0.0.11-0``,  ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends blast: 
   :depends pandas: 
   :depends python: ``>=3``
   :depends tqdm: 
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

      mamba install fastmlst

   and update with::

      mamba update fastmlst

  To create a new environment, run::

      mamba create --name myenvname fastmlst

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastmlst:<tag>

   (see `fastmlst/tags`_ for valid values for ``<tag>``)


.. |downloads_fastmlst| image:: https://img.shields.io/conda/dn/bioconda/fastmlst.svg?style=flat
   :target: https://anaconda.org/bioconda/fastmlst
   :alt:   (downloads)
.. |docker_fastmlst| image:: https://quay.io/repository/biocontainers/fastmlst/status
   :target: https://quay.io/repository/biocontainers/fastmlst
.. _`fastmlst/tags`: https://quay.io/repository/biocontainers/fastmlst?tab=tags


.. raw:: html

    <script>
        var package = "fastmlst";
        var versions = ["0.0.19","0.0.16","0.0.15","0.0.14","0.0.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastmlst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastmlst/README.html