:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nasp'
.. highlight: bash

nasp
====

.. conda:recipe:: nasp
   :replaces_section_title:
   :noindex:

   NASP\: an accurate\, rapid method for the identification of SNPs in WGS datasets that supports flexible input and output formats

   :homepage: https://github.com/TGenNorth/nasp
   :license: Academic and Research License
   :recipe: /`nasp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nasp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nasp/meta.yaml>`_
   :links: doi: :doi:`10.1099/mgen.0.000074`

   


.. conda:package:: nasp

   |downloads_nasp| |docker_nasp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.2-1</code>,  <code>1.1.2-0</code>,  <code>1.0.2a1-3</code>,  <code>1.0.2a1-2</code>,  <code>1.0.2a1-1</code>,  <code>1.0.1-1</code>,  </span></summary>
      

      ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.0.2a1-3``,  ``1.0.2a1-2``,  ``1.0.2a1-1``,  ``1.0.1-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends mummer: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends samtools: ``<1.3``
   :depends trimmomatic: 
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

      mamba install nasp

   and update with::

      mamba update nasp

  To create a new environment, run::

      mamba create --name myenvname nasp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nasp:<tag>

   (see `nasp/tags`_ for valid values for ``<tag>``)


.. |downloads_nasp| image:: https://img.shields.io/conda/dn/bioconda/nasp.svg?style=flat
   :target: https://anaconda.org/bioconda/nasp
   :alt:   (downloads)
.. |docker_nasp| image:: https://quay.io/repository/biocontainers/nasp/status
   :target: https://quay.io/repository/biocontainers/nasp
.. _`nasp/tags`: https://quay.io/repository/biocontainers/nasp?tab=tags


.. raw:: html

    <script>
        var package = "nasp";
        var versions = ["1.2.1","1.2.1","1.2.0","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nasp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nasp/README.html