:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cramino'
.. highlight: bash

cramino
=======

.. conda:recipe:: cramino
   :replaces_section_title:
   :noindex:

   A tool for very fast quality assessment of long read cram\/bam files.

   :homepage: https://github.com/wdecoster/cramino
   :license: MIT
   :recipe: /`cramino <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cramino>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cramino/meta.yaml>`_

   


.. conda:package:: cramino

   |downloads_cramino| |docker_cramino|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.15.0-0</code>,  <code>0.14.5-0</code>,  <code>0.14.4-0</code>,  <code>0.14.3-0</code>,  <code>0.14.1-0</code>,  <code>0.13.1-0</code>,  <code>0.13.0-0</code>,  <code>0.11.1-0</code>,  <code>0.11.0-0</code>,  </span></summary>
      

      ``0.15.0-0``,  ``0.14.5-0``,  ``0.14.4-0``,  ``0.14.3-0``,  ``0.14.1-0``,  ``0.13.1-0``,  ``0.13.0-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.9-0``,  ``0.9.7-2``,  ``0.9.7-1``,  ``0.9.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
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

      mamba install cramino

   and update with::

      mamba update cramino

  To create a new environment, run::

      mamba create --name myenvname cramino

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cramino:<tag>

   (see `cramino/tags`_ for valid values for ``<tag>``)


.. |downloads_cramino| image:: https://img.shields.io/conda/dn/bioconda/cramino.svg?style=flat
   :target: https://anaconda.org/bioconda/cramino
   :alt:   (downloads)
.. |docker_cramino| image:: https://quay.io/repository/biocontainers/cramino/status
   :target: https://quay.io/repository/biocontainers/cramino
.. _`cramino/tags`: https://quay.io/repository/biocontainers/cramino?tab=tags


.. raw:: html

    <script>
        var package = "cramino";
        var versions = ["0.15.0","0.14.5","0.14.4","0.14.3","0.14.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cramino/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cramino/README.html