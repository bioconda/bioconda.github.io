:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nucleoatac'
.. highlight: bash

nucleoatac
==========

.. conda:recipe:: nucleoatac
   :replaces_section_title:
   :noindex:

   Python package for calling nucleosomes using ATAC\-Seq data. Also includes general scripts for working with paired\-end ATAC\-Seq data \(or potentially other paired\-end data\).

   :homepage: https://github.com/GreenleafLab/NucleoATAC
   :documentation: http://nucleoatac.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`nucleoatac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nucleoatac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nucleoatac/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.192294.115`

   


.. conda:package:: nucleoatac

   |downloads_nucleoatac| |docker_nucleoatac|

   :versions:
      
      

      ``0.3.4-7``,  ``0.3.4-6``,  ``0.3.4-5``,  ``0.3.4-4``,  ``0.3.4-3``,  ``0.3.4-2``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.1-0``

      

   
   :depends htslib: ``>=1.14,<1.23.0a0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.16.5,<2.0a0``
   :depends pysam: ``>=0.10.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27m``
   :depends scipy: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install nucleoatac

   and update with::

      mamba update nucleoatac

  To create a new environment, run::

      mamba create --name myenvname nucleoatac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nucleoatac:<tag>

   (see `nucleoatac/tags`_ for valid values for ``<tag>``)


.. |downloads_nucleoatac| image:: https://img.shields.io/conda/dn/bioconda/nucleoatac.svg?style=flat
   :target: https://anaconda.org/bioconda/nucleoatac
   :alt:   (downloads)
.. |docker_nucleoatac| image:: https://quay.io/repository/biocontainers/nucleoatac/status
   :target: https://quay.io/repository/biocontainers/nucleoatac
.. _`nucleoatac/tags`: https://quay.io/repository/biocontainers/nucleoatac?tab=tags


.. raw:: html

    <script>
        var package = "nucleoatac";
        var versions = ["0.3.4","0.3.4","0.3.4","0.3.4","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nucleoatac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nucleoatac/README.html