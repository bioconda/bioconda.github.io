:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmntrimmer'
.. highlight: bash

hmntrimmer
==========

.. conda:recipe:: hmntrimmer
   :replaces_section_title:
   :noindex:

   A trimmer for NGS reads

   :homepage: https://github.com/guillaume-gricourt/HmnTrimmer
   :license: MIT
   :recipe: /`hmntrimmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmntrimmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmntrimmer/meta.yaml>`_

   HmnTrimmer\: a fast\-polyvalent trimmer used for several applications of next\-generation sequencing


.. conda:package:: hmntrimmer

   |downloads_hmntrimmer| |docker_hmntrimmer|

   :versions:
      
      

      ``0.6.5-1``,  ``0.6.5-0``

      

   
   :depends django: 
   :depends isa-l: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends matplotlib-base: 
   :depends packaging: 
   :depends python: 
   :depends rapidjson: 
   :depends seaborn: 
   :depends seqan: ``2.4.0.*``
   :depends spdlog: ``>=1.10.0,<1.11.0a0``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
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

      mamba install hmntrimmer

   and update with::

      mamba update hmntrimmer

  To create a new environment, run::

      mamba create --name myenvname hmntrimmer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmntrimmer:<tag>

   (see `hmntrimmer/tags`_ for valid values for ``<tag>``)


.. |downloads_hmntrimmer| image:: https://img.shields.io/conda/dn/bioconda/hmntrimmer.svg?style=flat
   :target: https://anaconda.org/bioconda/hmntrimmer
   :alt:   (downloads)
.. |docker_hmntrimmer| image:: https://quay.io/repository/biocontainers/hmntrimmer/status
   :target: https://quay.io/repository/biocontainers/hmntrimmer
.. _`hmntrimmer/tags`: https://quay.io/repository/biocontainers/hmntrimmer?tab=tags


.. raw:: html

    <script>
        var package = "hmntrimmer";
        var versions = ["0.6.5","0.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmntrimmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmntrimmer/README.html