:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dfam'
.. highlight: bash

dfam
====

.. conda:recipe:: dfam
   :replaces_section_title:
   :noindex:

   The Dfam database is a collection of Repetitive DNA element sequence alignments\, hidden Markov models \(HMMs\) and matches lists for complete Eukaryote genomes

   :homepage: dfam.org
   :documentation: https://www.dfam.org/help/family
   
   :license: CC / Creative Commons Zero
   :recipe: /`dfam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dfam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dfam/meta.yaml>`_

   


.. conda:package:: dfam

   |downloads_dfam| |docker_dfam|

   :versions:
      
      

      ``3.7-0``,  ``3.3-0``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends hmmer: 
   :depends perl: 
   :depends python: ``>3``
   :depends python-wget: 
   :depends repeatmasker: 
   :depends wget: 
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

      mamba install dfam

   and update with::

      mamba update dfam

  To create a new environment, run::

      mamba create --name myenvname dfam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dfam:<tag>

   (see `dfam/tags`_ for valid values for ``<tag>``)


.. |downloads_dfam| image:: https://img.shields.io/conda/dn/bioconda/dfam.svg?style=flat
   :target: https://anaconda.org/bioconda/dfam
   :alt:   (downloads)
.. |docker_dfam| image:: https://quay.io/repository/biocontainers/dfam/status
   :target: https://quay.io/repository/biocontainers/dfam
.. _`dfam/tags`: https://quay.io/repository/biocontainers/dfam?tab=tags


.. raw:: html

    <script>
        var package = "dfam";
        var versions = ["3.7","3.3","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dfam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dfam/README.html