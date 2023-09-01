:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clinker-py'
.. highlight: bash

clinker-py
==========

.. conda:recipe:: clinker-py
   :replaces_section_title:
   :noindex:

   Gene cluster comparison figure generator

   :homepage: https://github.com/gamcil/clinker
   :license: MIT / MIT
   :recipe: /`clinker-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinker-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinker-py/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.4326585`

   


.. conda:package:: clinker-py

   |downloads_clinker-py| |docker_clinker-py|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.28-0</code>,  <code>0.0.27-0</code>,  <code>0.0.26-0</code>,  <code>0.0.25-0</code>,  <code>0.0.24-0</code>,  <code>0.0.23-0</code>,  <code>0.0.22-0</code>,  <code>0.0.21-0</code>,  <code>0.0.20-0</code>,  </span></summary>
      

      ``0.0.28-0``,  ``0.0.27-0``,  ``0.0.26-0``,  ``0.0.25-0``,  ``0.0.24-0``,  ``0.0.23-0``,  ``0.0.22-0``,  ``0.0.21-0``,  ``0.0.20-0``,  ``0.0.19-0``,  ``0.0.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.78``
   :depends disjoint-set: ``>=0.7.1``
   :depends gffutils: 
   :depends numpy: ``>=1.13.3``
   :depends python: 
   :depends scipy: ``>=1.3.3``
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

      mamba install clinker-py

   and update with::

      mamba update clinker-py

  To create a new environment, run::

      mamba create --name myenvname clinker-py

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clinker-py:<tag>

   (see `clinker-py/tags`_ for valid values for ``<tag>``)


.. |downloads_clinker-py| image:: https://img.shields.io/conda/dn/bioconda/clinker-py.svg?style=flat
   :target: https://anaconda.org/bioconda/clinker-py
   :alt:   (downloads)
.. |docker_clinker-py| image:: https://quay.io/repository/biocontainers/clinker-py/status
   :target: https://quay.io/repository/biocontainers/clinker-py
.. _`clinker-py/tags`: https://quay.io/repository/biocontainers/clinker-py?tab=tags


.. raw:: html

    <script>
        var package = "clinker-py";
        var versions = ["0.0.28","0.0.27","0.0.26","0.0.25","0.0.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clinker-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clinker-py/README.html