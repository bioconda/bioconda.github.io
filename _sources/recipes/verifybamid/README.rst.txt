:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'verifybamid'
.. highlight: bash

verifybamid
===========

.. conda:recipe:: verifybamid
   :replaces_section_title:
   :noindex:

   verifyBamID verifies identity and purity of sequence data

   :homepage: http://genome.sph.umich.edu/wiki/VerifyBamID
   :license: GPL3
   :recipe: /`verifybamid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verifybamid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verifybamid/meta.yaml>`_
   :links: biotools: :biotools:`verifybamid`, doi: :doi:`10.1016/j.ajhg.2012.09.004`

   


.. conda:package:: verifybamid

   |downloads_verifybamid| |docker_verifybamid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.3-9</code>,  <code>1.1.3-8</code>,  <code>1.1.3-7</code>,  <code>1.1.3-6</code>,  <code>1.1.3-5</code>,  <code>1.1.3-4</code>,  <code>1.1.3-3</code>,  <code>1.1.3-2</code>,  <code>1.1.3-1</code>,  </span></summary>
      

      ``1.1.3-9``,  ``1.1.3-8``,  ``1.1.3-7``,  ``1.1.3-6``,  ``1.1.3-5``,  ``1.1.3-4``,  ``1.1.3-3``,  ``1.1.3-2``,  ``1.1.3-1``,  ``1.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install verifybamid

   and update with::

      mamba update verifybamid

  To create a new environment, run::

      mamba create --name myenvname verifybamid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/verifybamid:<tag>

   (see `verifybamid/tags`_ for valid values for ``<tag>``)


.. |downloads_verifybamid| image:: https://img.shields.io/conda/dn/bioconda/verifybamid.svg?style=flat
   :target: https://anaconda.org/bioconda/verifybamid
   :alt:   (downloads)
.. |docker_verifybamid| image:: https://quay.io/repository/biocontainers/verifybamid/status
   :target: https://quay.io/repository/biocontainers/verifybamid
.. _`verifybamid/tags`: https://quay.io/repository/biocontainers/verifybamid?tab=tags


.. raw:: html

    <script>
        var package = "verifybamid";
        var versions = ["1.1.3","1.1.3","1.1.3","1.1.3","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/verifybamid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/verifybamid/README.html