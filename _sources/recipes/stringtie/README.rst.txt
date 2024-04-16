:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stringtie'
.. highlight: bash

stringtie
=========

.. conda:recipe:: stringtie
   :replaces_section_title:
   :noindex:

   StringTie is a fast and highly efficient assembler of RNA\-Seq alignments into potential transcripts.

   :homepage: https://ccb.jhu.edu/software/stringtie/
   :developer docs: https://github.com/gpertea/stringtie
   :license: MIT / MIT
   :recipe: /`stringtie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringtie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringtie/meta.yaml>`_
   :links: biotools: :biotools:`StringTie`, usegalaxy-eu: :usegalaxy-eu:`stringtie`, doi: :doi:`10.1038/nbt.3122`, doi: :doi:`10.1038/nprot.2016.095`, doi: :doi:`10.1186/s13059-019-1910-1`

   


.. conda:package:: stringtie

   |downloads_stringtie| |docker_stringtie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.1-6</code>,  <code>2.2.1-4</code>,  <code>2.2.1-3</code>,  <code>2.2.1-2</code>,  <code>2.2.1-1</code>,  <code>2.2.1-0</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.1.7-0</code>,  </span></summary>
      

      ``2.2.1-6``,  ``2.2.1-4``,  ``2.2.1-3``,  ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.7-0``,  ``2.1.6-0``,  ``2.1.5-1``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.0-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-1``,  ``1.3.4-0``,  ``1.3.3-4``,  ``1.3.3-3``,  ``1.3.3-2``,  ``1.3.3b-1``,  ``1.3.3b-0``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.4-2``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.1-0``,  ``0.97-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.19.1,<1.21.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: 
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

      mamba install stringtie

   and update with::

      mamba update stringtie

  To create a new environment, run::

      mamba create --name myenvname stringtie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/stringtie:<tag>

   (see `stringtie/tags`_ for valid values for ``<tag>``)


.. |downloads_stringtie| image:: https://img.shields.io/conda/dn/bioconda/stringtie.svg?style=flat
   :target: https://anaconda.org/bioconda/stringtie
   :alt:   (downloads)
.. |docker_stringtie| image:: https://quay.io/repository/biocontainers/stringtie/status
   :target: https://quay.io/repository/biocontainers/stringtie
.. _`stringtie/tags`: https://quay.io/repository/biocontainers/stringtie?tab=tags


.. raw:: html

    <script>
        var package = "stringtie";
        var versions = ["2.2.1","2.2.1","2.2.1","2.2.1","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stringtie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stringtie/README.html