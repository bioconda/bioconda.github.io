:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simpleaf'
.. highlight: bash

simpleaf
========

.. conda:recipe:: simpleaf
   :replaces_section_title:
   :noindex:

   A rust framework to make using alevin\-fry even simpler.

   :homepage: https://github.com/COMBINE-lab/simpleaf
   :license: BSD 3-Clause
   :recipe: /`simpleaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simpleaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simpleaf/meta.yaml>`_

   


.. conda:package:: simpleaf

   |downloads_simpleaf| |docker_simpleaf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.15.1-0</code>,  <code>0.15.0-0</code>,  <code>0.14.1-0</code>,  <code>0.14.0-0</code>,  <code>0.13.0-0</code>,  <code>0.12.0-0</code>,  <code>0.11.1-0</code>,  <code>0.10.0-1</code>,  <code>0.10.0-0</code>,  </span></summary>
      

      ``0.15.1-0``,  ``0.15.0-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.1-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends alevin-fry: ``>=0.8.1``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends salmon: ``>=1.10.1``
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

      mamba install simpleaf

   and update with::

      mamba update simpleaf

  To create a new environment, run::

      mamba create --name myenvname simpleaf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/simpleaf:<tag>

   (see `simpleaf/tags`_ for valid values for ``<tag>``)


.. |downloads_simpleaf| image:: https://img.shields.io/conda/dn/bioconda/simpleaf.svg?style=flat
   :target: https://anaconda.org/bioconda/simpleaf
   :alt:   (downloads)
.. |docker_simpleaf| image:: https://quay.io/repository/biocontainers/simpleaf/status
   :target: https://quay.io/repository/biocontainers/simpleaf
.. _`simpleaf/tags`: https://quay.io/repository/biocontainers/simpleaf?tab=tags


.. raw:: html

    <script>
        var package = "simpleaf";
        var versions = ["0.15.1","0.15.0","0.14.1","0.14.0","0.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simpleaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simpleaf/README.html