:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pretextmap'
.. highlight: bash

pretextmap
==========

.. conda:recipe:: pretextmap
   :replaces_section_title:
   :noindex:

   Paired REad TEXTure Mapper. Converts SAM formatted read pairs into genome contact maps.

   :homepage: https://github.com/sanger-tol/PretextMap
   :license: MIT / MIT
   :recipe: /`pretextmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretextmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretextmap/meta.yaml>`_

   


.. conda:package:: pretextmap

   |downloads_pretextmap| |docker_pretextmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.2-0</code>,  <code>0.1.9-4</code>,  <code>0.1.9-3</code>,  <code>0.1.9-2</code>,  <code>0.1.9-1</code>,  <code>0.1.9-0</code>,  <code>0.1.8-0</code>,  <code>0.1.7-0</code>,  <code>0.1.6-0</code>,  </span></summary>
      

      ``0.2.2-0``,  ``0.1.9-4``,  ``0.1.9-3``,  ``0.1.9-2``,  ``0.1.9-1``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install pretextmap

   and update with::

      mamba update pretextmap

  To create a new environment, run::

      mamba create --name myenvname pretextmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pretextmap:<tag>

   (see `pretextmap/tags`_ for valid values for ``<tag>``)


.. |downloads_pretextmap| image:: https://img.shields.io/conda/dn/bioconda/pretextmap.svg?style=flat
   :target: https://anaconda.org/bioconda/pretextmap
   :alt:   (downloads)
.. |docker_pretextmap| image:: https://quay.io/repository/biocontainers/pretextmap/status
   :target: https://quay.io/repository/biocontainers/pretextmap
.. _`pretextmap/tags`: https://quay.io/repository/biocontainers/pretextmap?tab=tags


.. raw:: html

    <script>
        var package = "pretextmap";
        var versions = ["0.2.2","0.1.9","0.1.9","0.1.9","0.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pretextmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pretextmap/README.html