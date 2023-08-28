:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'octopus'
.. highlight: bash

octopus
=======

.. conda:recipe:: octopus
   :replaces_section_title:
   :noindex:

   Octopus is a mapping\-based variant caller that implements several calling models within a unified haplotype\-aware framework.

   :homepage: https://github.com/luntergroup/octopus
   :license: MIT / MIT
   :recipe: /`octopus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/octopus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/octopus/meta.yaml>`_

   


.. conda:package:: octopus

   |downloads_octopus| |docker_octopus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.4-2</code>,  <code>0.7.4-1</code>,  <code>0.7.4-0</code>,  <code>0.6.3b-3</code>,  <code>0.6.3b-2</code>,  <code>0.6.3b-1</code>,  <code>0.6.3b-0</code>,  <code>0.5.2b-2</code>,  <code>0.5.2b-1</code>,  </span></summary>
      

      ``0.7.4-2``,  ``0.7.4-1``,  ``0.7.4-0``,  ``0.6.3b-3``,  ``0.6.3b-2``,  ``0.6.3b-1``,  ``0.6.3b-0``,  ``0.5.2b-2``,  ``0.5.2b-1``,  ``0.5.2b-0``,  ``0.5.1b-0``,  ``0.5.0b-0``,  ``0.4.1a-1``,  ``0.4.1a-0``,  ``0.3.3a-1``,  ``0.3.3a-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gmp: ``>=6.2.1,<7.0a0``
   :depends htslib: ``>=1.14,<1.15.0a0``
   :depends icu: ``>=69.1,<70.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install octopus

   and update with::

      mamba update octopus

  To create a new environment, run::

      mamba create --name myenvname octopus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/octopus:<tag>

   (see `octopus/tags`_ for valid values for ``<tag>``)


.. |downloads_octopus| image:: https://img.shields.io/conda/dn/bioconda/octopus.svg?style=flat
   :target: https://anaconda.org/bioconda/octopus
   :alt:   (downloads)
.. |docker_octopus| image:: https://quay.io/repository/biocontainers/octopus/status
   :target: https://quay.io/repository/biocontainers/octopus
.. _`octopus/tags`: https://quay.io/repository/biocontainers/octopus?tab=tags


.. raw:: html

    <script>
        var package = "octopus";
        var versions = ["0.7.4","0.7.4","0.7.4","0.6.3b","0.6.3b"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/octopus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/octopus/README.html