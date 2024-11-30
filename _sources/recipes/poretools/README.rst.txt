:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'poretools'
.. highlight: bash

poretools
=========

.. conda:recipe:: poretools
   :replaces_section_title:
   :noindex:

   poretools\: a toolkit for working with nanopore sequencing data from Oxford Nanopore

   :homepage: http://poretools.readthedocs.org/en/latest/
   :license: MIT
   :recipe: /`poretools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poretools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poretools/meta.yaml>`_

   


.. conda:package:: poretools

   |downloads_poretools| |docker_poretools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.1a1-8</code>,  <code>0.6.1a1-7</code>,  <code>0.6.1a1-6</code>,  <code>0.6.1a1-5</code>,  <code>0.6.1a1-4</code>,  <code>0.6.1a1-3</code>,  <code>0.6.1a0-0</code>,  <code>0.6.0-0</code>,  <code>0.5.1-1</code>,  </span></summary>
      

      ``0.6.1a1-8``,  ``0.6.1a1-7``,  ``0.6.1a1-6``,  ``0.6.1a1-5``,  ``0.6.1a1-4``,  ``0.6.1a1-3``,  ``0.6.1a0-0``,  ``0.6.0-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends h5py: ``>=2.2.0``
   :depends hdf5: 
   :depends matplotlib: 
   :depends pandas: 
   :depends python: ``<3``
   :depends seaborn: 
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

      mamba install poretools

   and update with::

      mamba update poretools

  To create a new environment, run::

      mamba create --name myenvname poretools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/poretools:<tag>

   (see `poretools/tags`_ for valid values for ``<tag>``)


.. |downloads_poretools| image:: https://img.shields.io/conda/dn/bioconda/poretools.svg?style=flat
   :target: https://anaconda.org/bioconda/poretools
   :alt:   (downloads)
.. |docker_poretools| image:: https://quay.io/repository/biocontainers/poretools/status
   :target: https://quay.io/repository/biocontainers/poretools
.. _`poretools/tags`: https://quay.io/repository/biocontainers/poretools?tab=tags


.. raw:: html

    <script>
        var package = "poretools";
        var versions = ["0.6.1a1","0.6.1a1","0.6.1a1","0.6.1a1","0.6.1a1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poretools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poretools/README.html