:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'goalign'
.. highlight: bash

goalign
=======

.. conda:recipe:: goalign
   :replaces_section_title:
   :noindex:

   goalign is a set of command line tools to manipulate multiple alignments

   :homepage: https://github.com/evolbioinfo/goalign
   :license: GPL-2.0
   :recipe: /`goalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goalign/meta.yaml>`_

   


.. conda:package:: goalign

   |downloads_goalign| |docker_goalign|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.0-0</code>,  <code>0.3.9-0</code>,  <code>0.3.8-1</code>,  <code>0.3.8-0</code>,  <code>0.3.7-0</code>,  <code>0.3.6-0</code>,  <code>0.3.5-1</code>,  <code>0.3.5-0</code>,  <code>0.3.4-0</code>,  </span></summary>
      

      ``0.4.0-0``,  ``0.3.9-0``,  ``0.3.8-1``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-1``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-2``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.9-0``,  ``0.2.8-1``,  ``0.2.8-0``

      
      .. raw:: html

         </details>
      

   
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install goalign

   and update with::

      mamba update goalign

  To create a new environment, run::

      mamba create --name myenvname goalign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/goalign:<tag>

   (see `goalign/tags`_ for valid values for ``<tag>``)


.. |downloads_goalign| image:: https://img.shields.io/conda/dn/bioconda/goalign.svg?style=flat
   :target: https://anaconda.org/bioconda/goalign
   :alt:   (downloads)
.. |docker_goalign| image:: https://quay.io/repository/biocontainers/goalign/status
   :target: https://quay.io/repository/biocontainers/goalign
.. _`goalign/tags`: https://quay.io/repository/biocontainers/goalign?tab=tags


.. raw:: html

    <script>
        var package = "goalign";
        var versions = ["0.4.0","0.3.9","0.3.8","0.3.8","0.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/goalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/goalign/README.html