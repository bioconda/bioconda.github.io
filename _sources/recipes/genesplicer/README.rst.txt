:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genesplicer'
.. highlight: bash

genesplicer
===========

.. conda:recipe:: genesplicer
   :replaces_section_title:
   :noindex:

   GeneSplicer \: A computational method for splice site prediction

   :homepage: http://www.cs.jhu.edu/~genomics/GeneSplicer
   :license: OSI
   :recipe: /`genesplicer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genesplicer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genesplicer/meta.yaml>`_
   :links: biotools: :biotools:`GeneSplicer`

   


.. conda:package:: genesplicer

   |downloads_genesplicer| |docker_genesplicer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0-1</code>,  <code>1.0-0</code>,  <code>0_2003.04.03-7</code>,  <code>0_2003.04.03-6</code>,  <code>0_2003.04.03-5</code>,  <code>0_2003.04.03-4</code>,  <code>0_2003.04.03-3</code>,  <code>0_2003.04.03-2</code>,  <code>0_2003.04.03-1</code>,  </span></summary>
      

      ``1.0-1``,  ``1.0-0``,  ``0_2003.04.03-7``,  ``0_2003.04.03-6``,  ``0_2003.04.03-5``,  ``0_2003.04.03-4``,  ``0_2003.04.03-3``,  ``0_2003.04.03-2``,  ``0_2003.04.03-1``,  ``0_2003.04.03-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: 
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

      mamba install genesplicer

   and update with::

      mamba update genesplicer

  To create a new environment, run::

      mamba create --name myenvname genesplicer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genesplicer:<tag>

   (see `genesplicer/tags`_ for valid values for ``<tag>``)


.. |downloads_genesplicer| image:: https://img.shields.io/conda/dn/bioconda/genesplicer.svg?style=flat
   :target: https://anaconda.org/bioconda/genesplicer
   :alt:   (downloads)
.. |docker_genesplicer| image:: https://quay.io/repository/biocontainers/genesplicer/status
   :target: https://quay.io/repository/biocontainers/genesplicer
.. _`genesplicer/tags`: https://quay.io/repository/biocontainers/genesplicer?tab=tags


.. raw:: html

    <script>
        var package = "genesplicer";
        var versions = ["1.0","1.0","0_2003.04.03","0_2003.04.03","0_2003.04.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genesplicer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genesplicer/README.html