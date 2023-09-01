:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'refgenconf'
.. highlight: bash

refgenconf
==========

.. conda:recipe:: refgenconf
   :replaces_section_title:
   :noindex:

   A standardized configuration object for reference genome assemblies

   :homepage: https://refgenie.databio.org
   :license: BSD / BSD-2-Clause
   :recipe: /`refgenconf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refgenconf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refgenconf/meta.yaml>`_

   


.. conda:package:: refgenconf

   |downloads_refgenconf| |docker_refgenconf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.2-0</code>,  <code>0.12.0-0</code>,  <code>0.11.1-0</code>,  <code>0.11.0-0</code>,  <code>0.10.0-0</code>,  <code>0.9.3-0</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-1</code>,  </span></summary>
      

      ``0.12.2-0``,  ``0.12.0-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends future: 
   :depends jsonschema: ``>=3.0.1``
   :depends python: ``>=3.6``
   :depends pyyaml: 
   :depends requests: 
   :depends rich: ``>=9.0.1``
   :depends yacman: ``>=0.8.0``
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

      mamba install refgenconf

   and update with::

      mamba update refgenconf

  To create a new environment, run::

      mamba create --name myenvname refgenconf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/refgenconf:<tag>

   (see `refgenconf/tags`_ for valid values for ``<tag>``)


.. |downloads_refgenconf| image:: https://img.shields.io/conda/dn/bioconda/refgenconf.svg?style=flat
   :target: https://anaconda.org/bioconda/refgenconf
   :alt:   (downloads)
.. |docker_refgenconf| image:: https://quay.io/repository/biocontainers/refgenconf/status
   :target: https://quay.io/repository/biocontainers/refgenconf
.. _`refgenconf/tags`: https://quay.io/repository/biocontainers/refgenconf?tab=tags


.. raw:: html

    <script>
        var package = "refgenconf";
        var versions = ["0.12.2","0.12.0","0.11.1","0.11.0","0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/refgenconf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/refgenconf/README.html