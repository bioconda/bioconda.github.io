:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bleties'
.. highlight: bash

bleties
=======

.. conda:recipe:: bleties
   :replaces_section_title:
   :noindex:

   BleTIES\: Basic Long\-read Enabled Toolkit for Interspersed DNA Elimination Studies

   :homepage: https://github.com/Swart-lab/bleties
   :license: MIT
   :recipe: /`bleties <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bleties>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bleties/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.4723565`

   


.. conda:package:: bleties

   |downloads_bleties| |docker_bleties|

   :versions:
      
      

      ``0.1.11-1``,  ``0.1.11-0``,  ``0.1.9-0``

      

   
   :depends biopython: ``1.76.*``
   :depends htslib: ``1.9.*``
   :depends matplotlib-base: 
   :depends muscle: ``3.8.1551.*``
   :depends ncrf: ``1.01.02.*``
   :depends pandas: 
   :depends pip: 
   :depends pysam: ``0.15.4.*``
   :depends python: ``3.7.6.*``
   :depends samtools: ``1.9.*``
   :depends scipy: ``1.5.0.*``
   :depends spoa: ``4.0.3.*``
   :depends xz: ``5.2.5.*``
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

      mamba install bleties

   and update with::

      mamba update bleties

  To create a new environment, run::

      mamba create --name myenvname bleties

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bleties:<tag>

   (see `bleties/tags`_ for valid values for ``<tag>``)


.. |downloads_bleties| image:: https://img.shields.io/conda/dn/bioconda/bleties.svg?style=flat
   :target: https://anaconda.org/bioconda/bleties
   :alt:   (downloads)
.. |docker_bleties| image:: https://quay.io/repository/biocontainers/bleties/status
   :target: https://quay.io/repository/biocontainers/bleties
.. _`bleties/tags`: https://quay.io/repository/biocontainers/bleties?tab=tags


.. raw:: html

    <script>
        var package = "bleties";
        var versions = ["0.1.11","0.1.11","0.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bleties/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bleties/README.html