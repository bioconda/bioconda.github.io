:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cstag'
.. highlight: bash

cstag
=====

.. conda:recipe:: cstag
   :replaces_section_title:
   :noindex:

   Python module to manipulate the minimap2\'s CS tag

   :homepage: https://github.com/akikuno/cstag
   :documentation: https://akikuno.github.io/cstag/cstag/
   
   :license: MIT
   :recipe: /`cstag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cstag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cstag/meta.yaml>`_

   


.. conda:package:: cstag

   |downloads_cstag| |docker_cstag|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.5-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  </span></summary>
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.1-0``,  ``0.3.1-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.0-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: ``>=3.7.0,<4.0.0``
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

      mamba install cstag

   and update with::

      mamba update cstag

  To create a new environment, run::

      mamba create --name myenvname cstag

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cstag:<tag>

   (see `cstag/tags`_ for valid values for ``<tag>``)


.. |downloads_cstag| image:: https://img.shields.io/conda/dn/bioconda/cstag.svg?style=flat
   :target: https://anaconda.org/bioconda/cstag
   :alt:   (downloads)
.. |docker_cstag| image:: https://quay.io/repository/biocontainers/cstag/status
   :target: https://quay.io/repository/biocontainers/cstag
.. _`cstag/tags`: https://quay.io/repository/biocontainers/cstag?tab=tags


.. raw:: html

    <script>
        var package = "cstag";
        var versions = ["1.1.0","1.1.0","1.0.5","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cstag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cstag/README.html