:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'altair-mf'
.. highlight: bash

altair-mf
=========

.. conda:recipe:: altair-mf
   :replaces_section_title:
   :noindex:

   Software for alignment\-free and spatial\-temporal analysis of multi\-FASTA data

   :homepage: https://cobilab.github.io/altair/
   :license: GPL / GPL v3 License
   :recipe: /`altair-mf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/altair-mf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/altair-mf/meta.yaml>`_

   


.. conda:package:: altair-mf

   |downloads_altair-mf| |docker_altair-mf|

   :versions:
      
      

      ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install altair-mf

   and update with::

      mamba update altair-mf

  To create a new environment, run::

      mamba create --name myenvname altair-mf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/altair-mf:<tag>

   (see `altair-mf/tags`_ for valid values for ``<tag>``)


.. |downloads_altair-mf| image:: https://img.shields.io/conda/dn/bioconda/altair-mf.svg?style=flat
   :target: https://anaconda.org/bioconda/altair-mf
   :alt:   (downloads)
.. |docker_altair-mf| image:: https://quay.io/repository/biocontainers/altair-mf/status
   :target: https://quay.io/repository/biocontainers/altair-mf
.. _`altair-mf/tags`: https://quay.io/repository/biocontainers/altair-mf?tab=tags


.. raw:: html

    <script>
        var package = "altair-mf";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/altair-mf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/altair-mf/README.html