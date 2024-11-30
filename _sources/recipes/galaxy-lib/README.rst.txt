:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-lib'
.. highlight: bash

galaxy-lib
==========

.. conda:recipe:: galaxy-lib
   :replaces_section_title:
   :noindex:

   Subset of Galaxy \(http\:\/\/galaxyproject.org\/\) core code base designed to be used a library.

   :homepage: https://github.com/galaxyproject/galaxy-lib
   :documentation: https://galaxy-lib.readthedocs.org
   
   :license: OTHER / Academic Free (AFL)
   :recipe: /`galaxy-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-lib/meta.yaml>`_

   


.. conda:package:: galaxy-lib

   |downloads_galaxy-lib| |docker_galaxy-lib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>19.5.2-1</code>,  <code>19.5.2-0</code>,  <code>19.5.1-0</code>,  <code>18.9.2-0</code>,  <code>18.9.1-0</code>,  <code>18.5.13-2</code>,  <code>18.5.13-0</code>,  <code>18.5.5-0</code>,  <code>18.5.4-0</code>,  </span></summary>
      

      ``19.5.2-1``,  ``19.5.2-0``,  ``19.5.1-0``,  ``18.9.2-0``,  ``18.9.1-0``,  ``18.5.13-2``,  ``18.5.13-0``,  ``18.5.5-0``,  ``18.5.4-0``,  ``17.9.10-0``,  ``17.9.9-0``,  ``17.9.7-1``,  ``17.9.7-0``,  ``17.5.9-1``,  ``17.5.9-0``,  ``17.1.2-0``,  ``16.10.9-1``,  ``16.10.9-0``,  ``16.10.8-1``,  ``16.10.8-0``,  ``16.10.6-0``,  ``16.10.4-1``,  ``16.10.4-0``,  ``16.10.3-0``,  ``16.7.10-1``,  ``16.7.10-0``,  ``16.4.0-1``,  ``16.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends boltons: 
   :depends docutils: 
   :depends markupsafe: 
   :depends packaging: 
   :depends python: 
   :depends pyyaml: 
   :depends six: ``>=1.9.0``
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

      mamba install galaxy-lib

   and update with::

      mamba update galaxy-lib

  To create a new environment, run::

      mamba create --name myenvname galaxy-lib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/galaxy-lib:<tag>

   (see `galaxy-lib/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-lib| image:: https://img.shields.io/conda/dn/bioconda/galaxy-lib.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-lib
   :alt:   (downloads)
.. |docker_galaxy-lib| image:: https://quay.io/repository/biocontainers/galaxy-lib/status
   :target: https://quay.io/repository/biocontainers/galaxy-lib
.. _`galaxy-lib/tags`: https://quay.io/repository/biocontainers/galaxy-lib?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-lib";
        var versions = ["19.5.2","19.5.2","19.5.1","18.9.2","18.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-lib/README.html