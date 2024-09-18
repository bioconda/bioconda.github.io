:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'intarna'
.. highlight: bash

intarna
=======

.. conda:recipe:: intarna
   :replaces_section_title:
   :noindex:

   Efficient RNA\-RNA interaction prediction incorporating seeding and accessibility of interacting sites

   :homepage: https://github.com/BackofenLab/IntaRNA
   :license: MIT
   :recipe: /`intarna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intarna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intarna/meta.yaml>`_
   :links: biotools: :biotools:`intarna`, doi: :doi:`10.1093/nar/gkx279`, doi: :doi:`10.1093/bioinformatics/btn544`, doi: :doi:`10.1093/nar/gky329`

   


.. conda:package:: intarna

   |downloads_intarna| |docker_intarna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.1-0</code>,  <code>3.4.0-2</code>,  <code>3.4.0-1</code>,  <code>3.4.0-0</code>,  <code>3.3.2-1</code>,  <code>3.3.2-0</code>,  <code>3.3.1-1</code>,  <code>3.3.1-0</code>,  <code>3.3.0.1-1</code>,  </span></summary>
      

      ``3.4.1-0``,  ``3.4.0-2``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.3.2-1``,  ``3.3.2-0``,  ``3.3.1-1``,  ``3.3.1-0``,  ``3.3.0.1-1``,  ``3.3.0.1-0``,  ``3.2.2-0``,  ``3.2.0-0``,  ``3.1.5-0``,  ``3.1.3-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0.2-1``,  ``3.1.0.2-0``,  ``3.0.0-0``,  ``2.4.1-4``,  ``2.4.1-3``,  ``2.4.1-2``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.3.1-2``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.1-0``,  ``2.2.0-3``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.5-0``,  ``2.0.4-1``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.2.5-2``,  ``1.2.5-1``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends viennarna: ``>=2.6.4,<2.7.0a0``
   :depends zlib: 
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

      mamba install intarna

   and update with::

      mamba update intarna

  To create a new environment, run::

      mamba create --name myenvname intarna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/intarna:<tag>

   (see `intarna/tags`_ for valid values for ``<tag>``)


.. |downloads_intarna| image:: https://img.shields.io/conda/dn/bioconda/intarna.svg?style=flat
   :target: https://anaconda.org/bioconda/intarna
   :alt:   (downloads)
.. |docker_intarna| image:: https://quay.io/repository/biocontainers/intarna/status
   :target: https://quay.io/repository/biocontainers/intarna
.. _`intarna/tags`: https://quay.io/repository/biocontainers/intarna?tab=tags


.. raw:: html

    <script>
        var package = "intarna";
        var versions = ["3.4.1","3.4.0","3.4.0","3.4.0","3.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/intarna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/intarna/README.html