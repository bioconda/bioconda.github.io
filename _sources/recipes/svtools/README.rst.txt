:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svtools'
.. highlight: bash

svtools
=======

.. conda:recipe:: svtools
   :replaces_section_title:
   :noindex:

   Tools for processing and analyzing structural variants

   :homepage: https://github.com/hall-lab/svtools
   :license: MIT / MIT License
   :recipe: /`svtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svtools/meta.yaml>`_

   


.. conda:package:: svtools

   |downloads_svtools| |docker_svtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.1-0</code>,  <code>0.4.0-2</code>,  <code>0.3.2-2</code>,  <code>0.3.2-0</code>,  <code>0.3.1-3</code>,  <code>0.3.1-2</code>,  <code>0.3.1-1</code>,  <code>0.3.0-2</code>,  <code>0.3.0-1</code>,  </span></summary>
      

      ``0.5.1-0``,  ``0.4.0-2``,  ``0.3.2-2``,  ``0.3.2-0``,  ``0.3.1-3``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.1-2``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends crcmod: 
   :depends google-auth: 
   :depends google-compute-engine: 
   :depends logzero: 
   :depends numpy: 
   :depends pandas: ``0.19.2.*``
   :depends python: ``<3``
   :depends scipy: 
   :depends statsmodels: 
   :depends svtyper: ``0.7.1.*``
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

      mamba install svtools

   and update with::

      mamba update svtools

  To create a new environment, run::

      mamba create --name myenvname svtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svtools:<tag>

   (see `svtools/tags`_ for valid values for ``<tag>``)


.. |downloads_svtools| image:: https://img.shields.io/conda/dn/bioconda/svtools.svg?style=flat
   :target: https://anaconda.org/bioconda/svtools
   :alt:   (downloads)
.. |docker_svtools| image:: https://quay.io/repository/biocontainers/svtools/status
   :target: https://quay.io/repository/biocontainers/svtools
.. _`svtools/tags`: https://quay.io/repository/biocontainers/svtools?tab=tags


.. raw:: html

    <script>
        var package = "svtools";
        var versions = ["0.5.1","0.4.0","0.3.2","0.3.2","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svtools/README.html