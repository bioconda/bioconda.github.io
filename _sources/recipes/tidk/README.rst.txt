:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tidk'
.. highlight: bash

tidk
====

.. conda:recipe:: tidk
   :replaces_section_title:
   :noindex:

   Identify and find telomeres\, or telomeric repeats in a genome.

   :homepage: https://github.com/tolkit/telomeric-identifier
   :license: MIT / MIT
   :recipe: /`tidk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tidk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tidk/meta.yaml>`_

   


.. conda:package:: tidk

   |downloads_tidk| |docker_tidk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.63-0</code>,  <code>0.2.41-0</code>,  <code>0.2.31-2</code>,  <code>0.2.31-1</code>,  <code>0.2.31-0</code>,  <code>0.2.1-1</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.5-1</code>,  </span></summary>
      

      ``0.2.63-0``,  ``0.2.41-0``,  ``0.2.31-2``,  ``0.2.31-1``,  ``0.2.31-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.5-1``,  ``0.1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends openssl: ``>=3.3.2,<4.0a0``
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

      mamba install tidk

   and update with::

      mamba update tidk

  To create a new environment, run::

      mamba create --name myenvname tidk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tidk:<tag>

   (see `tidk/tags`_ for valid values for ``<tag>``)


.. |downloads_tidk| image:: https://img.shields.io/conda/dn/bioconda/tidk.svg?style=flat
   :target: https://anaconda.org/bioconda/tidk
   :alt:   (downloads)
.. |docker_tidk| image:: https://quay.io/repository/biocontainers/tidk/status
   :target: https://quay.io/repository/biocontainers/tidk
.. _`tidk/tags`: https://quay.io/repository/biocontainers/tidk?tab=tags


.. raw:: html

    <script>
        var package = "tidk";
        var versions = ["0.2.63","0.2.41","0.2.31","0.2.31","0.2.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tidk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tidk/README.html