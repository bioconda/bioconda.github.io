:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqspec'
.. highlight: bash

seqspec
=======

.. conda:recipe:: seqspec
   :replaces_section_title:
   :noindex:

   File format that describes data generated from genomics experiments.  File format and seqspec tool enable uniform processing of genomics data.

   :homepage: https://github.com/sbooeshaghi/seqspec
   :license: MIT
   :recipe: /`seqspec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqspec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqspec/meta.yaml>`_

   


.. conda:package:: seqspec

   |downloads_seqspec| |docker_seqspec|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-0``

      

   
   :depends biopython: 
   :depends jsonschema: 
   :depends matplotlib-base: 
   :depends openai-agents: ``>=0.2.8``
   :depends openinference-instrumentation-openai-agents: ``>=1.2.0``
   :depends opentelemetry-sdk: ``>=1.36.0``
   :depends packaging: 
   :depends pydantic: 
   :depends python: ``>=3.6``
   :depends python-newick: 
   :depends pyyaml: ``>=6.0``
   :depends requests: 
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

      mamba install seqspec

   and update with::

      mamba update seqspec

  To create a new environment, run::

      mamba create --name myenvname seqspec

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqspec:<tag>

   (see `seqspec/tags`_ for valid values for ``<tag>``)


.. |downloads_seqspec| image:: https://img.shields.io/conda/dn/bioconda/seqspec.svg?style=flat
   :target: https://anaconda.org/bioconda/seqspec
   :alt:   (downloads)
.. |docker_seqspec| image:: https://quay.io/repository/biocontainers/seqspec/status
   :target: https://quay.io/repository/biocontainers/seqspec
.. _`seqspec/tags`: https://quay.io/repository/biocontainers/seqspec?tab=tags


.. raw:: html

    <script>
        var package = "seqspec";
        var versions = ["0.4.0","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqspec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqspec/README.html