:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sage-proteomics'
.. highlight: bash

sage-proteomics
===============

.. conda:recipe:: sage-proteomics
   :replaces_section_title:
   :noindex:

   Proteomics searching so fast it feels like magic.

   :homepage: https://github.com/lazear/sage
   :documentation: https://lazear.github.io/sage/
   
   :license: MIT / MIT
   :recipe: /`sage-proteomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sage-proteomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sage-proteomics/meta.yaml>`_

   


.. conda:package:: sage-proteomics

   |downloads_sage-proteomics| |docker_sage-proteomics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.14.5-0</code>,  <code>0.14.4-0</code>,  <code>0.14.3-0</code>,  <code>0.14.2-0</code>,  <code>0.14.1-0</code>,  <code>0.14.0-0</code>,  <code>0.13.4-0</code>,  <code>0.13.3-0</code>,  <code>0.13.2-0</code>,  </span></summary>
      

      ``0.14.5-0``,  ``0.14.4-0``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.4-0``,  ``0.13.3-0``,  ``0.13.2-0``,  ``0.13.1-2``,  ``0.13.1-0``,  ``0.12.0-2``,  ``0.12.0-1``,  ``0.12.0-0``,  ``0.11.2-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.4-0``,  ``0.9.0-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install sage-proteomics

   and update with::

      mamba update sage-proteomics

  To create a new environment, run::

      mamba create --name myenvname sage-proteomics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sage-proteomics:<tag>

   (see `sage-proteomics/tags`_ for valid values for ``<tag>``)


.. |downloads_sage-proteomics| image:: https://img.shields.io/conda/dn/bioconda/sage-proteomics.svg?style=flat
   :target: https://anaconda.org/bioconda/sage-proteomics
   :alt:   (downloads)
.. |docker_sage-proteomics| image:: https://quay.io/repository/biocontainers/sage-proteomics/status
   :target: https://quay.io/repository/biocontainers/sage-proteomics
.. _`sage-proteomics/tags`: https://quay.io/repository/biocontainers/sage-proteomics?tab=tags


.. raw:: html

    <script>
        var package = "sage-proteomics";
        var versions = ["0.14.5","0.14.4","0.14.3","0.14.2","0.14.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sage-proteomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sage-proteomics/README.html