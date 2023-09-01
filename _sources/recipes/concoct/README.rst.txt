:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'concoct'
.. highlight: bash

concoct
=======

.. conda:recipe:: concoct
   :replaces_section_title:
   :noindex:

   Clustering cONtigs with COverage and ComposiTion

   :homepage: https://github.com/BinPro/CONCOCT
   :license: BSD / FreeBSD
   :recipe: /`concoct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/concoct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/concoct/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.3103`

   


.. conda:package:: concoct

   |downloads_concoct| |docker_concoct|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-4</code>,  <code>1.1.0-3</code>,  <code>1.1.0-2</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.0-5</code>,  <code>1.0.0-4</code>,  <code>1.0.0-3</code>,  <code>1.0.0-2</code>,  </span></summary>
      

      ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.62b``
   :depends cython: ``>=0.28.5``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=12``
   :depends nose: ``>=1.3.0``
   :depends numpy: ``>=1.25.2,<2.0a0``
   :depends pandas: ``>=0.11.0``
   :depends python: ``>=3.11,<3.12.0a0``
   :depends python_abi: ``3.11.* *_cp311``
   :depends pytz: ``>=2013.9``
   :depends samtools: 
   :depends scikit-learn: ``1.1.3``
   :depends scipy: ``>=0.13.3``
   :depends setuptools: 
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

      mamba install concoct

   and update with::

      mamba update concoct

  To create a new environment, run::

      mamba create --name myenvname concoct

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/concoct:<tag>

   (see `concoct/tags`_ for valid values for ``<tag>``)


.. |downloads_concoct| image:: https://img.shields.io/conda/dn/bioconda/concoct.svg?style=flat
   :target: https://anaconda.org/bioconda/concoct
   :alt:   (downloads)
.. |docker_concoct| image:: https://quay.io/repository/biocontainers/concoct/status
   :target: https://quay.io/repository/biocontainers/concoct
.. _`concoct/tags`: https://quay.io/repository/biocontainers/concoct?tab=tags


.. raw:: html

    <script>
        var package = "concoct";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/concoct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/concoct/README.html