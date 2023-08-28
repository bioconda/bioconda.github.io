:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tadtool'
.. highlight: bash

tadtool
=======

.. conda:recipe:: tadtool
   :replaces_section_title:
   :noindex:

   TADtool is an interactive tool for the identification of meaningful parameters in TAD\-calling algorithms for Hi\-C data

   :homepage: https://github.com/vaquerizaslab/tadtool
   :license: MIT / MIT License
   :recipe: /`tadtool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadtool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadtool/meta.yaml>`_

   


.. conda:package:: tadtool

   |downloads_tadtool| |docker_tadtool|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.84-0</code>,  <code>0.82-0</code>,  <code>0.81-1</code>,  <code>0.81-0</code>,  <code>0.80-0</code>,  <code>0.79-0</code>,  <code>0.78-0</code>,  <code>0.77-0</code>,  <code>0.75-1</code>,  </span></summary>
      

      ``0.84-0``,  ``0.82-0``,  ``0.81-1``,  ``0.81-0``,  ``0.80-0``,  ``0.79-0``,  ``0.78-0``,  ``0.77-0``,  ``0.75-1``,  ``0.75-0``

      
      .. raw:: html

         </details>
      

   
   :depends future: 
   :depends matplotlib-base: 
   :depends numpy: ``>=1.9.0``
   :depends progressbar2: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install tadtool

   and update with::

      mamba update tadtool

  To create a new environment, run::

      mamba create --name myenvname tadtool

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tadtool:<tag>

   (see `tadtool/tags`_ for valid values for ``<tag>``)


.. |downloads_tadtool| image:: https://img.shields.io/conda/dn/bioconda/tadtool.svg?style=flat
   :target: https://anaconda.org/bioconda/tadtool
   :alt:   (downloads)
.. |docker_tadtool| image:: https://quay.io/repository/biocontainers/tadtool/status
   :target: https://quay.io/repository/biocontainers/tadtool
.. _`tadtool/tags`: https://quay.io/repository/biocontainers/tadtool?tab=tags


.. raw:: html

    <script>
        var package = "tadtool";
        var versions = ["0.84","0.82","0.81","0.81","0.80"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tadtool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tadtool/README.html