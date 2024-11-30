:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mantis_pfa'
.. highlight: bash

mantis_pfa
==========

.. conda:recipe:: mantis_pfa
   :replaces_section_title:
   :noindex:

   Consensus\-driven protein function annotation tool

   :homepage: https://github.com/PedroMTQ/Mantis
   :license: MIT / MIT
   :recipe: /`mantis_pfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis_pfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis_pfa/meta.yaml>`_
   :links: biotools: :biotools:`mantis_pfa`, doi: :doi:`10.1093/gigascience/giab042`

   Mantis is a fully customizable protein function annotation\,
   that dynamically integrates multiple reference databases to
   produce consensus\-driven annotations.



.. conda:package:: mantis_pfa

   |downloads_mantis_pfa| |docker_mantis_pfa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.5-3</code>,  <code>1.5.5-2</code>,  <code>1.5.5-1</code>,  <code>1.5.5-0</code>,  <code>1.5.4-0</code>,  <code>1.5.3-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-1</code>,  <code>1.5.0-0</code>,  </span></summary>
      

      ``1.5.5-3``,  ``1.5.5-2``,  ``1.5.5-1``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.1-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.9-1``,  ``1.4.9-0``,  ``1.4.8-1``,  ``1.4.8-0``,  ``1.4.7-1``,  ``1.4.7-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends cython: 
   :depends diamond: ``>=2.0.13``
   :depends hmmer: ``>=3.2.1``
   :depends libgcc-ng: ``>=12``
   :depends nltk: ``>=3.6``
   :depends numpy: 
   :depends psutil: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends requests: 
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

      mamba install mantis_pfa

   and update with::

      mamba update mantis_pfa

  To create a new environment, run::

      mamba create --name myenvname mantis_pfa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mantis_pfa:<tag>

   (see `mantis_pfa/tags`_ for valid values for ``<tag>``)


.. |downloads_mantis_pfa| image:: https://img.shields.io/conda/dn/bioconda/mantis_pfa.svg?style=flat
   :target: https://anaconda.org/bioconda/mantis_pfa
   :alt:   (downloads)
.. |docker_mantis_pfa| image:: https://quay.io/repository/biocontainers/mantis_pfa/status
   :target: https://quay.io/repository/biocontainers/mantis_pfa
.. _`mantis_pfa/tags`: https://quay.io/repository/biocontainers/mantis_pfa?tab=tags


.. raw:: html

    <script>
        var package = "mantis_pfa";
        var versions = ["1.5.5","1.5.5","1.5.5","1.5.5","1.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mantis_pfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mantis_pfa/README.html