:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nmrglue'
.. highlight: bash

nmrglue
=======

.. conda:recipe:: nmrglue
   :replaces_section_title:
   :noindex:

   A module for working with NMR data in Python

   :homepage: http://www.nmrglue.com
   :license: BSD / BSD-3-Clause
   :recipe: /`nmrglue <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nmrglue>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nmrglue/meta.yaml>`_

   


.. conda:package:: nmrglue

   |downloads_nmrglue| |docker_nmrglue|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9-2</code>,  <code>0.9-1</code>,  <code>0.9-0</code>,  <code>0.8-5</code>,  <code>0.8-3</code>,  <code>0.8-2</code>,  <code>0.8-1</code>,  <code>0.8-0</code>,  <code>0.7-2</code>,  </span></summary>
      

      ``0.9-2``,  ``0.9-1``,  ``0.9-0``,  ``0.8-5``,  ``0.8-3``,  ``0.8-2``,  ``0.8-1``,  ``0.8-0``,  ``0.7-2``,  ``0.7-1``,  ``0.7-0``,  ``0.6-0``,  ``0.5-1``,  ``0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends numpy: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install nmrglue

   and update with::

      mamba update nmrglue

  To create a new environment, run::

      mamba create --name myenvname nmrglue

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nmrglue:<tag>

   (see `nmrglue/tags`_ for valid values for ``<tag>``)


.. |downloads_nmrglue| image:: https://img.shields.io/conda/dn/bioconda/nmrglue.svg?style=flat
   :target: https://anaconda.org/bioconda/nmrglue
   :alt:   (downloads)
.. |docker_nmrglue| image:: https://quay.io/repository/biocontainers/nmrglue/status
   :target: https://quay.io/repository/biocontainers/nmrglue
.. _`nmrglue/tags`: https://quay.io/repository/biocontainers/nmrglue?tab=tags


.. raw:: html

    <script>
        var package = "nmrglue";
        var versions = ["0.9","0.9","0.9","0.8","0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nmrglue/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nmrglue/README.html