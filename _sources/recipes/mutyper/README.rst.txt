:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mutyper'
.. highlight: bash

mutyper
=======

.. conda:recipe:: mutyper
   :replaces_section_title:
   :noindex:

   A Python package and command line utility for annotating the local ancestral sequence context of biallelic SNPs.

   :homepage: https://github.com/harrispopgen/mutyper
   :documentation: https://harrispopgen.github.io/mutyper
   
   :license: MIT / MIT
   :recipe: /`mutyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutyper/meta.yaml>`_

   


.. conda:package:: mutyper

   |downloads_mutyper| |docker_mutyper|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends biopython: 
   :depends cyvcf2: ``>=0.30.15``
   :depends libgcc: ``>=12``
   :depends pandas: 
   :depends pyfaidx: 
   :depends pyliftover: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mutyper

   and update with::

      mamba update mutyper

  To create a new environment, run::

      mamba create --name myenvname mutyper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mutyper:<tag>

   (see `mutyper/tags`_ for valid values for ``<tag>``)


.. |downloads_mutyper| image:: https://img.shields.io/conda/dn/bioconda/mutyper.svg?style=flat
   :target: https://anaconda.org/bioconda/mutyper
   :alt:   (downloads)
.. |docker_mutyper| image:: https://quay.io/repository/biocontainers/mutyper/status
   :target: https://quay.io/repository/biocontainers/mutyper
.. _`mutyper/tags`: https://quay.io/repository/biocontainers/mutyper?tab=tags


.. raw:: html

    <script>
        var package = "mutyper";
        var versions = ["1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mutyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mutyper/README.html