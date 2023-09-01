:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iucn_sim'
.. highlight: bash

iucn_sim
========

.. conda:recipe:: iucn_sim
   :replaces_section_title:
   :noindex:

   Simulate future extinctions and extinction rates for a given set of species\, based on IUCN threat assessments

   :homepage: https://github.com/tobiashofmann88/iucn_extinction_simulator
   :license: MIT
   :recipe: /`iucn_sim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iucn_sim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iucn_sim/meta.yaml>`_

   


.. conda:package:: iucn_sim

   |downloads_iucn_sim| |docker_iucn_sim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-0</code>,  <code>2.1.2-0</code>,  <code>2.1.1-0</code>,  <code>2.1-0</code>,  <code>2.0-0</code>,  <code>1.8-0</code>,  <code>1.7-0</code>,  <code>1.6-0</code>,  <code>1.5-0</code>,  </span></summary>
      

      ``2.2.0-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1-0``,  ``2.0-0``,  ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-rredlist: 
   :depends scipy: 
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

      mamba install iucn_sim

   and update with::

      mamba update iucn_sim

  To create a new environment, run::

      mamba create --name myenvname iucn_sim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/iucn_sim:<tag>

   (see `iucn_sim/tags`_ for valid values for ``<tag>``)


.. |downloads_iucn_sim| image:: https://img.shields.io/conda/dn/bioconda/iucn_sim.svg?style=flat
   :target: https://anaconda.org/bioconda/iucn_sim
   :alt:   (downloads)
.. |docker_iucn_sim| image:: https://quay.io/repository/biocontainers/iucn_sim/status
   :target: https://quay.io/repository/biocontainers/iucn_sim
.. _`iucn_sim/tags`: https://quay.io/repository/biocontainers/iucn_sim?tab=tags


.. raw:: html

    <script>
        var package = "iucn_sim";
        var versions = ["2.2.0","2.1.2","2.1.1","2.1","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iucn_sim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iucn_sim/README.html