:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'irfinder'
.. highlight: bash

irfinder
========

.. conda:recipe:: irfinder
   :replaces_section_title:
   :noindex:

   Intron Retention Finder

   :homepage: https://github.com/dgaolab/IRFinder
   :documentation: https://github.com/williamritchie/IRFinder/wiki
   
   :license: MIT / MIT
   :recipe: /`irfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irfinder/meta.yaml>`_

   


.. conda:package:: irfinder

   |downloads_irfinder| |docker_irfinder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-5</code>,  <code>1.3.1-4</code>,  <code>1.3.1-3</code>,  <code>1.3.1-2</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.6-0</code>,  <code>1.2.5-0</code>,  </span></summary>
      

      ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-1``,  ``1.2.3-0``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: 
   :depends r-base: 
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

      mamba install irfinder

   and update with::

      mamba update irfinder

  To create a new environment, run::

      mamba create --name myenvname irfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/irfinder:<tag>

   (see `irfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_irfinder| image:: https://img.shields.io/conda/dn/bioconda/irfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/irfinder
   :alt:   (downloads)
.. |docker_irfinder| image:: https://quay.io/repository/biocontainers/irfinder/status
   :target: https://quay.io/repository/biocontainers/irfinder
.. _`irfinder/tags`: https://quay.io/repository/biocontainers/irfinder?tab=tags


.. raw:: html

    <script>
        var package = "irfinder";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irfinder/README.html