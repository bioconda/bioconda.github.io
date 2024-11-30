:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqprep'
.. highlight: bash

seqprep
=======

.. conda:recipe:: seqprep
   :replaces_section_title:
   :noindex:

   Tool for stripping adaptors and\/or merging paired reads with overlap into single reads.

   :homepage: https://github.com/jstjohn/SeqPrep
   :license: MIT / MIT
   :recipe: /`seqprep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqprep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqprep/meta.yaml>`_
   :links: biotools: :biotools:`seqprep`, doi: :doi:`10.1134/S1021443716020175`

   


.. conda:package:: seqprep

   |downloads_seqprep| |docker_seqprep|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.2-8</code>,  <code>1.3.2-7</code>,  <code>1.3.2-6</code>,  <code>1.3.2-5</code>,  <code>1.3.2-4</code>,  <code>1.3.2-3</code>,  <code>1.3.2-2</code>,  <code>1.2-1</code>,  <code>1.2-0</code>,  </span></summary>
      

      ``1.3.2-8``,  ``1.3.2-7``,  ``1.3.2-6``,  ``1.3.2-5``,  ``1.3.2-4``,  ``1.3.2-3``,  ``1.3.2-2``,  ``1.2-1``,  ``1.2-0``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install seqprep

   and update with::

      mamba update seqprep

  To create a new environment, run::

      mamba create --name myenvname seqprep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqprep:<tag>

   (see `seqprep/tags`_ for valid values for ``<tag>``)


.. |downloads_seqprep| image:: https://img.shields.io/conda/dn/bioconda/seqprep.svg?style=flat
   :target: https://anaconda.org/bioconda/seqprep
   :alt:   (downloads)
.. |docker_seqprep| image:: https://quay.io/repository/biocontainers/seqprep/status
   :target: https://quay.io/repository/biocontainers/seqprep
.. _`seqprep/tags`: https://quay.io/repository/biocontainers/seqprep?tab=tags


.. raw:: html

    <script>
        var package = "seqprep";
        var versions = ["1.3.2","1.3.2","1.3.2","1.3.2","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqprep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqprep/README.html